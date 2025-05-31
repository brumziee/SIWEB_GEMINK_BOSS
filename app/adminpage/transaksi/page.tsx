"use client";
import * as React from "react";
import { TransactionsTable } from "./transactionstable";
import { SearchBar } from "./searchbar";
import { ActionButton } from "./actionbutton";
import { AddTransactionForm } from "./addtransactionform";

export default function TransactionsPage() {
  const [showForm, setShowForm] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [refreshKey, setRefreshKey] = React.useState(0);

  const handleSuccess = () => {
    setShowForm(false);
    setRefreshKey(prev => prev + 1); // Trigger data refresh
  };

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
              <ActionButton variant="add" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Tutup Form" : "Tambah Transaksi"}
              </ActionButton>
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </header>
          {showForm && <AddTransactionForm onSuccess={handleSuccess} />}
          <TransactionsTable searchQuery={searchQuery} key={refreshKey} />
        </section>
      </main>
    </>
  );
}