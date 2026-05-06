// @app/dashboard/(overview)/page.tsx

import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import CardWrapper from "@/app/ui/dashboard/cards";
import { Suspense } from "react";
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";


export default async function Page() {
  // const latestInvoices = await fetchLatestInvoices();
  // const revenue = await fetchRevenue();
  // const {
  //   numberOfCustomers,
  //   numberOfInvoices,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();
  return (
    <div className="w-full fade-in">
      <div className="fixed inset-0 bg-white -z-10"></div>
      <div className="px-4 max-w-[1000px] mx-auto relative z-10">
        <div className="flex w-full items-center justify-between fade-in-up stagger-1">
          <h1 className="mb-8 mt-2 text-3xl md:text-4xl font-heading px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 rounded-lg text-green-800">Dashboard</h1>
        </div>
      </div>
      <main className="px-4 max-w-[1000px] mx-auto">
        {/* Cards Section */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 fade-in-up stagger-2">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}>
              <CardWrapper />
            </Suspense>
          </div>
        </div>

        {/* Charts and Latest Invoices Section */}
        <div className="bg-gray-50 rounded-xl p-6 fade-in-up stagger-3">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton />}>
              <RevenueChart />
            </Suspense>
            <Suspense fallback={<LatestInvoicesSkeleton />}>
              <LatestInvoices />
            </Suspense>
          </div>
        </div>
      </main>
      <div className="mb-5"></div>
    </div>
  );
}
