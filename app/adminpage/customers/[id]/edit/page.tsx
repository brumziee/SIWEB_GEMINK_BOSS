// app/adminpage/customers/[id]/edit/page.tsx

import EditCustomerForm from '@/app/ui/adminpage/customer/editcustomerform';
import { prisma } from '@/prisma/prisma';
import { notFound } from 'next/navigation';

// Definisi tipe data customer
interface Customer {
  id_pelanggan: number;
  nama_pelanggan: string;
  umur_pelanggan: number;
  alamat_pelanggan: string;
  email_pelanggan: string;
}

// Tipe props dari Next.js App Router
interface PageProps {
  params: {
    id: string;
  };
}

export default async function EditCustomerPage({ params }: PageProps) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    notFound();
  }

  const customer: Customer | null = await prisma.pelanggan.findUnique({
    where: { id_pelanggan: id },
  });

  if (!customer) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Customer</h1>
      <EditCustomerForm customer={customer} />
    </main>
  );
}
