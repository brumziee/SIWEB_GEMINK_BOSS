"use client";
import * as React from "react";
import { TransactionsTable } from "./transactionstable";
import { SearchBar } from "./searchbar";
import { ActionButton } from "./actionbutton";

export default function TransactionsPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <main className="flex min-h-screen bg-orange-50">
        <section className="flex-1 px-12 py-10 max-md:p-5 max-sm:p-2.5">
          <header className="flex justify-between items-center mb-10 max-md:flex-col max-md:gap-5 max-md:items-start">
            <h1 className="text-4xl font-bold text-black max-sm:text-2xl">
              Katalog Produk
            </h1>
            <div className="flex gap-5 max-md:flex-col max-md:w-full">
              <ActionButton variant="add" onClick={() => {}}>
                Tambah
              </ActionButton>
              <SearchBar />
            </div>
          </header>
          <TransactionsTable />
        </section>
      </main>
    </>
  );
}
