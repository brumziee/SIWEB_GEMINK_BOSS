'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/app/shop/productcard';

interface Produk {
  id_produk: number;
  nama_produk: string;
  harga: number;
  stok: number;
  kategori: string;
  foto: string;
  deskripsi: string;
}

const KeyboardPage = () => {
  const router = useRouter();
  const [keyboardProducts, setKeyboardProducts] = useState<Produk[]>([]);

  useEffect(() => {
    const fetchKeyboards = async () => {
      try {
        const res = await fetch('/api/user/produk?kategori=keyboard');
        const data = await res.json();
        setKeyboardProducts(data);
      } catch (err) {
        console.error('Gagal ambil data keyboard:', err);
      }
    };

    fetchKeyboards();
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf5e6] text-black px-4 md:px-20 py-10 relative">
      {/* Tombol Back */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 text-3xl font-bold hover:text-gray-600"
      >
        ←
      </button>

      {/* Judul */}
      <h1 className="text-center text-5xl md:text-6xl font-sakana italic mb-12 mt-10 tracking-wider">
        KEYBOARD’S
      </h1>

      {/* Daftar Produk */}
      {keyboardProducts.map((product) => (
        <ProductCard
          key={product.id_produk}
          nama_produk={product.nama_produk}
          deskripsi={product.deskripsi}
          harga={product.harga}
          foto={product.foto}
        />
      ))}
    </div>
  );
};

export default KeyboardPage;
