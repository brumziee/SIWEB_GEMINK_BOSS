'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams?.get('query') || '');

  const handleSearch = useDebouncedCallback((term: string) => {
    onSearch(term);
  }, 300);

  useEffect(() => {
    setSearchTerm(searchParams?.get('query') || '');
  }, [searchParams]);

  return (
    <div className="flex items-center p-4 rounded-3xl border border-black border-solid w-[489px] max-md:w-full">
      <i className="ti ti-search mr-4 text-black" />
      <input
        type="text"
        placeholder="Cari"
        className="w-full text-base border-none bg-transparent focus:outline-none text-black"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
