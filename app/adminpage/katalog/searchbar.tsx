import * as React from "react";

export const SearchBar: React.FC = () => {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:w-full">
      <button className="px-8 py-2.5 text-base bg-lime-800 rounded-md cursor-pointer border-[none] text-[white]">
        Tambah
      </button>
      <div className="flex items-center p-4 rounded-3xl border border-black border-solid w-[489px] max-md:w-full">
        <i className="ti ti-search mr-4 text-black" />
        <input
          type="text"
          placeholder="Cari"
          className="w-full text-base border-[none] bg-transparent outline-none"
        />
      </div>
    </div>
  );
};
