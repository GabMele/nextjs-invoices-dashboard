import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice, deleteCustomer } from '@/app/lib/actions';

interface CreateButtonProps {
  href: string;
  label: string;
}

export function CreateButton({ href, label }: CreateButtonProps) {
  return (
    <Link
      href={href}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{label}</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

interface UpdateButtonProps {
  href: string;
  id: string;
}

export function UpdateButton({ href, id }: UpdateButtonProps) {
  return (
    <Link
      href={`${href}/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

interface DeleteButtonProps {
  id: string;
  onDelete: (id: string) => void;
}

export function DeleteButton({ id, onDelete }: DeleteButtonProps) {
  const deleteWithId = onDelete.bind(null, id);
  return (
    <form action={deleteWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

// Invoice-specific components (backward compatibility)
export function CreateInvoice() {
  return <CreateButton href="/dashboard/invoices/create" label="Create Invoice" />;
}

export function UpdateInvoice({ id }: { id: string }) {
  return <UpdateButton href="/dashboard/invoices" id={id} />;
}

export function DeleteInvoice({ id }: { id: string }) {
  return <DeleteButton id={id} onDelete={deleteInvoice} />;
}

// Customer-specific components
export function CreateCustomer() {
  return <CreateButton href="/dashboard/customers/create" label="Create Customer" />;
}

export function UpdateCustomer({ id }: { id: string }) {
  return <UpdateButton href="/dashboard/customers" id={id} />;
}

export function DeleteCustomer({ id }: { id: string }) {
  return <DeleteButton id={id} onDelete={deleteCustomer} />;
}
