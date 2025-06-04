import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import path from 'path';
import { mkdirSync, existsSync } from 'fs';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  const produk = await prisma.produk.findUnique({
    where: { id_produk: id },
  });

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

    const formData = await request.formData();

    const nama_produk = formData.get('nama_produk') as string;
    const harga = Number(formData.get('harga'));
    const stok = Number(formData.get('stok'));
    const kategori = formData.get('kategori') as string;
    const deskripsi = formData.get('deskripsi') as string;
    const file = formData.get('foto') as File | null;

    if (!nama_produk || !harga || !stok || !kategori || !deskripsi) {
      return NextResponse.json({ error: 'Semua kolom wajib diisi.' }, { status: 400 });
    }

    let fotoPath: string | undefined = undefined;

    if (file && file.name) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadDir = path.join(process.cwd(), 'public/uploads');

      if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });

      const filename = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, filename);
      await writeFile(filePath, buffer);
      fotoPath = `/uploads/${filename}`;
    }

    const updatedProduct = await prisma.produk.update({
      where: { id_produk: id },
      data: {
        nama_produk,
        harga,
        stok,
        kategori,
        deskripsi,
        ...(fotoPath && { foto: fotoPath }),
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Gagal mengupdate produk:', error);
    return NextResponse.json({ error: 'Gagal update produk' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const nama_produk = formData.get('nama_produk') as string;
    const harga = Number(formData.get('harga'));
    const stok = Number(formData.get('stok'));
    const kategori = formData.get('kategori') as string;
    const deskripsi = formData.get('deskripsi') as string;
    const file = formData.get('foto') as File | null;

    if (!nama_produk || !harga || !stok || !kategori || !deskripsi) {
      return NextResponse.json({ error: 'Semua kolom wajib diisi.' }, { status: 400 });
    }

    let fotoPath: string | undefined = undefined;

    if (file && file.name) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadDir = path.join(process.cwd(), 'public/uploads');

      if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });

      const filename = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, filename);
      await writeFile(filePath, buffer);
      fotoPath = `/uploads/${filename}`;
    }

    const newProduct = await prisma.produk.create({
      data: {
        nama_produk,
        harga,
        stok,
        kategori,
        deskripsi,
        foto: fotoPath ?? '', // Fix error di sini
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Gagal menambahkan produk:', error);
    return NextResponse.json({ error: 'Gagal menambahkan produk' }, { status: 500 });
  }
}