import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma';

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    // Cek apakah transaksi ada
    const existingTransaction = await prisma.transaksi.findUnique({
      where: { id_transaksi: id }, // sesuaikan dengan nama primary key di schema Prisma-mu
    });

    if (!existingTransaction) {
      return NextResponse.json({ error: 'Transaksi tidak ditemukan' }, { status: 404 });
    }

    // Hapus transaksi
    await prisma.transaksi.delete({
      where: { id_transaksi: id },
    });

    return NextResponse.json({ message: 'Transaksi berhasil dihapus' }, { status: 200 });
  } catch (error: any) {
    console.error('Delete error:', error.message, error.stack);
    return NextResponse.json({ error: error.message ?? 'Gagal menghapus transaksi' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // Ambil semua transaksi dengan relasi ke pelanggan (jika perlu)
    const transaksi = await prisma.transaksi.findMany({
      orderBy: {
        id_transaksi: 'asc',
      },
      include: {
        pelanggan: true, // kalau mau ambil data pelanggan juga, opsional
        produk: true, // kalau ada relasi produk, opsional
      },
    });

    return NextResponse.json(transaksi, { status: 200 });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json({ error: 'Gagal mengambil data transaksi' }, { status: 500 });
  }
}
