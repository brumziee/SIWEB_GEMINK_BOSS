import * as React from "react";
import { ActionButton } from "./actionbutton";

interface CustomerData {
  id: string;
  name: string;
  contact: string;
}

const customers: CustomerData[] = [
  { id: "U1", name: "Jono", contact: "083333333333" },
  { id: "U2", name: "Joni", contact: "08444444444" },
  { id: "U3", name: "Peliks", contact: "0862531712781" },
  { id: "U4", name: "Epan", contact: "081284026492" },
  { id: "U5", name: "Gebi", contact: "089462004344" },
];

export function CustomerTable() {
  return (
    <div className="overflow-hidden rounded-3xl border-solid border-[3px] border-black border-opacity-20 max-md:overflow-x-auto">
      <div className="flex p-5 text-base font-bold bg-indigo-800 text-[white] max-sm:p-2.5 max-sm:text-xs">
        <div className="flex-1">ID Pelanggan</div>
        <div className="flex-1">Nama Pelanggan</div>
        <div className="flex-1">Kontak</div>
        <div className="flex-1 text-center">Pilihan</div>
      </div>
      {customers.map((customer) => (
        <div
          key={customer.id}
          className="flex p-5 border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 text-black  max-sm:text-xs"
        >
          <div className="flex-1 text-base">{customer.id}</div>
          <div className="flex-1 text-base">{customer.name}</div>
          <div className="flex-1 text-base">{customer.contact}</div>
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
