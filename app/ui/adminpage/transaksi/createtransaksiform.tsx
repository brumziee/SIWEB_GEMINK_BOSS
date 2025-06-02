'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Produk = {
  id_produk: number;
  nama_produk: string;
  harga: number;
};

type Pelanggan = {
  id_pelanggan: number;
  nama_pelanggan: string;
};

export default function CreateTransactionForm() {
  const router = useRouter();

  const [produkList, setProdukList] = useState<Produk[]>([]);
  const [pelangganList, setPelangganList] = useState<Pelanggan[]>([]);

  const [formData, setFormData] = useState({
    id_produk: '',
    id_pelanggan: '',
    tanggal_transaksi: '',
    total_harga: '',
  });

  const [error, setError] = useState('');

  // Ambil data produk dan pelanggan saat komponen mount
  useEffect(() => {
    async function fetchData() {
      try {
        const [produkRes, pelangganRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/customers'),
        ]);

        if (!produkRes.ok || !pelangganRes.ok) {
          setError('Gagal memuat data produk atau pelanggan');
          return;
        }

        const produkData = await produkRes.json();
        const pelangganData = await pelangganRes.json();

        setProdukList(produkData);
        setPelangganList(pelangganData);
      } catch {
        setError('Terjadi kesalahan saat memuat data');
      }
    }

    fetchData();
  }, []);

    const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
        if (name === 'id_produk') {
        const selectedProduct = produkList.find(
            (produk) => produk.id_produk === Number(value)
        );

        return {
            ...prev,
            id_produk: value,
            total_harga: selectedProduct ? selectedProduct.harga.toString() : '',
        };
        }

        return {
        ...prev,
        [name]: value,
        };
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { id_produk, id_pelanggan, tanggal_transaksi, total_harga } = formData;

    if (!id_produk || !id_pelanggan || !tanggal_transaksi || !total_harga) {
      setError('Semua kolom wajib diisi!');
      return;
    }

    const harga = Number(total_harga);
    if (isNaN(harga) || harga <= 0) {
      setError('Total harga harus berupa angka positif.');
      return;
    }

    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_produk: Number(id_produk),
          id_pelanggan: Number(id_pelanggan),
          tanggal_transaksi,
          total_harga: harga,
        }),
      });

      if (res.ok) {
        router.push('/adminpage/transaksi');
      } else {
        setError('Gagal membuat transaksi. Coba lagi nanti.');
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan jaringan.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-md shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">Produk</label>
        <select
          name="id_produk"
          value={formData.id_produk}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
        >
          <option value="">-- Pilih Produk --</option>
          {produkList.map((produk) => (
            <option key={produk.id_produk} value={produk.id_produk}>
              {produk.nama_produk}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Pelanggan</label>
        <select
          name="id_pelanggan"
          value={formData.id_pelanggan}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
        >
          <option value="">-- Pilih Pelanggan --</option>
          {pelangganList.map((pelanggan) => (
            <option key={pelanggan.id_pelanggan} value={pelanggan.id_pelanggan}>
              {pelanggan.nama_pelanggan}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tanggal Transaksi</label>
        <input
          type="date"
          name="tanggal_transaksi"
          value={formData.tanggal_transaksi}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Total Harga</label>
        <input
          type="number"
          name="total_harga"
          value={formData.total_harga}
          onChange={handleChange}
          placeholder="Masukkan total harga"
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
          Create Transaction
        </button>
      </div>
    </form>
  );
}
