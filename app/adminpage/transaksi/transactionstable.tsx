"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { ActionButton } from "./actionbutton";
import { TransactionsTableSkeleton } from "@/app/ui/skeletons";
import { useRouter } from "next/navigation";

interface Transaction {
  id: string;
  date: string;
  total: string; // sudah diformat dari server
  customer: string;
  items: string;
}

interface TransactionsTableProps {
  searchQuery: string;
}

export function TransactionsTable({ searchQuery }: TransactionsTableProps) {
  const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/admin/pagetransaksi");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredData = data.filter((t) =>
    t.items.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin mau hapus transaksi ini?")) return;

    try {
      const res = await fetch(`/api/transactions/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");

      // Cara 1: Update langsung state tanpa fetch ulang
      setData((prev) => prev.filter((t) => t.id !== id));

      // Cara 2: Fetch ulang data terbaru dari server
      // await fetchData();
    } catch (error) {
      alert("Gagal menghapus transaksi");
    }
  };

  return loading ? (
    <TransactionsTableSkeleton />
  ) : (
    <div className="overflow-hidden rounded-3xl border-[3px] border-black border-opacity-20 max-md:overflow-x-auto">
      <div className="flex p-5 text-sm font-bold bg-indigo-800 text-white max-sm:p-2.5 max-sm:text-xs">
        <div className="flex-1">ID Transaksi</div>
        <div className="flex-1">Tanggal Transaksi</div>
        <div className="flex-1">Total Harga</div>
        <div className="flex-1">Nama Pelanggan</div>
        <div className="flex-1">Item yang Dibeli</div>
        <div className="flex-1 text-center">Pilihan</div>
      </div>
      {filteredData.length > 0 ? (
        filteredData.map((t, index) => (
          <div
            key={t.id}
            className="flex p-5 text-sm border-b border-solid border-black border-opacity-10 text-black max-sm:p-2.5 max-sm:text-xs"
          >
            <div className="flex-1">{index + 1}</div>
            <div className="flex-1">
              {new Date(t.date).toLocaleDateString()}
            </div>
            <div className="flex-1">{t.total}</div>
            <div className="flex-1">{t.customer}</div>
            <div className="flex-1">{t.items}</div>
            <div className="flex flex-1 gap-8 justify-center items-center max-sm:flex-col max-sm:gap-1.5">
              <ActionButton
                variant="edit"
                size="small"
                onClick={() => router.push(`/adminpage/transaksi/${t.id}/edit`)}
              >
                Ubah
              </ActionButton>
              <ActionButton
                variant="delete"
                size="small"
                onClick={() => handleDelete(t.id)}
              >
                Hapus
              </ActionButton>
            </div>
          </div>
        ))
      ) : (
        <div className="p-5 text-sm text-center text-black">Data tidak ditemukan.</div>
      )}
    </div>
  );
}
