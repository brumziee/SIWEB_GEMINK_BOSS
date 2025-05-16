// pages/api/admin/dailyrevenue.ts
import prisma from '@/app/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Ambil data 7 hari terakhir
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);

    const transactions = await prisma.transaksi.findMany({
      where: {
        tanggal_transaksi: {
          gte: startDate
        }
      },
      select: {
        tanggal_transaksi: true,
        total_harga: true
      },
      orderBy: {
        tanggal_transaksi: 'asc'
      }
    });

    // Format data untuk chart
    const dailyData = transactions.reduce((acc: Record<string, number>, transaction) => {
      const date = new Date(transaction.tanggal_transaksi);
      const dayName = date.toLocaleDateString('id-ID', { weekday: 'long' });
      
      if (!acc[dayName]) {
        acc[dayName] = 0;
      }
      acc[dayName] += transaction.total_harga;
      
      return acc;
    }, {});

    // Konversi ke array
    const chartData = Object.keys(dailyData).map(day => ({
      day,
      revenue: dailyData[day]
    }));

    res.status(200).json(chartData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch daily revenue data' });
  }
}