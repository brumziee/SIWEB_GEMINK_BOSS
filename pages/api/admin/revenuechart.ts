import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { eachMonthOfInterval, format } from 'date-fns';

export async function GET() {
  const transactions = await prisma.transaksi.findMany({
    select: {
      tanggal_transaksi: true,
      total_harga: true,
    },
  });

  const thisYear = new Date().getFullYear();

  const months = eachMonthOfInterval({
    start: new Date(thisYear, 0, 1),
    end: new Date(thisYear, 11, 31),
  });

  const monthlyTotals = months.map((month) => {
    const label = format(month, 'MMM');

    const total = transactions
      .filter((t) => {
        const tDate = new Date(t.tanggal_transaksi);
        return (
          tDate.getMonth() === month.getMonth() &&
          tDate.getFullYear() === thisYear
        );
      })
      .reduce((sum, t) => sum + t.total_harga, 0);

    return { month: label, total };
  });

  return NextResponse.json(monthlyTotals);
}
