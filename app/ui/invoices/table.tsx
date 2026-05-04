import { UpdateInvoice, DeleteInvoice } from '@/app/ui/shared';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { 
  Table, 
  TableColumn, 
  UserInfo, 
  Card, 
  CardHeader, 
  CardContent 
} from '@/app/ui/shared';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  const columns: TableColumn<typeof invoices[0]>[] = [
    {
      key: 'name',
      header: 'Customer',
      render: (_, invoice) => (
        <UserInfo 
          name={invoice.name}
          email={invoice.email}
          imageUrl={invoice.image_url}
        />
      ),
    },
    {
      key: 'amount',
      header: 'Amount',
      render: (value) => formatCurrency(Number(value)),
    },
    {
      key: 'date',
      header: 'Date',
      render: (value) => formatDateToLocal(String(value)),
    },
    {
      key: 'status',
      header: 'Status',
      render: (value) => <InvoiceStatus status={String(value)} />,
    },
  ];

  const mobileCard = (invoice: typeof invoices[0]) => (
    <Card key={invoice.id}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <UserInfo 
            name={invoice.name}
            email={invoice.email}
            imageUrl={invoice.image_url}
          />
          <InvoiceStatus status={invoice.status} />
        </div>
      </CardHeader>
      <CardContent className="flex w-full items-center justify-between pt-4">
        <div>
          <p className="text-xl font-medium">
            {formatCurrency(invoice.amount)}
          </p>
          <p>{formatDateToLocal(invoice.date)}</p>
        </div>
        <div className="flex justify-end gap-2">
          <UpdateInvoice id={invoice.id} />
          <DeleteInvoice id={invoice.id} />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Table
      data={invoices}
      columns={columns}
      actions={(invoice) => (
        <>
          <UpdateInvoice id={invoice.id} />
          <DeleteInvoice id={invoice.id} />
        </>
      )}
      mobileCard={mobileCard}
    />
  );
}
