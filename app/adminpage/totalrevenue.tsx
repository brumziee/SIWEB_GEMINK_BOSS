import prisma from '@/app/lib/prisma';
import AnalyticsCard from '@/app/adminpage/analyticscard';

export default async function TotalRevenue() {
  const { _sum } = await prisma.transaksi.aggregate({
    _sum: { total_harga: true },
  });
  return (
    <AnalyticsCard
      title="Total Revenue"
      value={`Rp ${_sum.total_harga?.toLocaleString('id-ID') ?? 0}`}
    />
  );
}
