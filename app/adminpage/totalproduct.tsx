import prisma from '@/app/lib/prisma';
import AnalyticsCard from '@/app/adminpage/analyticscard';

export default async function TotalProduct() {
  const total = await prisma.produk.count();
  return <AnalyticsCard title="Total Produk" value={total} />;
}
