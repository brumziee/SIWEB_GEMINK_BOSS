import { NextResponse } from 'next/server';
import { prisma } from '../../../prisma/prisma';

export async function GET() {
  try {
    // Ambil semua produk dari database
    const products = await prisma.produk.findMany();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ message: 'Error fetching products' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validasi minimal nama_produk dan harga (bisa diperluas)
    if (!body.nama_produk || typeof body.harga !== 'number') {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
    }

    const product = await prisma.produk.create({
      data: {
        nama_produk: body.nama_produk,
        harga: body.harga,
        stok: body.stok ?? 0,
        foto: body.foto ?? '',
        deskripsi: body.deskripsi ?? '',
        kategori: body.kategori ?? '',
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ message: 'Error creating product' }, { status: 500 });
  }
}
