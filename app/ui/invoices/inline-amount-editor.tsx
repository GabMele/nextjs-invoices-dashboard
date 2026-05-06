'use client';

import { useState } from 'react';
import { formatCurrency } from '@/app/lib/utils';
import { updateInvoiceAmount } from '@/app/lib/actions';
import { PencilIcon } from '@heroicons/react/24/outline';

interface InlineAmountEditorProps {
  invoiceId: string;
  amount: number;
  className?: string;
}

export default function InlineAmountEditor({ 
  invoiceId, 
  amount, 
  className = '' 
}: InlineAmountEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState((amount / 100).toString());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    const newAmount = parseFloat(editValue);
    
    // Validation
    if (isNaN(newAmount) || newAmount < 0) {
      setError('Invalid amount');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await updateInvoiceAmount(invoiceId, newAmount);
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update');
      setEditValue((amount / 100).toString()); // Reset to original value
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue((amount / 100).toString());
      setError(null);
    }
  };

  const handleBlur = () => {
    if (isEditing) {
      handleSave();
    }
  };

  if (isEditing) {
    return (
      <div className={`inline-block ${className}`}>
        <input
          type="number"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          disabled={isLoading}
          className={`
            w-24 px-2 py-1 text-sm border rounded
            ${error ? 'border-red-500' : 'border-blue-300'}
            ${isLoading ? 'bg-gray-100' : 'bg-white'}
            focus:outline-none focus:ring-2 focus:ring-blue-500
          `}
          autoFocus
        />
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
      title="Click to edit amount"
    >
      {formatCurrency(amount)}
      <PencilIcon className="size-6 opacity-0 group-hover:opacity-100 transition-opacity" />
    </span>
  );
}
