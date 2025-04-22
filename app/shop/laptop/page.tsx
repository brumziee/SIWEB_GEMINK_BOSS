'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const LaptopPage = () => {
  const router = useRouter();

  const laptopProducts = [
    {
      name: "ARES SKYLARX",
      color: "RED/BLACK",
      ram: "2000 TB",
      spek: "SPEK DEWA",
      price: "Rp. 290.000.000",
      image: "/public/letop1.png", // Ganti sesuai path kamu
    },
    {
      name: "RUBY FREEDOMS",
      color: "BLACK",
      ram: "234 TB",
      spek: "SPEK DEWA DEWI RAJA",
      price: "Rp. 200.000.000",
      image: "/public/letop2.png", // Ganti sesuai path kamu
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdf5e6] text-black px-4 md:px-20 py-10 relative">
      {/* Tombol Back */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 text-3xl font-bold hover:text-gray-600"
      >
        ←
      </button>

      {/* Judul */}
      <h1 className="text-center text-5xl md:text-6xl font-sakana italic mb-12 mt-10 tracking-wider">
        LAPTOP’S
      </h1>

      {/* Daftar Produk */}
      {laptopProducts.map((product, index) => (
        <div
          key={index}
          className="border-2 border-black p-6 md:p-10 mb-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#fdf5e6]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-44 md:w-52 object-contain"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-widest">
                {product.name}
              </h2>
              <p className="text-md md:text-lg">COLOR: {product.color}</p>
              <p className="text-md md:text-lg">RAM: {product.ram}</p>
              <p className="text-md md:text-lg">{product.spek}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl font-semibold mb-4 tracking-widest">
              {product.price}
            </p>
            <button className="bg-black text-white py-2 px-6 font-bold text-sm md:text-base tracking-wider hover:scale-105 transition-all shadow-lg">
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LaptopPage;
