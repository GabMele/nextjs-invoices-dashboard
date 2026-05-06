import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers, fetchCustomersPages } from '@/app/lib/data';
import { Metadata } from 'next';
import Pagination from '@/app/ui/shared/pagination';
import Search from '@/app/ui/search';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { UniversalButton } from '@/app/ui/shared/buttons';
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
    <div className="w-full fade-in">
      <div className="flex w-full items-center justify-between fade-in-up stagger-1">
        <h1 className="mb-4 mt-2 text-2xl md:text-3xl font-heading px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg text-purple-800">Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <UniversalButton type="create" entity="customers" />
      </div>
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <CustomersTable customers={await fetchFilteredCustomers(query, currentPage)} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center fade-in-up stagger-3">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}