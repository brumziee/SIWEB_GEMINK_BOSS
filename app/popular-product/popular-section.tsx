import React from "react";
import { ProductCard } from "./product-card";
import { UnderlineDecoration } from "@/app/testimoni/underline";

export const PopularProductSection = () => {
  const products = [
    {
      name: "LENOVO LOQ I5",
      price: "Rp 17.699.000",
      imageUrl: "/home/loq.jpg",
    },
    {
      name: "WOOTING 60HE+",
      price: "Rp 4.150.000",
      imageUrl: "/home/wooting.png",
    },
    {
      name: "EPOMAKER HE68",
      price: "Rp 950.000",
      imageUrl: "/home/epomaker.png",
    },
    {
      name: "LOGITECH G PRO SUPERLIGHT 2",
      price: "Rp 1.800.000",
      imageUrl: "/home/superlight.jpg",
    },
  ];

  return (
    <section className="bg-[#FFF5E8] py-10 flex flex-col items-center text-center text-black">
      <h2 className="text-2xl italic font-bold mb-2">POPULAR PRODUCT</h2>
      <UnderlineDecoration />
      <div className="flex gap-10 mt-8 flex-wrap justify-center">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
};
