'use client';

import React from 'react';

type ProductCategory = {
  name: string;
  count: number;
  imageUrl: string;
};

const categories: ProductCategory[] = [
  { name: 'Letop', count: 2, imageUrl: '/letop.png' },
  { name: 'Kebrot', count: 1, imageUrl: '/kebrot.png' },
  { name: 'Maus', count: 3, imageUrl: '/maus.png' },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fdf5e6] to-[#1e1eff]">
      {/* Header with logo and Pak Rangga */}
      <div className="flex justify-between items-center px-6 py-4 bg-[#1e1eff]">
        <div>
          <img src="/logo.png" alt="Gemink Boss Logo" className="h-20" />
        </div>
        <div className="flex items-center gap-2 text-white font-semibold">
          <span>Pak Rangga</span>
          <img
            src="/pakrangga.jpg"
            alt="Pak Rangga"
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
        </div>
      </div>

      {/* Main product showcase content */}
      <div className="px-8 py-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black italic mb-2 tracking-wide text-black">
          GEMINK PRODUCT’S
        </h2>
        <p className="text-sm md:text-base mb-8 text-black tracking-wide">
          LET’S UPGRADE UR GEAR BOSS!
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-black p-4 w-[250px] rounded-md shadow-md"
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
        <div className="mt-8 flex justify-center gap-4 text-2xl text-black">
          <button>{'«'}</button>
          <button>{'»'}</button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
