import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  const produk = await prisma.produk.findUnique({ where: { id_produk: id } });
  if (!produk) {
    return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
  }

  return NextResponse.json(produk);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    const body = await request.json();
    const { nama_produk, harga, stok, kategori, deskripsi, foto } = body;

    // Validasi isian wajib
    if (!nama_produk || !harga || !stok || !kategori || !deskripsi) {
      return NextResponse.json({ error: 'Semua kolom wajib diisi.' }, { status: 400 });
    }

    const hargaVal = Number(harga);
    const stokVal = Number(stok);

    if (isNaN(hargaVal) || hargaVal <= 0) {
      return NextResponse.json({ error: 'Harga harus angka positif.' }, { status: 400 });
    }

    if (isNaN(stokVal) || stokVal < 0) {
      return NextResponse.json({ error: 'Stok harus angka dan tidak negatif.' }, { status: 400 });
    }

    const updatedProduct = await prisma.produk.update({
      where: { id_produk: id },
      data: {
        nama_produk,
        harga: hargaVal,
        stok: stokVal,
        kategori,
        deskripsi,
        foto, // URL dari endpoint /api/upload, bisa berupa path `/uploads/nama.jpg`
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Gagal mengupdate produk:', error);
    return NextResponse.json({ error: 'Gagal update produk' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    const existingProduct = await prisma.produk.findUnique({
      where: { id_produk: id },
    });

    if (!existingProduct) {
      return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
    }

    await prisma.produk.delete({
      where: { id_produk: id },
    });

    return NextResponse.json({ message: 'Produk berhasil dihapus.' });
  } catch (error) {
    console.error('Gagal menghapus produk:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan saat menghapus produk.' }, { status: 500 });
  }
}