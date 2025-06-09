import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getIdFromRequest(req: NextRequest): number | null {
  const segments = req.nextUrl.pathname.split('/');
  // Ambil segmen terakhir (id)
  const idStr = segments[segments.length - 1];
  const id = parseInt(idStr);
  return isNaN(id) ? null : id;
}

export async function GET(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (id === null) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    const produk = await prisma.produk.findUnique({
      where: { id_produk: id },
    });

    if (!produk) {
      return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json(produk);
  } catch (error) {
    console.error('Error fetching produk:', error);
    return NextResponse.json({ error: 'Gagal mengambil produk' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (id === null) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { nama_produk, harga, stok, kategori, deskripsi, foto } = body;

    // Validasi input wajib
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
        foto,
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Gagal mengupdate produk:', error);
    return NextResponse.json({ error: 'Gagal update produk' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (id === null) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
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
