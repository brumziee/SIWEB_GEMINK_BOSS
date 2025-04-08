'use client';

import React from 'react';

type ProductCategory = {
  name: string;
  count: number;
  imageUrl: string;
};

const categories: ProductCategory[] = [
  { name: 'Letop', count: 2, imageUrl: '/public/letop.png' },
  { name: 'Kebrot', count: 1, imageUrl: '/public/kebrot.png' },
  { name: 'Maus', count: 3, imageUrl: '/public/maus.png' },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fdf5e6] to-[#1e1eff] flex flex-col items-center py-16">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-black italic mb-2 tracking-wide text-black font-sakana">
          GEMINK PRODUCT’S
        </h2>
        <p className="text-sm md:text-base mb-8 text-black tracking-wide">
          LET’S UPGRADE UR GEAR BOSS!
        </p>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white border border-black p-4 w-[250px] rounded-md shadow-md transform transition hover:scale-105"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-[200px] object-contain"
            />
            <h3 className="mt-4 text-xl md:text-2xl font-bold italic text-indigo-900">
              {category.name.toUpperCase()}
            </h3>
            <p className="text-lg text-black">{category.count}</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded shadow hover:bg-opacity-80 transition">
              SEE ALL
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="mt-8 flex justify-center gap-6 text-2xl text-black">
        <button className="hover:text-gray-700">{'«'}</button>
        <button className="hover:text-gray-700">{'»'}</button>
      </div>
    </section>
  );
};

export default ProductShowcase;
