import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/lib/prisma'; // pastikan path ini benar

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { kategori } = req.query;

  try {
    const produk = await prisma.produk.findMany({
      where: kategori ? { kategori: String(kategori) } : {},
      select: {
        id_produk: true,
        nama_produk: true,
        harga: true,
        stok: true,
        kategori: true,
        foto: true,
        deskripsi: true,
      },
    });

    // Perbaiki path foto supaya tidak ada /public di depan
    const fixedProduk = produk.map(p => ({
      ...p,
      foto: p.foto.startsWith('/public/') ? p.foto.replace('/public', '') : p.foto,
    }));

    res.status(200).json(fixedProduk);
  } catch (error) {
    console.error('Gagal fetch produk:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data produk' });
  }
}
