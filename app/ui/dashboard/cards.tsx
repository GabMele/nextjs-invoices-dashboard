import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  ArrowRightIcon,
  LinkIcon,
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

  const getCardClasses = () => {
    const baseClasses = "p-2 rounded-xl shadow-sm dashboard-card transition-all duration-300";
    
    // All cards: thicker stronger borders on hover
    switch (type) {
      case 'collected':
        return `${baseClasses} bg-gray-300 hover:ring-6 hover:ring-green-300`;
      case 'pending':
        return `${baseClasses} bg-gray-300 hover:ring-6 hover:ring-yellow-300`;
      case 'invoices':
        return `${baseClasses} bg-gray-300 hover:ring-6 hover:ring-blue-300`;
      case 'customers':
        return `${baseClasses} bg-gray-300 hover:ring-6 hover:ring-purple-300`;
      default:
        return `${baseClasses} bg-gray-300`;
    }
  };

  const getValueClasses = () => {
    const baseClasses = "truncate rounded-xl px-4 py-2 text-center text-2xl font-heading card-value";
    
    // Clickable cards (invoices, customers): vivid text on hover, white background
    if (type === 'invoices') {
      return `${baseClasses} bg-gray-200 hover:bg-white hover:text-blue-600 hover:font-bold cursor-pointer clickable`;
    }
    if (type === 'customers') {
      return `${baseClasses} bg-gray-200 hover:bg-white hover:text-purple-600 hover:font-bold cursor-pointer clickable`;
    }
    
    // Non-clickable cards (collected, pending): background doesn't change
    return `${baseClasses} bg-gray-200`;
  };

  const getClickableIndicator = () => {
    if (type === 'invoices') {
      return (
        <ArrowRightIcon className="size-6 text-gray-400 arrow-icon" />
      );
    }
    if (type === 'customers') {
      return (
        <ArrowRightIcon className="size-6 text-gray-400 arrow-icon" />
      );
    }
    // Non-clickable cards: placeholder to maintain consistent height
    return (
      <div className="size-6"></div>
    );
  };

  const cardContent = (
    <div className={`${getCardClasses()} ${type}`} data-card-type={type}>
      <div className="flex p-4 justify-between items-center">
        <div className="flex items-center">
          {Icon ? <Icon className="size-5 text-gray-700 card-icon" /> : null}
          <h3 className="ml-2 text-sm font-medium whitespace-nowrap">{title}</h3>
        </div>
        {getClickableIndicator()}
      </div>
      <p className={getValueClasses()}>
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
