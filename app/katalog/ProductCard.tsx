import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  count: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, count }) => {
  return (
    <div className="text-center">
      <img src={image} alt={title} className="w-64 h-64 object-cover mx-auto border" />
      <h2 className="text-white text-2xl font-bold mt-4">{title}</h2>
      <p className="text-white text-lg">{count}</p>
      <button className="bg-black text-white px-4 py-2 mt-2 rounded hover:bg-gray-800">
        SEE ALL
      </button>
    </div>
  );
};

export default ProductCard;
