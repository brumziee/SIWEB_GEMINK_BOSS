// components/transactions-table-skeleton.tsx
import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function TransactionsTableSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-3xl border-[3px] border-black border-opacity-20`}
    >
      <div className="flex p-5 text-sm font-bold bg-indigo-800 text-white max-sm:p-2.5 max-sm:text-xs">
        <div className="flex-1">ID Transaksi</div>
        <div className="flex-1">Tanggal Transaksi</div>
        <div className="flex-1">Total Harga</div>
        <div className="flex-1">Nama Pelanggan</div>
        <div className="flex-1">Item yang Dibeli</div>
        <div className="flex-1 text-center">Pilihan</div>
      </div>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="flex items-center p-5 border-b border-solid border-black border-opacity-10 max-sm:p-2.5 max-sm:text-xs"
        >
          {[...Array(5)].map((_, j) => (
            <div
              key={j}
              className="flex-1 h-6 bg-gray-200 rounded max-sm:h-4"
            ></div>
          ))}
          <div className="flex flex-1 justify-center gap-3">
            <div className="h-9 w-9 bg-gray-200 rounded-md"></div>
            <div className="h-9 w-9 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

const cardSkeletonContainer =
  "rounded-2xl shadow p-5 w-full border bg-white animate-pulse min-h-[100px] flex flex-col justify-center gap-2";
  
// Skeleton untuk Analytics Card (ukuran kira-kira sama semua)
export function TotalProductSkeleton() {
  return (
    <div className={cardSkeletonContainer}>
      {/* Judul Skeleton */}
      <div className="w-32 h-4 bg-gray-200 rounded" />

      {/* Nilai Produk Skeleton */}
      <div className="w-60 h-7 bg-gray-200 rounded-lg" />
    </div>
  );
}

export function TotalRevenueSkeleton() {
  return (
    <div className={cardSkeletonContainer}>
      {/* Judul Skeleton */}
      <div className="w-32 h-4 bg-gray-200 rounded" />

      {/* Nilai Produk Skeleton */}
      <div className="w-60 h-7 bg-gray-200 rounded-lg" />
    </div>
  );
}


export function PopularProductSkeleton() {
  return (
    <div className={cardSkeletonContainer}>
      {/* Judul Skeleton */}
      <div className="w-32 h-4 bg-gray-200 rounded" />

      {/* Nilai Produk Skeleton */}
      <div className="w-60 h-7 bg-gray-200 rounded-lg" />
    </div>
  );
}


export function MonthlyChartSkeleton() {
  return <div className="h-64 w-full bg-gray-200 rounded-2xl" />;
}

export function DailyChartSkeleton() {
  return <div className="h-64 w-full bg-gray-200 rounded-2xl" />;
}

export function CatalogSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-3xl border-[3px] border-black border-opacity-20`}
      role="status"
      aria-label="Loading katalog produk..."
    >
      <div className="flex p-5 text-sm font-bold bg-indigo-800 text-white max-sm:p-2.5 max-sm:text-xs">
        <div className="flex-1">ID Produk</div>
        <div className="flex-1">Nama Produk</div>
        <div className="flex-1">Harga</div>
        <div className="flex-1">Stok</div>
        <div className="flex-1">Kategori</div>
        <div className="flex-1 text-center">Pilihan</div>
      </div>

      {[...Array(6)].map((_, rowIdx) => (
        <div
          key={rowIdx}
          className="flex items-center p-5 border-b border-solid border-black border-opacity-10 max-sm:p-2.5 max-sm:text-xs"
          aria-hidden="true"
        >
          {[...Array(5)].map((_, colIdx) => (
            <div
              key={colIdx}
              className="flex-1 h-6 bg-gray-200 rounded max-sm:h-4"
            />
          ))}
          <div className="flex flex-1 justify-center gap-3">
            <div className="h-9 w-9 bg-gray-200 rounded-md" />
            <div className="h-9 w-9 bg-gray-200 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function CustomerSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex items-center p-5 border-b border-black border-opacity-10 max-sm:p-2.5`}
    >
      <div className="w-[80px] h-4 bg-gray-200 rounded" />
      <div className="flex-1 h-4 bg-gray-200 rounded ml-4" />
      <div className="flex-1 h-4 bg-gray-200 rounded ml-4" />
      <div className="flex-1 h-4 bg-gray-200 rounded ml-4" />
      <div className="flex-1 h-4 bg-gray-200 rounded ml-4" />
      <div className="flex flex-1 justify-center gap-3 ml-4">
        <div className="h-9 w-9 bg-gray-200 rounded-md" />
        <div className="h-9 w-9 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
}
