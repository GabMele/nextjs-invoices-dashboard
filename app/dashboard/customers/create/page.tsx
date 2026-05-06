import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Customer',
};

export default async function Page() {
  return (
    <div className="w-full fade-in">
      <div className="px-4 max-w-[950px] mx-auto">
        <div className="flex w-full items-center justify-between fade-in-up stagger-1">
          <div className="mb-4 mt-2 text-3xl md:text-4xl font-heading px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg text-purple-800">
            <Breadcrumbs
              breadcrumbs={[
                { label: 'Customers', href: '/dashboard/customers' },
                {
                  label: 'Create Customer',
                  href: '/dashboard/customers/create',
                  active: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <main className="px-4 max-w-[950px] mx-auto">
        <Form />
      </main>
    </div>
  );
}
