"use client";
import * as React from "react";
import { TransactionsTable } from "./transactionstable";
import { SearchBar } from "./searchbar";

export default function TransactionsPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className="flex min-h-screen bg-orange-50 max-md:flex-col">
        <main className="flex-1 px-10 py-5 max-md:p-2.5">
          <header className="flex justify-between items-center mb-10 max-md:flex-col max-md:gap-5">
            <h1 className="text-4xl font-bold max-sm:text-2xl">
              Transaksi
            </h1>
            <div className="flex gap-5 max-md:flex-col max-md:w-full">
              <button className="px-8 py-2.5 text-base bg-lime-800 rounded-md cursor-pointer border-[none] text-[white]">
                Tambah
              </button>
              <SearchBar />
            </div>
          </header>
          <TransactionsTable />
        </main>
      </div>
    </>
  );
}
