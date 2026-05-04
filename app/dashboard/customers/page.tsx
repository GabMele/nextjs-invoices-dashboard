import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers, fetchCustomersPages } from '@/app/lib/data';
import { Metadata } from 'next';
import Pagination from '@/app/ui/shared/pagination';
import Search from '@/app/ui/search';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { CreateCustomer } from '@/app/ui/shared/buttons';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers', active: true },
        ]}
      />
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomer />
      </div>
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <CustomersTable customers={await fetchFilteredCustomers(query, currentPage)} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}