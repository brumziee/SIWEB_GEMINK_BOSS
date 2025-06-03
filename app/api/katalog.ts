import { PrismaClient } from '@prisma/client';
import { IncomingForm, Files, Fields } from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import { mkdirSync, existsSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
    sizeLimit: '10mb',
  },
};

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const form = new IncomingForm({ multiples: false, keepExtensions: true });

  form.parse(req, async (err: any, fields: Fields, files: Files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ error: 'Gagal memproses data' });
    }

    // Ambil dan validasi data dengan aman
    const getField = (field: string | string[] | undefined): string => {
      return Array.isArray(field) ? field[0] : field || '';
    };

    const nama_produk = getField(fields.nama_produk);
    const kategori = getField(fields.kategori);
    const deskripsi = getField(fields.deskripsi);
    const hargaStr = getField(fields.harga);
    const stokStr = getField(fields.stok);

    const harga = Number(hargaStr);
    const stok = Number(stokStr);

    const fotoFile = Array.isArray(files.foto) ? files.foto[0] : files.foto;

    if (!nama_produk || !kategori || !deskripsi || !hargaStr || !stokStr || !fotoFile) {
      return res.status(400).json({ error: 'Semua kolom wajib diisi.' });
    }

    if (isNaN(harga) || harga <= 0 || isNaN(stok) || stok < 0) {
      return res.status(400).json({ error: 'Harga dan stok tidak valid.' });
    }

    // Simpan file
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });

    const originalFilename = fotoFile.originalFilename || 'uploaded';
    const filename = `${Date.now()}-${originalFilename.replace(/\s+/g, '-')}`;
    const filePath = path.join(uploadDir, filename);

    try {
      await fs.copyFile(fotoFile.filepath, filePath);

      const relativeFotoPath = `/uploads/${filename}`;

      const newProduct = await prisma.produk.create({
        data: {
          nama_produk,
          harga,
          stok,
          kategori,
          deskripsi,
          foto: relativeFotoPath,
        },
      });

      return res.status(201).json(newProduct);
    } catch (e) {
      console.error('DB/File error:', e);
      return res.status(500).json({ error: 'Gagal menyimpan data.' });
    }
  });
}
