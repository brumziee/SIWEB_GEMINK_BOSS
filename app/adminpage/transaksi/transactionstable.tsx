"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { ActionButton } from "./actionbutton";

interface Transaction {
  id: string;
  date: string;
  total: string; // sudah diformat dari server
  customer: string;
  items: string;
}

export function TransactionsTable() {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/admin/pagetransaksi");
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const json = await res.json();
        console.log("Fetched data:", json);
        setData(json);
      } catch (err) {
        console.error("Error fetching:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border-[3px] border-black border-opacity-20 max-md:overflow-x-auto">
      <div className="flex p-5 text-base font-bold bg-indigo-800 text-white max-sm:p-2.5 max-sm:text-xs">
        <div className="flex-1">ID Transaksi</div>
        <div className="flex-1">Tanggal Transaksi</div>
        <div className="flex-1">Total Harga</div>
        <div className="flex-1">Nama Pelanggan</div>
        <div className="flex-1">Item yang Dibeli</div>
        <div className="flex-1 text-center">Pilihan</div>
      </div>

      {data.map((t) => (
        <div
          key={t.id}
          className="flex p-5 border-b border-solid border-black border-opacity-10 text-black max-sm:p-2.5 max-sm:text-xs"
        >
          <div className="flex-1">{t.id}</div>
          <div className="flex-1">{new Date(t.date).toLocaleDateString()}</div>
          <div className="flex-1">{t.total}</div>
          <div className="flex-1">{t.customer}</div>
          <div className="flex-1">{t.items}</div>
          <div className="flex flex-1 gap-8 justify-center items-center max-sm:flex-col max-sm:gap-1.5">
            <ActionButton variant="edit" size="small" onClick={() => {}}>
              Ubah
            </ActionButton>
            <ActionButton variant="delete" size="small" onClick={() => {}}>
              Hapus
            </ActionButton>
          </div>
        </div>
      ))}
    </div>
  );
}
