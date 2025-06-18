'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [kategori, setKategori] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama_produk: nama,
        harga,
        stok,
        kategori,
        deskripsi,
        foto,
      }),
    });

    if (response.ok) {
      router.push("/adminpage/katalog");
    } else {
      alert("Gagal menambahkan produk");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Katalog / Tambah Produk</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
        <input
          type="text"
          placeholder="Nama Produk"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Harga"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Stok"
          value={stok}
          onChange={(e) => setStok(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Kategori"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Deskripsi"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="URL Gambar Produk"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => router.push("/adminpage/katalog")}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}
