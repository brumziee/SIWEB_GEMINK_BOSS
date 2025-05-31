"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { ActionButton } from "./actionbutton";
import { TransactionsTableSkeleton } from "@/app/ui/skeletons";

interface Transaction {
  id_transaksi: string;
  tanggal_transaksi: string;
  total_harga: string;
  pelanggan: {
    nama_pelanggan: string;
  };
  id_produk: string;
}

export function TransactionsTable({ searchQuery }: { searchQuery: string }) {
  const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/admin/pagetransaksi");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const json = await res.json();
        setData(json || []); 
      } catch (err) {
        console.error("Error fetching:", err);
        setData([]); 
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filtered = data.filter((t) => {
    const productId = t.id_produk || ""; // Handle undefined/null id_produk
    const query = searchQuery || ""; // Handle undefined/null searchQuery
    return productId.toLowerCase().includes(query.toLowerCase());
  });

  return loading ? (
    <TransactionsTableSkeleton />
  ) : (
    <div className="overflow-hidden rounded-3xl border-[3px] border-black border-opacity-20 max-md:overflow-x-auto">
      <div className="flex p-5 text-sm font-bold bg-indigo-800 text-white max-sm:p-2.5 max-sm:text-xs">
        <div className="flex-1">ID Transaksi</div>
        <div className="flex-1">Tanggal Transaksi</div>
        <div className="flex-1">Total Harga</div>
        <div className="flex-1">Nama Pelanggan</div>
        <div className="flex-1">ID Produk</div>
        <div className="flex-1 text-center">Pilihan</div>
      </div>
      {filtered.length > 0 ? (
        filtered.map((t) => (
          <div
            key={t.id_transaksi}
            className="flex p-5 text-sm border-b border-solid border-black border-opacity-10 text-black max-sm:p-2.5 max-sm:text-xs"
          >
            <div className="flex-1">{t.id_transaksi}</div>
            <div className="flex-1">
              {new Date(t.tanggal_transaksi).toLocaleDateString()}
            </div>
            <div className="flex-1">{t.total_harga}</div>
            <div className="flex-1">{t.pelanggan?.nama_pelanggan || "-"}</div>
            <div className="flex-1">{t.id_produk || "-"}</div>
            <div className="flex flex-1 gap-8 justify-center items-center max-sm:flex-col max-sm:gap-1.5">
              <ActionButton variant="edit" size="small" onClick={() => {}}>
                Ubah
              </ActionButton>
              <ActionButton variant="delete" size="small" onClick={() => {}}>
                Hapus
              </ActionButton>
            </div>
          </div>
        ))
      ) : (
        <div className="p-5 text-center text-sm text-gray-500">
          Tidak ada data transaksi yang ditemukan
        </div>
      )}
    </div>
  );
}