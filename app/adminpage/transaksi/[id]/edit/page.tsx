// app/adminpage/transaksi/[id]/edit/page.tsx
import EditTransactionForm from '@/app/ui/adminpage/transaksi/edittransaksiform';
import { prisma } from '@/prisma/prisma';
import { notFound } from 'next/navigation';

export default async function EditTransactionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // tunggu Promise selesai
  const id = parseInt(resolvedParams.id);

  if (isNaN(id)) {
    notFound();
  }

  const transaksi = await prisma.transaksi.findUnique({
    where: { id_transaksi: id },
  });

  if (!transaksi) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Transaksi</h1>
      <EditTransactionForm transaksi={transaksi} />
    </main>
  );
}
