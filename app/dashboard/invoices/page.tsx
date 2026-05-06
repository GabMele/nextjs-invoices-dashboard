// @app/dashboard/invoices/page.tsx

import Pagination from "@/app/ui/shared/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { UniversalButton } from '@/app/ui/shared/buttons';
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchInvoicesPages } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  
  return (
    <div className="w-full fade-in">
      <div className="px-4 max-w-[950px] mx-auto">
        <div className="flex w-full items-center justify-between fade-in-up stagger-1">
          <h1 className="mb-4 mt-2 text-3xl md:text-4xl font-heading px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg text-blue-800">Invoices</h1>
        </div>
        <div className="mt-4 flex items-center gap-5 md:mt-8 fade-in-up stagger-2">
          <div className="flex-[3] min-w-0">
            <Search placeholder="Search invoices..." />
          </div>
          <div className="flex-[1] min-w-[120px] max-w-[120px]">
            <UniversalButton type="create" entity="invoices" />
          </div>
        </div>
        <div className="mt-6 fade-in-up stagger-3">
          <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
            <Table query={query} currentPage={currentPage} />
          </Suspense>
        </div>
        <div className="my-5 flex w-full justify-center fade-in-up stagger-4">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}