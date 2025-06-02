import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { id_produk, id_pelanggan, tanggal_transaksi, total_harga } = await request.json();

    if (!id_produk || !id_pelanggan || !tanggal_transaksi || !total_harga) {
      return NextResponse.json({ error: 'Data transaksi tidak lengkap' }, { status: 400 });
    }

    const newTransaksi = await prisma.transaksi.create({
      data: {
        id_produk: Number(id_produk),
        id_pelanggan: Number(id_pelanggan),
        tanggal_transaksi: new Date(tanggal_transaksi),
        total_harga: Number(total_harga),
      },
    });

    return NextResponse.json(newTransaksi, { status: 201 });
  } catch (error) {
    console.error('Error membuat transaksi:', error);
    return NextResponse.json({ error: 'Gagal membuat transaksi' }, { status: 500 });
  }
}
