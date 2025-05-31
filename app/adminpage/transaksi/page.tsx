"use client";
import * as React from "react";
import { useState } from "react";
import { TransactionsTable } from "./transactionstable";
import { SearchBar } from "./searchbar";
import { ActionButton } from "./actionbutton";
import { CreateForm } from "./createform";

export default function TransactionsPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <main className="flex min-h-screen bg-orange-50">
        <section className="flex-1 px-12 py-10 max-md:p-5 max-sm:p-2.5">
          <header className="flex justify-between items-center mb-10 max-md:flex-col max-md:gap-5 max-md:items-start">
            <h1 className="text-4xl font-bold text-black max-sm:text-2xl">
              Katalog Produk
            </h1>
            <div className="flex gap-5 max-md:flex-col max-md:w-full">
              <ActionButton variant="add" onClick={() => setShowForm(true)}>
                Tambah
              </ActionButton>
              <SearchBar onSearch={setQuery} />
            </div>
          </header>

          {showForm && (
            <CreateForm
              onCreated={() => setRefreshKey((k) => k + 1)}
              onClose={() => setShowForm(false)}
            />
          )}

          <TransactionsTable key={refreshKey} searchQuery={query} />
        </section>
      </main>
    </>
  );
}
