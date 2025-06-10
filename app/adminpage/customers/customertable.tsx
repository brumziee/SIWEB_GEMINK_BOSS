'use client';
import * as React from "react";
import { useEffect, useState } from "react";
import { ActionButton } from "./actionbutton";
import { useRouter } from 'next/navigation';

interface CustomerData {
  id_pelanggan: number;
  nama_pelanggan: string;
  umur_pelanggan: number;
  alamat_pelanggan: string;
  email_pelanggan: string;
}

const shimmer = "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

function CustomerSkeletonRow() {
  return (
    <div className={`relative flex items-center p-5 border-b border-black border-opacity-10 max-sm:p-2.5 ${shimmer} overflow-hidden`}>
      <div className="w-[80px] h-4 bg-gray-200 rounded" />
      <div className="flex-1 h-4 bg-gray-200 rounded ml-4" />
      <div className="flex-1 h-4 bg-gray-200 rounded ml-4" />
      <div className="flex-1 h-4 bg-gray-200 rounded ml-4" />
      <div className="flex-1 h-4 bg-gray-200 rounded ml-4" />
      <div className="flex flex-1 justify-center gap-3 ml-4">
        <div className="h-8 w-12 bg-gray-200 rounded-md" />
        <div className="h-8 w-12 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
}

export function CustomerTable({ query }: { query: string }) {
  const [customers, setCustomers] = useState<CustomerData[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<CustomerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState<CustomerData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const router = useRouter();

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = query
        ? `/api/admin/pelanggan?query=${encodeURIComponent(query)}`
        : '/api/admin/pelanggan';

      try {
        const res = await fetch(url);
        const data = await res.json();
        const sortedData = data.sort((a: CustomerData, b: CustomerData) => a.id_pelanggan - b.id_pelanggan);
        setCustomers(sortedData);
        setFilteredCustomers(sortedData);
      } catch (error) {
        setCustomers([]);
        setFilteredCustomers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = customers.filter(customer =>
      customer.nama_pelanggan.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCustomers(filtered);
    setCurrentPage(1);
  }, [query, customers]);

  const handleDelete = (customer: CustomerData) => {
    setCustomerToDelete(customer);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (!customerToDelete) return;

    try {
      const res = await fetch(`/api/customers/${customerToDelete.id_pelanggan}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Delete failed');

      const updated = customers.filter(c => c.id_pelanggan !== customerToDelete.id_pelanggan);
      setCustomers(updated);
      setFilteredCustomers(updated);
    } catch (error) {
      alert('Gagal menghapus pelanggan');
    } finally {
      setShowConfirm(false);
      setCustomerToDelete(null);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <>
      <div className="overflow-hidden rounded-3xl border-solid border-[3px] border-black border-opacity-20 max-md:overflow-x-auto">
        <div className="flex p-5 text-sm font-bold bg-indigo-800 text-white max-sm:p-2.5 max-sm:text-xs">
          <div className="w-[80px]">ID</div>
          <div className="flex-1">Nama</div>
          <div className="flex-1">Umur</div>
          <div className="flex-1">Alamat</div>
          <div className="flex-1">Email</div>
          <div className="flex-1 text-center">Pilihan</div>
        </div>

        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <CustomerSkeletonRow key={index} />
          ))
        ) : paginatedCustomers.length === 0 ? (
          <div className="p-5 text-center text-gray-500">Data tidak ditemukan</div>
        ) : (
          paginatedCustomers.map((customer, index) => (
            <div
              key={customer.id_pelanggan}
              className="flex p-5 border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 text-black max-sm:text-xs"
            >
              <div className="w-[80px] text-sm">{startIndex + index + 1}</div>
              <div className="flex-1 text-sm">{customer.nama_pelanggan}</div>
              <div className="flex-1 text-sm">{customer.umur_pelanggan}</div>
              <div className="flex-1 text-sm">{customer.alamat_pelanggan}</div>
              <div className="flex-1 text-sm">{customer.email_pelanggan}</div>
              <div className="flex flex-1 gap-8 justify-center items-center text-sm text-center max-sm:flex-col max-sm:gap-1.5">
                <ActionButton
                  variant="edit"
                  size="small"
                  onClick={() => router.push(`/adminpage/customers/${customer.id_pelanggan}/edit`)}
                >
                  Ubah
                </ActionButton>
                <ActionButton
                  variant="delete"
                  size="small"
                  onClick={() => handleDelete(customer)}
                >
                  Hapus
                </ActionButton>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {!loading && filteredCustomers.length > itemsPerPage && (
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

      {/* Modal Konfirmasi */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl text-center">
            <h2 className="text-xl font-semibold mb-4">Konfirmasi Hapus</h2>
            <p className="mb-6">Apakah Anda yakin ingin menghapus pelanggan <span className="font-medium">"{customerToDelete?.nama_pelanggan ?? ''}"</span>?</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-5 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                onClick={() => setShowConfirm(false)}
              >
                Batal
              </button>
              <button
                className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={confirmDelete}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
