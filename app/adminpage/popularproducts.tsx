import prisma from '@/app/lib/prisma';
import AnalyticsCard from '@/app/adminpage/analyticscard';

export default async function PopularProduct() {
  await new Promise((r) => setTimeout(r, 2000));
  const result = await prisma.transaksi.groupBy({
    by: ['id_produk'],
    _count: { id_transaksi: true },
    orderBy: { _count: { id_transaksi: 'desc' } },
    take: 1,
  });

  const produk = result.length
    ? await prisma.produk.findUnique({
        where: { id_produk: result[0].id_produk },
      })
    : null;

  return (
    <AnalyticsCard
      title="Produk Terlaris"
      value={produk?.nama_produk ?? 'Belum ada transaksi'}
    />
  );
}
