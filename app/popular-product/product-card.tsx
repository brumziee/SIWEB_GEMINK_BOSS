import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="flex flex-col items-center gap-3 text-black transform transition-all duration-300 hover:scale-95">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          src={imageUrl}
          alt={name}
          className="h-[260px] w-[260px] object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h4 className="text-base font-bold italic">{name}</h4>
      <p className="text-sm italic">{price}</p>
    </div>
  );
};
