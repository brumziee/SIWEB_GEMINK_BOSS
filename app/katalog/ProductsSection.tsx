import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection: React.FC = () => {
  const products = [
    {
      image: '/public/haha.png',
      title: 'LETOP',
      count: 2
    },
    {
      image: '/public/haha.png',
      title: 'KEBROT',
      count: 1
    },
    {
      image: '/public/haha.png',
      title: 'MAUS',
      count: 3
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-900 py-10">
      <div className="text-center text-black">
        <h1 className="text-4xl font-bold">GEMINK PRODUCT'S</h1>
        <p className="italic text-sm">LET'S UPGRADE UR GEAR BOSS!</p>
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            count={product.count}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-4">
        <button className="text-white text-2xl">{'«'}</button>
        <button className="text-white text-2xl">{'»'}</button>
      </div>
    </section>
  );
};

export default ProductsSection;
