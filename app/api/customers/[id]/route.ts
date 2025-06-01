// app/api/customers/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma';
import { deleteCustomer } from '@/app/lib/action';


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id); // ✅ pastikan id diparsing dan valid
  const body = await req.json();

  if (!id || isNaN(id)) {
    return new Response('Invalid ID', { status: 400 });
  }

  try {
    const updated = await prisma.pelanggan.update({
      where: { id_pelanggan: id },
      data: {
        nama_pelanggan: body.nama_pelanggan,
        umur_pelanggan: body.umur_pelanggan,
        alamat_pelanggan: body.alamat_pelanggan,
        email_pelanggan: body.email_pelanggan,
      },
    });

    return new Response(JSON.stringify(updated), { status: 200 });
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
    const existing = await prisma.pelanggan.findUnique({
        where: { id_pelanggan: idNum },
    });

    if (!existing) {
        return NextResponse.json({ error: 'Pelanggan tidak ditemukan' }, { status: 404 });
    }

    await prisma.pelanggan.delete({
        where: { id_pelanggan: idNum },
    });

    return NextResponse.json({ message: 'Berhasil dihapus' }, { status: 200 });

    } catch (error: any) {
    console.error('Delete error:', error.message, error.stack);
    return NextResponse.json({ error: error.message ?? 'Gagal menghapus' }, { status: 500 });
    }
}

