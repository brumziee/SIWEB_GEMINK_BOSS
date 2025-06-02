import EditTransactionForm from '@/app/ui/adminpage/transaksi/edittransaksiform';
import { prisma } from '@/prisma/prisma';
import { notFound } from 'next/navigation';

interface Transaksi {
  id_transaksi: number;
  id_produk: number;
  id_pelanggan: number;
  tanggal_transaksi: Date;
  total_harga: number;
}

export default async function EditTransactionPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    notFound(); // Jika ID tidak valid
  }

  const transaksi: Transaksi | null = await prisma.transaksi.findUnique({
    where: { id_transaksi: id },
  });

  if (!transaksi) {
    notFound(); // Jika data transaksi tidak ditemukan
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Transaksi</h1>
      <EditTransactionForm transaksi={transaksi} />
    </main>
  );
}
