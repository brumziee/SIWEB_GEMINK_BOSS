'use client';
import * as React from "react";
import { CustomerTable } from "./customertable";
import { SearchBar } from "./searchbar";
import { ActionButton } from "./actionbutton";
import { useRouter, useSearchParams } from "next/navigation";

export default function CustomerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get('query') || '';  // Ambil query dari URL

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', '1'); // Set halaman pertama saat pencarian baru

    if (term) {
      params.set('query', term); // Set query pencarian
    } else {
      params.delete('query'); // Hapus query jika tidak ada pencarian
    }

    // Ganti URL tanpa reload halaman
    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Nunito:wght@600&display=swap"
        rel="stylesheet"
      />
      <main className="flex min-h-screen bg-orange-50">
        <section className="flex-1 px-12 py-10 max-md:p-5 max-sm:p-2.5">
          <header className="flex justify-between items-center mb-10 max-md:flex-col max-md:gap-5 max-md:items-start">
            <h1 className="text-4xl font-bold text-black max-sm:text-2xl">
              Pelanggan
            </h1>
            <div className="flex gap-5 max-md:flex-col max-md:w-full">
              <ActionButton variant="add" onClick={() => router.push("/adminpage/customers/create")}>
                Tambah
              </ActionButton>
              <SearchBar onSearch={handleSearch} /> {/* Kirim handleSearch ke SearchBar */}
            </div>
          </header>
          
          {/* Pass the query from the URL to the CustomerTable */}
          <CustomerTable query={query} />
        </section>
      </main>
    </>
  );
}
