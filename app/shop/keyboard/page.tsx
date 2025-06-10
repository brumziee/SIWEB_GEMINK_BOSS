'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/app/shop/productcard';
import SearchBar from './searchbar';

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
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 2;

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

  // Reset ke halaman 1 jika search berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Filter produk berdasarkan input search
  const filteredProducts = keyboardProducts.filter((product) =>
    product.nama_produk.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
      <h1 className="text-center text-5xl md:text-6xl font-sakana italic mb-8 mt-10 tracking-wider">
        KEYBOARD’S
      </h1>

      {/* SearchBar */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Daftar Produk */}
      {currentItems.length > 0 ? (
        currentItems.map((product) => (
          <ProductCard
            key={product.id_produk}
            nama_produk={product.nama_produk}
            deskripsi={product.deskripsi}
            harga={product.harga}
            foto={product.foto}
          />
        ))
      ) : (
        <p className="text-center text-xl text-gray-600">Keyboard tidak ditemukan.</p>
      )}

      {/* Pagination Control */}
      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          {/* Prev Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded font-semibold border ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            Prev
          </button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded font-semibold border ${
                currentPage === index + 1
                  ? 'bg-[#5b4fe7] text-white' // Halaman aktif (ungu)
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded font-semibold border ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default KeyboardPage;
