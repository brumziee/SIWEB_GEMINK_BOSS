'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Katalog {
  id_produk: number;
  nama_produk: string;
  harga: number;
  stok: number;
  kategori: string;
  deskripsi: string;
  foto: string;
}

export default function EditKatalogForm({ product }: { product: Katalog }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama_produk: product.nama_produk,
    harga: product.harga.toString(),
    stok: product.stok.toString(),
    kategori: product.kategori,
    deskripsi: product.deskripsi,
  });
  const [foto, setFoto] = useState<File | null>(null);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFoto(file);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { nama_produk, harga, stok, kategori, deskripsi } = formData;

    if (!nama_produk || !harga || !stok || !kategori || !deskripsi) {
      setError('Semua kolom wajib diisi!');
      return;
    }

    const hargaVal = Number(harga);
    const stokVal = Number(stok);

    if (isNaN(hargaVal) || hargaVal <= 0) {
      setError('Harga harus angka positif.');
      return;
    }

    if (isNaN(stokVal) || stokVal < 0) {
      setError('Stok harus angka dan tidak negatif.');
      return;
    }

    let uploadedUrl = product.foto;

    // Jika ada foto baru, upload ke endpoint /api/upload
    if (foto) {
      const uploadForm = new FormData();
      uploadForm.append('file', foto);

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: uploadForm,
      });

      if (uploadRes.ok) {
        const uploadData = await uploadRes.json();
        uploadedUrl = uploadData.url;
      } else {
        setError('Gagal mengunggah foto.');
        return;
      }
    }

    // Kirim data JSON ke PUT endpoint
    const res = await fetch(`/api/products/${product.id_produk}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        harga: hargaVal,
        stok: stokVal,
        foto: uploadedUrl,
      }),
    });

    if (res.ok) {
      router.push('/adminpage/katalog');
    } else {
      const data = await res.json();
      setError(data.error || 'Gagal mengupdate produk.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-md shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama Produk</label>
        <input
          type="text"
          name="nama_produk"
          value={formData.nama_produk}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Harga</label>
        <input
          type="number"
          name="harga"
          value={formData.harga}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          min="0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Stok</label>
        <input
          type="number"
          name="stok"
          value={formData.stok}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          min="0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Kategori</label>
        <input
          type="text"
          name="kategori"
          value={formData.kategori}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
        <textarea
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Foto Produk (jika ingin ganti)</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
        {product.foto && (
          <p className="mt-2 text-sm text-gray-500">
            Foto saat ini: <br />
            <img src={product.foto} alt="Foto Produk" className="max-w-xs mt-1" />
          </p>
        )}
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-md bg-gray-200 px-4 py-2 text-sm"
        >
          Batal
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}
