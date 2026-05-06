import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { fetchCardData } from '@/app/lib/data';
import Link from 'next/link';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  const cardContent = (
    <div className={`rounded-xl bg-gray-50 p-2 shadow-sm dashboard-card ${type}`}>
      <div className="flex p-4">
        {Icon ? <Icon className="size-5 text-gray-700 card-icon" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl font-heading card-value
          ${(type === 'customers' || type === 'invoices') ? 'cursor-pointer' : ''}
        `}
      >
        {value}
      </p>
    </div>
  );

  // Add links for customers and invoices cards
  if (type === 'customers') {
    return (
      <Link href="/dashboard/customers">
        {cardContent}
      </Link>
    );
  }

  if (type === 'invoices') {
    return (
      <Link href="/dashboard/invoices">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
