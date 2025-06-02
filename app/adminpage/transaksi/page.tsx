  "use client";
  import * as React from "react";
  import { useState } from "react";
  import { useRouter } from "next/navigation";
  import { TransactionsTable } from "./transactionstable";
  import { SearchBar } from "./searchbar";
  import { ActionButton } from "./actionbutton";

  export default function TransactionsPage() {
    const router = useRouter(); // Tambahkan useRouter
    const [query, setQuery] = useState("");

    return (
      <main className="flex min-h-screen bg-orange-50">
        <section className="flex-1 px-12 py-10 max-md:p-5 max-sm:p-2.5">
          <header className="flex justify-between items-center mb-10 max-md:flex-col max-md:gap-5 max-md:items-start">
            <h1 className="text-4xl font-bold text-black max-sm:text-2xl">
              Transaksi
            </h1>
            <div className="flex gap-5 max-md:flex-col max-md:w-full">
              <ActionButton
                variant="add"
                onClick={() => router.push("/adminpage/transaksi/create")}
              >
                Tambah
              </ActionButton>
              <SearchBar onSearch={setQuery} />
            </div>
          </header>

          <TransactionsTable searchQuery={query} />
        </section>
      </main>
    );
  }
