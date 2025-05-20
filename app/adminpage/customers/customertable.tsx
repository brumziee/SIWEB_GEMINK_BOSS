'use client';
import * as React from "react";
import { useEffect, useState } from "react";
import { ActionButton } from "./actionbutton";

interface CustomerData {
  id_pelanggan: number;
  nama_pelanggan: string;
  umur_pelanggan: number;
  alamat_pelanggan: string;
  email_pelanggan: string;
}

export function CustomerTable() {
  const [customers, setCustomers] = useState<CustomerData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/admin/pelanggan");
      const data = await res.json();
      setCustomers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border-solid border-[3px] border-black border-opacity-20 max-md:overflow-x-auto">
      <div className="flex p-5 text-sm font-bold bg-indigo-800 text-white max-sm:p-2.5 max-sm:text-xs">
        <div className="w-[80px]">ID</div>
        <div className="flex-1">Nama</div>
        <div className="flex-1">Umur</div>
        <div className="flex-1">Alamat</div>
        <div className="flex-1">Email</div>
        <div className="flex-1 text-center">Pilihan</div>
      </div>
      {customers.map((customer) => (
        <div
          key={customer.id_pelanggan}
          className="flex p-5 border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 text-black max-sm:text-xs"
        >
          <div className="w-[80px] text-sm">{`${customer.id_pelanggan}`}</div>
          <div className="flex-1 text-sm">{customer.nama_pelanggan}</div>
          <div className="flex-1 text-sm">{customer.umur_pelanggan}</div>
          <div className="flex-1 text-sm">{customer.alamat_pelanggan}</div>
          <div className="flex-1 text-sm">{customer.email_pelanggan}</div>
          <div className="flex flex-1 gap-8 justify-center items-center text-sm text-center max-sm:flex-col max-sm:gap-1.5">
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
