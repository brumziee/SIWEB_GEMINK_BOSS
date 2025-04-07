import * as React from "react";

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
    <div className="overflow-auto rounded-3xl border-[3px] border-black border-opacity-20">
      <table className="w-full border-collapse">
        <thead className="bg-indigo-800 text-white">
          <tr>
            <th className="p-4 text-left text-sm font-semibold">ID</th>
            <th className="p-4 text-left text-sm font-semibold">Tanggal</th>
            <th className="p-4 text-left text-sm font-semibold">Total</th>
            <th className="p-4 text-left text-sm font-semibold">Pelanggan</th>
            <th className="p-4 text-left text-sm font-semibold">Item</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="text-black">
              <td className="p-4 text-sm">{t.id}</td>
              <td className="p-4 text-sm">{t.date}</td>
              <td className="p-4 text-sm">{t.total}</td>
              <td className="p-4 text-sm">{t.customer}</td>
              <td className="p-4 text-sm">{t.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
