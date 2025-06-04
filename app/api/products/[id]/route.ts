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

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  // Validasi ID
  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    // Cek apakah produk ada
    const existingProduct = await prisma.produk.findUnique({
      where: { id_produk: id },
    });

    if (!existingProduct) {
      return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
    }

    // Jika produk terkait transaksi atau data lain yang perlu dihapus dulu, tambahkan di sini
    // Misalnya: await prisma.transaksi.deleteMany({ where: { id_produk: id } });

    // Hapus produk
    await prisma.produk.delete({
      where: { id_produk: id },
    });

    return NextResponse.json({ message: 'Produk berhasil dihapus' }, { status: 200 });
  } catch (error) {
    console.error('Gagal menghapus produk:', error);
    return NextResponse.json({ error: 'Gagal menghapus produk' }, { status: 500 });
  }
}