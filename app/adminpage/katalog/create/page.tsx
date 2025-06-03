import CreateProductForm from '@/app/ui/adminpage/katalog/createproduk';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Katalog Produk', href: '/adminpage/katalog' },
          { label: 'Tambah Produk', href: '/adminpage/katalog/create', active: true },
        ]}
      />
      <div className="p-6">
        <CreateProductForm />
      </div>
    </main>
  );
}
