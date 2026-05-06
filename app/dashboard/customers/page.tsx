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
    <div className="min-h-screen bg-gray-100 md:bg-gray-50 fade-in">
      <div className="px-4 max-w-[950px] mx-auto">
        <div className="flex w-full items-center justify-between fade-in-up stagger-1">
          <h1 className="mb-4 mt-2 text-3xl md:text-4xl font-heading px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg text-purple-800">Customers</h1>
        </div>
        <div className="mt-4 flex items-center gap-5 md:mt-8 fade-in-up stagger-2">
          <div className="flex-[3] min-w-0">
            <Search placeholder="Search customers..." />
          </div>
          <div className="flex-[1] min-w-[140px]">
            <UniversalButton type="create" entity="customers" />
          </div>
        </div>
        <div className="mt-6 fade-in-up stagger-3">
          <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
            <CustomersTable customers={await fetchFilteredCustomers(query, currentPage)} />
          </Suspense>
        </div>
        <div className="my-5 flex w-full justify-center fade-in-up stagger-4">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}