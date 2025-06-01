'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function SearchBar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams?.get('query') || '');

  const handleSearch = useDebouncedCallback((term: string) => {
    // Ambil params langsung dari window.location.search agar selalu fresh
    const params = new URLSearchParams(window.location.search);

    // Set page ke 1 saat search baru
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    // Ganti URL tanpa reload page tapi memicu rerender useSearchParams di CustomerTable
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
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
