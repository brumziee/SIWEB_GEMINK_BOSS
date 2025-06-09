import EditCustomerForm from '@/app/ui/adminpage/customer/editcustomerform';
import { prisma } from '@/prisma/prisma';
import { notFound } from 'next/navigation';

export default async function EditCustomerPage({ params }: any) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    notFound();
  }

  const customer = await prisma.pelanggan.findUnique({
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
