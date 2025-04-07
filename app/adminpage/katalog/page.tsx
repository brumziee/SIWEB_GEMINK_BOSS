"use client";
import * as React from "react";
import { SearchBar } from "./searchbar";
import { ProductTable } from "./producttable";

export default function ProductCatalog() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Nunito:wght@600&family=Playfair+Display:wght@700;800&display=swap"
        rel="stylesheet"
      />
      <div className="flex min-h-screen bg-orange-50">
        <main className="flex-1 p-10 max-md:p-5">
          <div className="flex justify-between items-center mb-10 max-md:flex-col max-md:gap-5 max-md:items-start">
            <h1 className="text-4xl font-bold text-black max-sm:text-2xl">
              Katalog Produk
            </h1>
            <SearchBar />
          </div>
          <ProductTable />
        </main>
      </div>
    </>
  );
}