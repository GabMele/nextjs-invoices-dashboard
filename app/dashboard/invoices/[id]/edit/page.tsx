import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/shared/breadcrumbs";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Invoice",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <div className="w-full fade-in">
      <div className="px-4 max-w-[950px] mx-auto">
        <div className="flex w-full items-center justify-between fade-in-up stagger-1">
          <div className="mb-4 mt-2 text-3xl md:text-4xl font-heading px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg text-blue-800">
            <Breadcrumbs
              breadcrumbs={[
                { label: "Invoices", href: "/dashboard/invoices" },
                {
                  label: "Edit Invoice",
                  href: `/dashboard/invoices/${id}/edit`,
                  active: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <main className="px-4 max-w-[950px] mx-auto">
        <Form invoice={invoice} customers={customers} />
      </main>
    </div>
  );
}
