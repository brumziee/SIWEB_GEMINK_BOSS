import prisma from '@/app/lib/prisma';
import AnalyticsCard from '@/app/adminpage/analyticscard';

export default async function TotalProduct() {
  await new Promise((r) => setTimeout(r, 2000)); 
  const total = await prisma.produk.count();
  return <AnalyticsCard title="Total Produk" value={total} />;
}
