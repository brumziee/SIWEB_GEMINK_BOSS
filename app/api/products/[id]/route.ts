import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const data = await req.json();
    const updated = await prisma.produk.update({
      where: { id_produk: id },
      data: {
        nama_produk: data.nama_produk,
        harga: data.harga,
        stok: data.stok,
        kategori: data.kategori,
        deskripsi: data.deskripsi,
        foto: data.foto,
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error('Update error:', err);
    return NextResponse.json({ error: 'Gagal mengupdate produk' }, { status: 500 });
  }
}
