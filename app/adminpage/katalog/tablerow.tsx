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
  onDeleteSuccess?: (deletedId: number) => void;
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
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setShowDeleteModal(false);
        alert('Produk berhasil dihapus.');
        if (onDeleteSuccess) {
          onDeleteSuccess(id);
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
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="flex p-5 border-b border-solid border-b-black border-b-opacity-10 max-sm:p-2.5 text-black max-sm:text-xs">
        <div className="w-[80px] text-sm">{index + 1}</div>
        <div className="flex-1 text-sm">{name}</div>
        <div className="flex-1 text-sm">Rp {price.toLocaleString('id-ID')}</div>
        <div className="flex-1 text-sm">{stok}</div>
        <div className="flex-1 text-sm">{kategori}</div>
        <div className="flex flex-1 gap-8 justify-center items-center text-sm text-center max-sm:flex-col max-sm:gap-1.5">
          <button
            onClick={() => router.push(`/adminpage/katalog/${id}/edit`)}
            className="px-5 py-1.5 text-sm bg-yellow-500 rounded-md cursor-pointer border-[none] text-white hover:bg-yellow-600 transition-colors"
          >
            Ubah
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="px-5 py-1.5 text-sm bg-red-600 rounded-md cursor-pointer border-[none] text-white hover:bg-red-700 transition-colors"
          >
            Hapus
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Konfirmasi Hapus</h3>
            <p className="mb-6">Apakah Anda yakin ingin menghapus produk <span className="font-medium">"{name}"</span>?</p>
            
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                disabled={isDeleting}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 rounded-md text-white hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDeleting ? 'Menghapus...' : 'Hapus'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};