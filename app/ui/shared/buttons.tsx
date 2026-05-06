import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice, deleteCustomer } from '@/app/lib/actions';

// Single universal button component - eliminates all other buttons
interface UniversalButtonProps {
  type: 'create' | 'update' | 'delete';
  entity: 'customers' | 'invoices';
  id?: string;
  label?: string;
}

export function UniversalButton({ type, entity, id, label }: UniversalButtonProps) {
  const basePath = `/dashboard/${entity}`;
  const entityLabel = label || `${entity.charAt(0).toUpperCase() + entity.slice(1, -1)}`;

  switch (type) {
    case 'create':
      return (
        <Link
          href={`${basePath}/create`}
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-all hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 create"
        >
          <span className="hidden md:block whitespace-nowrap">Create {entityLabel}</span>
          <PlusIcon className="h-5 md:ml-4 mx-auto" />
        </Link>
      );
    case 'update':
      return (
        <Link
          href={`${basePath}/${id}/edit`}
          className="rounded-md border p-2 hover:bg-gray-100 transition-all hover:shadow-lg btn-scale update"
        >
          <PencilIcon className="w-5" />
        </Link>
      );
    case 'delete': {
      // Use bound function pattern for server actions
      const deleteAction = entity === 'customers' ? deleteCustomer : deleteInvoice;
      const deleteWithId = deleteAction.bind(null, id as string);
      
      return (
        <form action={deleteWithId}>
          <button type="submit" className="rounded-md border p-2 hover:bg-gray-100 transition-all hover:shadow-lg btn-scale delete">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
          </button>
        </form>
      );
    }
    default:
      return null;
  }
}
