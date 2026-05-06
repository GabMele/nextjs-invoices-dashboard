'use client';

import { useState } from 'react';
import { updateInvoiceStatus } from '@/app/lib/actions';
import { PencilIcon } from '@heroicons/react/24/outline';

interface InlineStatusEditorProps {
  invoiceId: string;
  status: string;
  className?: string;
}

export default function InlineStatusEditor({ 
  invoiceId, 
  status, 
  className = '' 
}: InlineStatusEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(status);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (editValue === status) {
      setIsEditing(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await updateInvoiceStatus(invoiceId, editValue);
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update');
      setEditValue(status); // Reset to original value
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(status);
      setError(null);
    }
  };

  const handleBlur = () => {
    if (isEditing) {
      handleSave();
    }
  };

  const getStatusDisplay = (statusValue: string) => {
    const baseClasses = "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium";
    switch (statusValue) {
      case 'paid':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  if (isEditing) {
    return (
      <div className={`inline-block ${className}`}>
        <select
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          disabled={isLoading}
          className={`
            px-2 py-1 text-xs border rounded
            ${error ? 'border-red-500' : 'border-blue-300'}
            ${isLoading ? 'bg-gray-100' : 'bg-white'}
            focus:outline-none focus:ring-2 focus:ring-blue-500
          `}
          autoFocus
        >
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
        {error && (
          <span className="text-xs text-red-500 ml-2">{error}</span>
        )}
      </div>
    );
  }

  return (
    <span
      onClick={() => setIsEditing(true)}
      className={`
        cursor-pointer hover:bg-blue-50 px-2 py-1 rounded
        hover:text-blue-600 hover:font-medium
        transition-all duration-200
        inline-flex items-center gap-1 group
        ${className}
      `}
      title="Click to edit status"
    >
      <span className={getStatusDisplay(status)}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
      <PencilIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </span>
  );
}
