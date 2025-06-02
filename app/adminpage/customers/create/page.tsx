import CreateCustomerForm from '@/app/ui/adminpage/customer/createcustomerform';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pelanggan', href: '/adminpage/customers' },
          {
            label: 'Tambah Pelanggan',
            href: '/adminpage/customers/create',
            active: true,
          },
        ]}
      />
      <CreateCustomerForm />
    </main>
  );
}
