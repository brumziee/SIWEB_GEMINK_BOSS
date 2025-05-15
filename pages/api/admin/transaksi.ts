import prisma from '@/app/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const transaksi = await prisma.transaksi.findMany({
    select: {
      id_transaksi: true,
      id_produk: true,
      pelanggan: {
        select: {
          nama_pelanggan: true,
        },
      },
      tanggal_transaksi: true,
      total_harga: true,
    },
    orderBy: {
      tanggal_transaksi: 'desc',
    },
  });
  res.json(transaksi);
}
