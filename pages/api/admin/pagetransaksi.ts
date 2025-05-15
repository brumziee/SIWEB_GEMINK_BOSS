// pages/api/admin/pagetransaksi.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const transaksi = await prisma.transaksi.findMany({
      include: {
        produk: true,
        pelanggan: true,
      },
    });

    const result = transaksi.map((t) => ({
      id: t.id_transaksi,
      date: t.tanggal_transaksi.toISOString().split('T')[0],
      total: t.total_harga,
      customer: t.pelanggan.nama_pelanggan,
      items: `${t.produk.nama_produk}`,
    }));

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching transaksi:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
