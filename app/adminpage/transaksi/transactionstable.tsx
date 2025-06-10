'use client';
import * as React from "react";
import { useEffect, useState } from "react";
import { TransactionsTableSkeleton } from "@/app/ui/skeletons";

interface Transaction {
  id: string;
  date: string;
  total: string;
  customer: string;
  items: string;
}

interface TransactionsTableProps {
  searchQuery: string;
}

export function TransactionsTable({ searchQuery }: TransactionsTableProps) {
  const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/admin/pagetransaksi");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulasi loading
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredData = data.filter((t) =>
    t.items.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset ke halaman 1 jika hasil pencarian berubah
  }, [searchQuery]);

  return loading ? (
    <TransactionsTableSkeleton />
  ) : (
    <>
      <div className="overflow-hidden rounded-3xl border-[3px] border-black border-opacity-20 max-md:overflow-x-auto">
        <div className="flex p-5 text-sm font-bold bg-indigo-800 text-white max-sm:p-2.5 max-sm:text-xs">
          <div className="flex-1">ID Transaksi</div>
          <div className="flex-1">Tanggal Transaksi</div>
          <div className="flex-1">Total Harga</div>
          <div className="flex-1">Nama Pelanggan</div>
          <div className="flex-1">Item yang Dibeli</div>
        </div>
        {paginatedData.length > 0 ? (
          paginatedData.map((t, index) => (
            <div
              key={t.id}
              className="flex p-5 text-sm border-b border-solid border-black border-opacity-10 text-black max-sm:p-2.5 max-sm:text-xs"
            >
              <div className="flex-1">{startIndex + index + 1}</div>
              <div className="flex-1">{new Date(t.date).toLocaleDateString()}</div>
              <div className="flex-1">{t.total}</div>
              <div className="flex-1">{t.customer}</div>
              <div className="flex-1">{t.items}</div>
            </div>
          ))
        ) : (
          <div className="p-5 text-sm text-center text-black">Data tidak ditemukan.</div>
        )}
      </div>

      {/* Pagination Controls */}
      {!loading && filteredData.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-6 text-base font-semibold">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-white hover:bg-gray-200'
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md border font-bold ${
                currentPage === page
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-white hover:bg-gray-200'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
