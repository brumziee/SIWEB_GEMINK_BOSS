import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma';

function getIdFromReq(req: NextRequest): number | null {
  const pathname = req.nextUrl.pathname; 
  // pathname contoh: /api/customers/123
  const parts = pathname.split('/');
  const idStr = parts[parts.length - 1];
  const id = parseInt(idStr);
  if (isNaN(id)) return null;
  return id;
}

export async function GET(req: NextRequest) {
  const id = getIdFromReq(req);
  if (id === null) return new Response('Invalid ID', { status: 400 });

  try {
    const customer = await prisma.pelanggan.findUnique({
      where: { id_pelanggan: id },
    });
    if (!customer) return new Response('Pelanggan tidak ditemukan', { status: 404 });

    return NextResponse.json(customer);
  } catch (err) {
    console.error('GET error:', err);
    return new Response('Gagal mengambil data pelanggan', { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const id = getIdFromReq(req);
  if (id === null) return new Response('Invalid ID', { status: 400 });

  const body = await req.json();

  try {
    const existingCustomer = await prisma.pelanggan.findUnique({
      where: { id_pelanggan: id },
    });
    if (!existingCustomer) return new Response('Pelanggan tidak ditemukan', { status: 404 });

    const updatedCustomer = await prisma.pelanggan.update({
      where: { id_pelanggan: id },
      data: {
        nama_pelanggan: body.nama_pelanggan,
        umur_pelanggan: body.umur_pelanggan,
        alamat_pelanggan: body.alamat_pelanggan,
        email_pelanggan: body.email_pelanggan,
      },
    });

    return NextResponse.json(updatedCustomer);
  } catch (err) {
    console.error('PUT error:', err);
    return new Response('Failed to update customer', { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const id = getIdFromReq(req);
  if (id === null) return new Response('Invalid ID', { status: 400 });

  try {
    const existingCustomer = await prisma.pelanggan.findUnique({
      where: { id_pelanggan: id },
    });
    if (!existingCustomer) return new Response('Pelanggan tidak ditemukan', { status: 404 });

    await prisma.transaksi.deleteMany({ where: { id_pelanggan: id } });
    await prisma.pelanggan.delete({ where: { id_pelanggan: id } });

    return NextResponse.json({ message: 'Pelanggan berhasil dihapus' });
  } catch (err) {
    console.error('DELETE error:', err);
    return new Response('Failed to delete customer', { status: 500 });
  }
}
