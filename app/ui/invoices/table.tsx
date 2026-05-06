import { UniversalButton } from '@/app/ui/shared/buttons';
import InlineAmountEditor from '@/app/ui/invoices/inline-amount-editor';
import InlineStatusEditor from '@/app/ui/invoices/inline-status-editor';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { 
  Table, 
  TableColumn, 
  UserInfo, 
  Card, 
  CardHeader, 
  CardContent,
  CardSection
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
      render: (_, invoice) => (
        <InlineAmountEditor 
          invoiceId={invoice.id} 
          amount={Number(invoice.amount)} 
        />
      ),
    },
    {
      key: 'date',
      header: 'Date',
      render: (value) => formatDateToLocal(String(value)),
    },
    {
      key: 'status',
      header: 'Status',
      render: (_, invoice) => (
        <InlineStatusEditor 
          invoiceId={invoice.id} 
          status={invoice.status} 
        />
      ),
    },
  ];

  const mobileCard = (invoice: typeof invoices[0]) => (
    <Card className="invoice-card-hover" key={invoice.id}>
      <CardHeader>
        <UserInfo 
          name={invoice.name}
          email={invoice.email}
          imageUrl={invoice.image_url}
        />
        <InlineStatusEditor 
          invoiceId={invoice.id} 
          status={invoice.status} 
        />
      </CardHeader>
      <CardContent className="flex w-full items-center justify-between pt-4">
        <div>
          <p className="text-xl font-medium">
            <InlineAmountEditor 
              invoiceId={invoice.id} 
              amount={invoice.amount} 
              className="text-xl font-medium"
            />
          </p>
          <p>{formatDateToLocal(invoice.date)}</p>
        </div>
        <div className="flex justify-end gap-2">
          <UniversalButton type="update" entity="invoices" id={invoice.id} />
          <UniversalButton type="delete" entity="invoices" id={invoice.id} />
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
          <UniversalButton type="update" entity="invoices" id={invoice.id} />
          <UniversalButton type="delete" entity="invoices" id={invoice.id} />
        </>
      )}
      mobileCard={mobileCard}
    />
  );
}
