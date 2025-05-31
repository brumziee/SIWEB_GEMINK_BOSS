interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="flex items-center p-4 rounded-3xl border border-black border-solid w-[489px] max-md:w-full">
      <i className="ti ti-search mr-4 text-black" />
      <input
        type="text"
        placeholder="Cari"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full text-base border-[none] bg-transparent focus:outline-none text-black"
      />
    </div>
  );
}
