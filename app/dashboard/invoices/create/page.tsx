import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/shared/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div className="w-full fade-in">
      <div className="px-4 max-w-[950px] mx-auto">
        <div className="flex w-full items-center justify-between fade-in-up stagger-1">
          <div className="mb-4 mt-2 text-3xl md:text-4xl font-heading px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg text-blue-800">
            <Breadcrumbs
              breadcrumbs={[
                { label: "Invoices", href: "/dashboard/invoices" },
                {
                  label: "Create Invoice",
                  href: "/dashboard/invoices/create",
                  active: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <main className="px-4 max-w-[950px] mx-auto">
        <Form customers={customers} />
      </main>
    </div>
  );
}
