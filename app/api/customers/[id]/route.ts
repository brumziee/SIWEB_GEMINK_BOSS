import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id); // Pastikan ID valid
  const body = await req.json();

  if (!id || isNaN(id)) {
    return new Response('Invalid ID', { status: 400 });
  }

  try {
    const existingCustomer = await prisma.pelanggan.findUnique({
      where: { id_pelanggan: id },
    });

    if (!existingCustomer) {
      return NextResponse.json({ error: 'Pelanggan tidak ditemukan' }, { status: 404 });
    }

    // Mengupdate data pelanggan tanpa mengubah ID
    const updatedCustomer = await prisma.pelanggan.update({
      where: { id_pelanggan: id },
      data: {
        nama_pelanggan: body.nama_pelanggan,
        umur_pelanggan: body.umur_pelanggan,
        alamat_pelanggan: body.alamat_pelanggan,
        email_pelanggan: body.email_pelanggan,
      },
    });

    return NextResponse.json(updatedCustomer, { status: 200 });
  } catch (err) {
    console.error('Update error:', err);
    return new Response('Failed to update customer', { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const idNum = Number(params.id);

  if (isNaN(idNum)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    // Cek apakah pelanggan ada
    const existingCustomer = await prisma.pelanggan.findUnique({
      where: { id_pelanggan: idNum },
    });

    if (!existingCustomer) {
      return NextResponse.json({ error: 'Pelanggan tidak ditemukan' }, { status: 404 });
    }

    // Sebelum menghapus pelanggan, pastikan untuk menghapus transaksi terkait jika ada
    await prisma.transaksi.deleteMany({
      where: { id_pelanggan: idNum },
    });

    // Hapus pelanggan
    await prisma.pelanggan.delete({
      where: { id_pelanggan: idNum },
    });

    return NextResponse.json({ message: 'Pelanggan berhasil dihapus' }, { status: 200 });
  } catch (error: any) {
    console.error('Delete error:', error.message, error.stack);
    return NextResponse.json({ error: error.message ?? 'Gagal menghapus pelanggan' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    // Ambil semua data pelanggan dan urutkan berdasarkan ID
    const customers = await prisma.pelanggan.findMany({
      orderBy: {
        id_pelanggan: 'asc', // Mengurutkan berdasarkan id_pelanggan (ascending order)
      },
    });

    return NextResponse.json(customers, { status: 200 });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ error: 'Gagal mengambil data pelanggan' }, { status: 500 });
  }
}