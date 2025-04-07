import * as React from "react";

export function SearchBar() {
  return (
    <div className="flex items-center p-4 rounded-3xl border border-black border-solid w-[489px] max-md:w-full">
      <i className="ti ti-search mr-4 text-black" />
      <input
        type="text"
        placeholder="Cari"
        className="w-full text-base border-[none] bg-transparent focus:outline-none"
      />
    </div>
  );
}
