import {
  FormattedCustomersTable,
} from '@/app/lib/definitions';
import { 
  Table, 
  TableColumn, 
  UserInfo, 
  Card, 
  CardHeader, 
  CardSection, 
  CardContent,
  UpdateCustomer, 
  DeleteCustomer 
} from '@/app/ui/shared';

export default async function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  const columns: TableColumn<FormattedCustomersTable>[] = [
    {
      key: 'name',
      header: 'Name',
      render: (_, customer) => (
        <UserInfo 
          name={customer.name}
          email={customer.email}
          imageUrl={customer.image_url}
        />
      ),
    },
    {
      key: 'email',
      header: 'Email',
    },
    {
      key: 'total_invoices',
      header: 'Total Invoices',
    },
    {
      key: 'total_pending',
      header: 'Total Pending',
    },
    {
      key: 'total_paid',
      header: 'Total Paid',
    },
  ];

  const mobileCard = (customer: FormattedCustomersTable) => (
    <Card key={customer.id}>
      <CardHeader>
        <UserInfo 
          name={customer.name}
          email={customer.email}
          imageUrl={customer.image_url}
        />
      </CardHeader>
      <CardSection>
        <div className="flex w-1/2 flex-col">
          <p className="text-xs">Pending</p>
          <p className="font-medium">{customer.total_pending}</p>
        </div>
        <div className="flex w-1/2 flex-col">
          <p className="text-xs">Paid</p>
          <p className="font-medium">{customer.total_paid}</p>
        </div>
      </CardSection>
      <CardContent className="pt-4 text-sm">
        <p>{customer.total_invoices} invoices</p>
        <div className="flex justify-end gap-3 mt-4">
          <UpdateCustomer id={customer.id} />
          <DeleteCustomer id={customer.id} />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Table
      data={customers}
      columns={columns}
      actions={(customer) => (
        <>
          <UpdateCustomer id={customer.id} />
          <DeleteCustomer id={customer.id} />
        </>
      )}
      mobileCard={mobileCard}
    />
  );
}
