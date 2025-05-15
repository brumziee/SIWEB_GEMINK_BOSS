'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { TableRow } from './tablerow';

interface Product {
  id_produk: number;
  nama_produk: string;
  harga: number;
  stok: number;
  kategori: string;
}

export const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/admin/produk');
      const json = await res.json();
      setProducts(json);
    };
    fetchData();
  }, []);

  return (
    <section className="overflow-hidden rounded-3xl border-solid border-[3px] border-black border-opacity-20 max-md:overflow-x-auto max-sm:text-sm">
      <div className="flex p-5 text-base font-bold bg-indigo-800 text-[white]">
        <div className="flex-1">ID Produk</div>
        <div className="flex-1">Nama Produk</div>
        <div className="flex-1">Harga</div>
        <div className="flex-1">Stok</div>
        <div className="flex-1">Kategori</div>
        <div className="flex-1 text-center">Pilihan</div>
      </div>
      {products.map((product) => (
        <TableRow
          key={product.id_produk}
          id={product.id_produk}
          name={product.nama_produk}
          price={product.harga}
          stok={product.stok}
          kategori={product.kategori}
        />
      ))}
    </section>
  );
};
