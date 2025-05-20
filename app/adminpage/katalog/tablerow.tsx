import * as React from 'react';

interface TableRowProps {
  id: number;
  name: string;
  price: number;
  stok: number;
  kategori: string;
}

export const TableRow: React.FC<TableRowProps> = ({
  id,
  name,
  price,
  stok,
  kategori,
}) => {
  return (
    <div className="flex p-5 border-b border-solid border-b-black border-b-opacity-10">
      <div className="flex-1 text-sm">{id}</div>
      <div className="flex-1 text-sm">{name}</div>
      <div className="flex-1 text-sm">
        Rp {price.toLocaleString('id-ID')}
      </div>
      <div className="flex-1 text-sm">{stok}</div>
      <div className="flex-1 text-sm">{kategori}</div>
      <div className="flex flex-1 gap-8 justify-center items-center text-base text-center max-sm:flex-col max-sm:gap-1.5">
        <button className="px-5 py-1.5 text-sm bg-yellow-500 rounded-md cursor-pointer border-[none] text-[white]">
          Ubah
        </button>
        <button className="px-5 py-1.5 text-sm bg-red-600 rounded-md cursor-pointer border-[none] text-[white]">
          Hapus
        </button>
      </div>
    </div>
  );
};
