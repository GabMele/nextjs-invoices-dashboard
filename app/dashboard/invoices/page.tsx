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
      <div className="flex w-full items-center justify-between fade-in-up stagger-1">
        <h1 className="mb-4 mt-2 text-2xl md:text-3xl font-heading px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg text-blue-800">Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <UniversalButton type="create" entity="invoices" />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center fade-in-up stagger-3">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}