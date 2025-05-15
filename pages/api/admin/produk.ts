import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const produk = await prisma.produk.findMany({
    select: {
      id_produk: true,
      nama_produk: true,
      harga: true,
      stok: true,
    kategori: true,  
    },
  });
  res.json(produk);
}
