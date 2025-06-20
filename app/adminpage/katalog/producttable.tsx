'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { TableRow } from './tablerow';

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

interface Product {
  id_produk: number;
  nama_produk: string;
  harga: number;
  stok: number;
  kategori: string;
}

interface ProductTableProps {
  searchQuery: string;
}

export const ProductTable: React.FC<ProductTableProps> = ({ searchQuery }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/produk');
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const json = await res.json();

      const sorted = json.sort((a: Product, b: Product) => a.id_produk - b.id_produk);
      setProducts(sorted);
      setFilteredProducts(sorted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.nama_produk.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.kategori.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchQuery, products]);

  const handleDataChange = () => {
    fetchData();
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  if (loading) {
    return <CatalogSkeleton />;
  }

  return (
    <>
      <section className="overflow-hidden rounded-3xl border-solid border-[3px] border-black border-opacity-20 max-md:overflow-x-auto max-sm:text-sm">
        <div className="flex p-5 text-sm font-bold bg-indigo-800 text-[white]">
          <div className="w-[80px]">ID Produk</div>
          <div className="flex-1">Nama Produk</div>
          <div className="flex-1">Harga</div>
          <div className="flex-1">Stok</div>
          <div className="flex-1">Kategori</div>
          <div className="flex-1 text-center">Pilihan</div>
        </div>
        {currentData.length > 0 ? (
          currentData.map((product, index) => (
            <TableRow
              key={product.id_produk}
              index={startIndex + index} // ✅ dimulai dari 0 dan berkelanjutan
              id={product.id_produk}
              name={product.nama_produk}
              price={product.harga}
              stok={product.stok}
              kategori={product.kategori}
              onDeleteSuccess={handleDataChange}
            />
          ))
        ) : (
          <div className="p-5 text-center text-gray-500">Data tidak ditemukan</div>
        )}
      </section>

      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-6 text-base font-semibold"> {/* ✅ Perbesar font */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-white hover:bg-gray-200'
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md border font-bold ${
                currentPage === page
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-white hover:bg-gray-200'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

function CatalogSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded-3xl border-[3px] border-black border-opacity-20 max-md:overflow-x-auto`}>
      <div className="flex p-5 text-sm font-bold bg-indigo-800 text-white max-sm:p-2.5 max-sm:text-xs">
        <div className="w-[80px]">ID Produk</div>
        <div className="flex-1">Nama Produk</div>
        <div className="flex-1">Harga</div>
        <div className="flex-1">Stok</div>
        <div className="flex-1">Kategori</div>
        <div className="flex-1 text-center">Pilihan</div>
      </div>

      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex items-center p-5 border-b border-solid border-black border-opacity-10 max-sm:p-2.5 max-sm:text-xs"
        >
          <div className="w-[80px] h-6 bg-gray-200 rounded relative overflow-hidden">
            <div className={shimmer + " absolute inset-0"}></div>
          </div>
          {[...Array(4)].map((_, j) => (
            <div
              key={j}
              className="flex-1 h-6 bg-gray-200 rounded max-sm:h-4 relative overflow-hidden"
            >
              <div className={shimmer + " absolute inset-0"}></div>
            </div>
          ))}
          <div className="flex flex-1 justify-center gap-3">
            <div className="h-9 w-9 bg-gray-200 rounded-md relative overflow-hidden">
              <div className={shimmer + " absolute inset-0"}></div>
            </div>
            <div className="h-9 w-9 bg-gray-200 rounded-md relative overflow-hidden">
              <div className={shimmer + " absolute inset-0"}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
