// components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  nama_produk: string;
  deskripsi: string;
  harga: number;
  foto: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ nama_produk, deskripsi, harga, foto }) => {
  return (
    <div className="border-2 border-black p-6 md:p-10 mb-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#fdf5e6]">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={foto}
          alt={nama_produk}
          className="w-44 md:w-52 object-contain"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-widest">
            {nama_produk}
          </h2>
          <p className="text-md md:text-lg">{deskripsi}</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg md:text-xl font-semibold mb-4 tracking-widest">
          {harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
        </p>
        <button className="bg-black text-white py-2 px-6 font-bold text-sm md:text-base tracking-wider hover:scale-105 transition-all shadow-lg">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
