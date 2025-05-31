"use client";
import { useState } from "react";

export function AddTransactionForm({ onSuccess }: { onSuccess: () => void }) {
  const [id_produk, setIdProduk] = useState("");
  const [nama_pelanggan, setNamaPelanggan] = useState("");
  const [total_harga, setTotalHarga] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/pagetransaksi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_produk,
        nama_pelanggan,
        total_harga,
      }),
    });
    if (res.ok) {
      setIdProduk("");
      setNamaPelanggan("");
      setTotalHarga("");
      onSuccess();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-5 border border-black rounded-xl bg-white">
      <div className="mb-4">
        <label className="block font-semibold mb-1">ID Produk</label>
        <input value={id_produk} onChange={(e) => setIdProduk(e.target.value)} className="w-full p-2 border border-gray-400 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Nama Pelanggan</label>
        <input value={nama_pelanggan} onChange={(e) => setNamaPelanggan(e.target.value)} className="w-full p-2 border border-gray-400 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Total Harga</label>
        <input value={total_harga} onChange={(e) => setTotalHarga(e.target.value)} className="w-full p-2 border border-gray-400 rounded" required />
      </div>
      <button type="submit" className="bg-lime-800 text-white px-4 py-2 rounded">Simpan</button>
    </form>
  );
}
