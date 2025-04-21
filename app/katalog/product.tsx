import React from "react";

interface ProductCardProps {
  image: string;
  altText: string;
  name: string;
  color: string;
  ram: string;
  specs: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  altText,
  name,
  color,
  ram,
  specs,
  price,
}) => {
  return (
    <article className="flex gap-8 items-center p-4 bg-orange-50 border-black border-solid border-[3px] max-w-[1300px] w-[90%] max-md:flex-col max-md:items-center max-sm:p-2">
      <img
        src={image}
        className="w-60 h-60 max-md:h-[200px] max-md:w-[200px]"
        alt={altText}
      />
      <div className="flex flex-col flex-1 gap-4 items-start max-md:items-center max-md:text-center">
        <h2 className="text-5xl text-black max-sm:text-4xl">{name}</h2>
        <div className="text-2xl text-black max-sm:text-xl">
          <span>COLOR: {color}</span>
          <br />
          <span>RAM: {ram}</span>
          <br />
          <span>{specs}</span>
        </div>
        <div className="text-3xl text-black max-sm:text-2xl">{price}</div>
        <button className="px-4 py-2.5 text-xl text-center text-white bg-black cursor-pointer max-sm:text-lg">
          ADD TO CART
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
