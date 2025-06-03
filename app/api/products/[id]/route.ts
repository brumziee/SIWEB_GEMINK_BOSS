import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma';
import { unlink } from 'fs/promises';
import path from 'path';

// Handler wrapper
export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
  }

  // Validasi tipe data minimal (contoh)
  if (body.harga && typeof body.harga !== 'number') {
    return NextResponse.json({ error: 'Field harga harus number' }, { status: 400 });
  }
  if (body.stok && typeof body.stok !== 'number') {
    return NextResponse.json({ error: 'Field stok harus number' }, { status: 400 });
  }

  try {
    const existingProduct = await prisma.produk.findUnique({ where: { id_produk: id } });

    if (!existingProduct) {
      return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
    }

    const updatedProduct = await prisma.produk.update({
      where: { id_produk: id },
      data: {
        nama_produk: body.nama_produk ?? existingProduct.nama_produk,
        harga: body.harga ?? existingProduct.harga,
        stok: body.stok ?? existingProduct.stok,
        kategori: body.kategori ?? existingProduct.kategori,
        deskripsi: body.deskripsi ?? existingProduct.deskripsi,
        foto: body.foto ?? existingProduct.foto,
      },
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (err) {
    console.error('Update error:', err);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

// DELETE: Hapus produk
export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;  // <- await dulu
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const product = await prisma.produk.findUnique({
      where: { id_produk: id },
    });

    if (!product) {
      return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
    }

    if (product.foto) {
      const fotoPath = path.join(process.cwd(), 'public', product.foto);
      try {
        await unlink(fotoPath);
      } catch (err) {
        console.warn('Gagal hapus foto:', err);
      }
    }

    await prisma.produk.delete({
      where: { id_produk: id },
    });

    return NextResponse.json({ message: 'Produk berhasil dihapus' }, { status: 200 });
  } catch (error: any) {
    console.error('Delete error:', error.message, error.stack);
    return NextResponse.json({ error: error.message ?? 'Gagal menghapus produk' }, { status: 500 });
  }
}

// GET: Ambil semua data produk
export async function GET(_req: NextRequest) {
  try {
    const products = await prisma.produk.findMany({
      orderBy: {
        id_produk: 'asc',
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Gagal mengambil data produk' }, { status: 500 });
  }
}
