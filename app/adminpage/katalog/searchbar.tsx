interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:w-full">
      <button
        onClick={() => window.location.href = "/adminpage/katalog/create"}
        className="px-8 py-2.5 text-base bg-lime-800 rounded-md cursor-pointer border-[none] text-[white]"
      >
        Tambah
      </button>
      <div className="flex items-center p-4 rounded-3xl border border-black border-solid w-[489px] max-md:w-full">
        <i className="ti ti-search mr-4 text-black" />
        <input
          type="text"
          placeholder="Cari"
          onChange={(e) => onSearch(e.target.value)}
          className="w-full text-base border-[none] bg-transparent focus:outline-none text-black"
        />
      </div>
    </div>
  );
}
