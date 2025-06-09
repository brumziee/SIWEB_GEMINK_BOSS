import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma';

function getIdFromRequest(request: NextRequest): number | null {
  const segments = request.nextUrl.pathname.split('/');
  const idStr = segments[segments.length - 1];
  const id = parseInt(idStr);
  return isNaN(id) ? null : id;
}

export async function DELETE(request: NextRequest) {
  const id = getIdFromRequest(request);

  if (id === null) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const existingTransaction = await prisma.transaksi.findUnique({
      where: { id_transaksi: id },
    });

    if (!existingTransaction) {
      return NextResponse.json({ error: 'Transaksi tidak ditemukan' }, { status: 404 });
    }

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
    const transaksi = await prisma.transaksi.findMany({
      orderBy: { id_transaksi: 'asc' },
      include: {
        pelanggan: true,
        produk: true,
      },
    });

    return NextResponse.json(transaksi, { status: 200 });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json({ error: 'Gagal mengambil data transaksi' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const id = getIdFromRequest(request);

  if (id === null) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { id_pelanggan, id_produk } = body;

    if (!id_pelanggan || !id_produk) {
      return NextResponse.json({ error: 'Data transaksi tidak lengkap' }, { status: 400 });
    }

    const updatedTransaction = await prisma.transaksi.update({
      where: { id_transaksi: id },
      data: {
        id_pelanggan,
        id_produk,
      },
    });

    return NextResponse.json(updatedTransaction, { status: 200 });
  } catch (error: any) {
    console.error('Update error:', error.message);
    return NextResponse.json({ error: error.message || 'Gagal memperbarui transaksi' }, { status: 500 });
  }
}
