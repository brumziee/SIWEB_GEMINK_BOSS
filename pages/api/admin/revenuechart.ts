// pages/api/admin/revenuechart.ts
import prisma from '@/app/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { eachMonthOfInterval, format } from 'date-fns';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const thisYear = new Date().getFullYear();
    
    // Dapatkan semua transaksi tahun ini
    const transactions = await prisma.transaksi.findMany({
      where: {
        tanggal_transaksi: {
          gte: new Date(thisYear, 0, 1),
          lte: new Date(thisYear, 11, 31)
        }
      },
      select: {
        tanggal_transaksi: true,
        total_harga: true
      }
    });

    // Siapkan data per bulan
    const months = eachMonthOfInterval({
      start: new Date(thisYear, 0, 1),
      end: new Date(thisYear, 11, 31)
    });

    const monthlyData = months.map(month => {
      const monthName = format(month, 'MMM');
      const monthNumber = month.getMonth();
      
      const total = transactions
        .filter(t => new Date(t.tanggal_transaksi).getMonth() === monthNumber)
        .reduce((sum, t) => sum + t.total_harga, 0);

      return {
        month: monthName,
        total
      };
    });

    res.status(200).json(monthlyData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch monthly revenue data' });
  }
}