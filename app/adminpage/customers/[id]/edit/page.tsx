// app/adminpage/customers/[id]/edit/page.tsx

import { notFound } from 'next/navigation';
import { prisma } from '@/prisma/prisma';
import EditCustomerForm from '@/app/ui/adminpage/customer/editcustomerform';

export default async function EditCustomerPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    notFound(); // jika id bukan angka, redirect ke 404
  }

  const customer = await prisma.pelanggan.findUnique({
    where: {
      id_pelanggan: id,
    },
  });

  if (!customer) {
    notFound(); // jika customer tidak ditemukan, redirect ke 404
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Customer</h1>
      <EditCustomerForm customer={customer} />
    </main>
  );
}
