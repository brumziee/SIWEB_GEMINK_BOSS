'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditCustomerForm({ customer }: { customer: any }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama_pelanggan: customer.nama_pelanggan,
    umur_pelanggan: customer.umur_pelanggan.toString(),
    alamat_pelanggan: customer.alamat_pelanggan,
    email_pelanggan: customer.email_pelanggan,
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { nama_pelanggan, umur_pelanggan, alamat_pelanggan, email_pelanggan } = formData;
    if (!nama_pelanggan || !umur_pelanggan || !alamat_pelanggan || !email_pelanggan) {
      setError('Semua kolom wajib diisi!');
      return;
    }

    const umur = Number(umur_pelanggan);
    if (isNaN(umur) || umur <= 0) {
      setError('Umur harus angka positif.');
      return;
    }

    try {
      const res = await fetch(`/api/customers/${customer.id_pelanggan}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, umur_pelanggan: umur }),
      });

      if (res.ok) {
        router.push('/adminpage/customers');
      } else {
        setError('Gagal mengupdate customer.');
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat mengirim data.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-md shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama</label>
        <input
          type="text"
          name="nama_pelanggan"
          value={formData.nama_pelanggan}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Umur</label>
        <input
          type="number"
          name="umur_pelanggan"
          value={formData.umur_pelanggan}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Alamat</label>
        <textarea
          name="alamat_pelanggan"
          value={formData.alamat_pelanggan}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email_pelanggan"
          value={formData.email_pelanggan}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
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
        <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
          Simpan
        </button>
      </div>
    </form>
  );
}
