'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateCustomerForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama_pelanggan: '',
    umur_pelanggan: '',
    alamat_pelanggan: '',
    email_pelanggan: '',
  });

  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(''); // clear error saat user mengetik
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
      setError('Umur pelanggan harus berupa angka positif.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email_pelanggan)) {
      setError('Format email tidak valid.');
      return;
    }

    try {
      const res = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, umur_pelanggan: umur }),
      });

      if (res.ok) {
        router.push('/adminpage/customers');
      } else {
        setError('Gagal membuat pelanggan. Coba lagi nanti.');
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan jaringan.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-md shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
        <input
          type="text"
          name="nama_pelanggan"
          value={formData.nama_pelanggan}
          onChange={handleChange}
          placeholder="Enter customer name"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Age</label>
        <input
          type="number"
          name="umur_pelanggan"
          value={formData.umur_pelanggan}
          onChange={handleChange}
          placeholder="Enter customer age"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Address</label>
        <textarea
          name="alamat_pelanggan"
          value={formData.alamat_pelanggan}
          onChange={handleChange}
          placeholder="Enter customer address"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Email</label>
        <input
          type="email"
          name="email_pelanggan"
          value={formData.email_pelanggan}
          onChange={handleChange}
          placeholder="Enter customer email"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
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
          Create Customer
        </button>
      </div>
    </form>
  );
}
