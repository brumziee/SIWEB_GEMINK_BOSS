'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';

interface TableRowProps {
  index: number;
  id: number;
  name: string;
  price: number;
  stok: number;
  kategori: string;
  onDeleteSuccess?: (deletedId: number) => void; // diperbaiki
}

export const TableRow: React.FC<TableRowProps> = ({
  index,
  id,
  name,
  price,
  stok,
  kategori,
  onDeleteSuccess,
}) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm('Apakah kamu yakin ingin menghapus produk ini?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        alert('Produk berhasil dihapus.');
        if (onDeleteSuccess) {
          onDeleteSuccess(id); // panggil dengan id
        } else {
          router.refresh();
        }
      } else {
        const err = await res.json();
        alert(`Gagal menghapus produk: ${err.message}`);
      }
    } catch (error) {
      alert('Terjadi kesalahan saat menghapus produk.');
      console.error(error);
    }
  };

  return (
    <div className="flex p-5 border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 text-black max-sm:text-xs">
      <div className="w-[80px] text-sm">{index + 1}</div>
      <div className="flex-1 text-sm">{name}</div>
      <div className="flex-1 text-sm">Rp {price.toLocaleString('id-ID')}</div>
      <div className="flex-1 text-sm">{stok}</div>
      <div className="flex-1 text-sm">{kategori}</div>
      <div className="flex flex-1 gap-8 justify-center items-center text-sm text-center max-sm:flex-col max-sm:gap-1.5">
        <button
          onClick={() => router.push(`/adminpage/katalog/${id}/edit`)}
          className="px-5 py-1.5 text-sm bg-yellow-500 rounded-md cursor-pointer border-[none] text-white"
        >
          Ubah
        </button>
        <button
          onClick={handleDelete}
          className="px-5 py-1.5 text-sm bg-red-600 rounded-md cursor-pointer border-[none] text-white"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};
