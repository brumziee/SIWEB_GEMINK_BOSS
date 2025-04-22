import * as React from "react";
import { ActionButton } from "./actionbutton";

const transactions = [
  {
    id: "T1",
    date: "2025-04-05",
    total: "Rp. 100.000,00",
    customer: "Jono",
    items: "Keyboard gg - 1 pcs",
  },
  {
    id: "T2",
    date: "2025-04-05",
    total: "Rp. 75.000,00",
    customer: "Joni",
    items: "Switch Roseveil - 30 pcs",
  },
  {
    id: "T3",
    date: "2025-04-05",
    total: "Rp. 800.000,00",
    customer: "Epan",
    items: "Aula F75 - 1 pcs",
  },
  {
    id: "T4",
    date: "2025-04-05",
    total: "Rp. 650.000,00",
    customer: "Gebi",
    items: "Inno X2 4k/8k - 1 pcs",
  },
  {
    id: "T5",
    date: "2025-04-05",
    total: "Rp. 150.000,00",
    customer: "Peliks",
    items: "Keycaps keren - 1 pcs",
  },
];

export function TransactionsTable() {
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
      {transactions.map((t) => (
        <div
          key={t.id}
          className="flex p-5 border-b border-solid border-black border-opacity-10 text-black max-sm:p-2.5 max-sm:text-xs"
        >
          <div className="flex-1 text-base">{t.id}</div>
          <div className="flex-1 text-base">{t.date}</div>
          <div className="flex-1 text-base">{t.total}</div>
          <div className="flex-1 text-base">{t.customer}</div>
          <div className="flex-1 text-base">{t.items}</div>
          <div className="flex flex-1 gap-8 justify-center items-center text-base text-center max-sm:flex-col max-sm:gap-1.5">
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