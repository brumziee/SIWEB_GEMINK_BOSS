import * as React from "react";

export function TransactionsTable() {
  return (
    <div className="overflow-hidden rounded-3xl border-solid border-[3px] border-black border-opacity-20 max-md:overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-indigo-800 text-[white]">
          <tr>
            <th className="p-5 text-base font-bold text-left max-sm:p-2.5 max-sm:text-xs">
              ID Transaksi
            </th>
            <th className="p-5 text-base font-bold text-left max-sm:p-2.5 max-sm:text-xs">
              Tanggal Transaksi
            </th>
            <th className="p-5 text-base font-bold text-left max-sm:p-2.5 max-sm:text-xs">
              Total Harga
            </th>
            <th className="p-5 text-base font-bold text-left max-sm:p-2.5 max-sm:text-xs">
              Nama Pelanggan
            </th>
            <th className="p-5 text-base font-bold text-left max-sm:p-2.5 max-sm:text-xs">
              Item yang Dibeli
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              T1
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              2025-04-05
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Rp. 100.000,00
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Jono
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Keyboard gg - 1 pcs
            </td>
          </tr>
          <tr>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              T2
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              2025-04-05
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Rp. 75.000,00
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Joni
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Switch Roseveil - 30 pcs
            </td>
          </tr>
          <tr>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              T3
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              2025-04-05
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Rp. 800.000,00
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Epan
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Aula F75 - 1 pcs
            </td>
          </tr>
          <tr>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              T4
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              2025-04-05
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Rp. 650.000,00
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Gebi
            </td>
            <td className="p-5 text-base border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 max-sm:text-xs">
              Inno X2 4k/8k - 1 pcs
            </td>
          </tr>
          <tr>
            <td className="p-5 text-base border-b-[none] max-sm:p-2.5 max-sm:text-xs">
              T5
            </td>
            <td className="p-5 text-base border-b-[none] max-sm:p-2.5 max-sm:text-xs">
              2025-04-05
            </td>
            <td className="p-5 text-base border-b-[none] max-sm:p-2.5 max-sm:text-xs">
              Rp. 150.000,00
            </td>
            <td className="p-5 text-base border-b-[none] max-sm:p-2.5 max-sm:text-xs">
              Peliks
            </td>
            <td className="p-5 text-base border-b-[none] max-sm:p-2.5 max-sm:text-xs">
              Keycaps keren - 1 pcs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
