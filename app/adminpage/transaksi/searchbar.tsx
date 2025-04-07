"use client";
import * as React from "react";

export function SearchBar() {
  return (
    <div className="flex items-center px-5 py-2.5 rounded-3xl border border-solid border-[black] w-[450px] max-md:w-full">
      <i className="ti ti-search mr-2.5" />
      <input
        type="text"
        placeholder="Cari"
        className="w-full text-base border-[none]"
      />
    </div>
  );
}
