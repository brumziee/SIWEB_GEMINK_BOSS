'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateProductForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama_produk: '',
    harga: '',
    stok: '',
    kategori: '',
    deskripsi: '',
  });
  const [foto, setFoto] = useState<File | null>(null);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    // Validasi wajib semua field
    if (!nama_produk.trim() || !harga.trim() || !stok.trim() || !kategori.trim() || !deskripsi.trim()) {
      setError('Semua kolom wajib diisi!');
      return;
    }

    // Validasi file foto wajib di-upload
    if (!foto) {
      setError('Foto produk wajib diupload!');
      return;
    }

    const hargaValue = Number(harga);
    const stokValue = Number(stok);

    if (isNaN(hargaValue) || hargaValue <= 0) {
      setError('Harga harus berupa angka positif.');
      return;
    }

    if (isNaN(stokValue) || stokValue < 0) {
      setError('Stok harus berupa angka dan tidak negatif.');
      return;
    }

    // Siapkan FormData untuk dikirim ke API
    const formPayload = new FormData();
    formPayload.append('nama_produk', nama_produk.trim());
    formPayload.append('harga', hargaValue.toString());
    formPayload.append('stok', stokValue.toString());
    formPayload.append('kategori', kategori.trim());
    formPayload.append('deskripsi', deskripsi.trim());
    formPayload.append('foto', foto);

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        body: formPayload,
      });

      if (res.ok) {
        router.push('/adminpage/katalog');
      } else {
        const data = await res.json();
        setError(data.error || 'Gagal membuat produk. Coba lagi nanti.');
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan jaringan.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data" // pastikan enctype ada (meskipun biasanya browser otomatis)
      className="space-y-4 bg-gray-50 p-6 rounded-md shadow"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          name="nama_produk"
          value={formData.nama_produk}
          onChange={handleChange}
          placeholder="Enter product name"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          name="harga"
          value={formData.harga}
          onChange={handleChange}
          placeholder="Enter product price"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
          min="0"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Stock</label>
        <input
          type="number"
          name="stok"
          value={formData.stok}
          onChange={handleChange}
          placeholder="Enter product stock"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
          min="0"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          name="kategori"
          value={formData.kategori}
          onChange={handleChange}
          placeholder="Enter product category"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          placeholder="Enter product description"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
          rows={4}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Product Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Create Product
        </button>
      </div>
    </form>
  );
}
