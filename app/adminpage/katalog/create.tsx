'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [kategori, setKategori] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState<File | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validasi dasar
    if (!nama || !harga || !stok || !kategori || !deskripsi) {
      setError("Semua field harus diisi.");
      return;
    }
    if (!foto) {
      setError("Gambar produk wajib diunggah.");
      return;
    }

    const formData = new FormData();
    formData.append("nama_produk", nama);
    formData.append("harga", harga);
    formData.append("stok", stok);
    formData.append("kategori", kategori);
    formData.append("deskripsi", deskripsi);
    formData.append("foto", foto);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/adminpage/katalog");
      } else {
        const data = await response.json();
        setError(data.error || "Gagal menambahkan produk.");
      }
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan jaringan.");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Katalog / Tambah Produk</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md" encType="multipart/form-data">
        <input
          type="text"
          placeholder="Nama Produk"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Harga"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          className="w-full border p-2 rounded"
          min="0"
        />
        <input
          type="number"
          placeholder="Stok"
          value={stok}
          onChange={(e) => setStok(e.target.value)}
          className="w-full border p-2 rounded"
          min="0"
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
          rows={4}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setFoto(e.target.files[0]);
            }
          }}
          className="w-full border p-2 rounded"
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
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
