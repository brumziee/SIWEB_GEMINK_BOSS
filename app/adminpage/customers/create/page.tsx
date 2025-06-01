import CreateCustomerForm from '@/app/ui/adminpage/customer/createcustomerform';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/adminpage/customers' },
          {
            label: 'Create Customer',
            href: '/adminpage/customers/create',
            active: true,
          },
        ]}
      />
      <CreateCustomerForm />
    </main>
  );
}
