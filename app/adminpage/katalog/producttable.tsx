import * as React from "react";
import { TableRow } from "./tablerow";

const products = [
  { id: "P1", name: "Keyboard Keren", price: "Rp. 30.000,00" },
  { id: "P2", name: "Mouse Keren", price: "Rp. 75.000,00" },
  { id: "P3", name: "Headset Keren", price: "Rp. 150.000,00" },
  { id: "P4", name: "Microphone Keren", price: "Rp. 200.000,00" },
  { id: "P5", name: "Monitor Keren", price: "Rp. 15.000,00" },
];

export const ProductTable: React.FC = () => {
  return (
    <section className="overflow-hidden rounded-3xl border-solid border-[3px] border-black border-opacity-20 max-md:overflow-x-auto max-sm:text-sm">
      <div className="flex p-5 text-base font-bold bg-indigo-800 text-[white]">
        <div className="flex-1">ID Produk</div>
        <div className="flex-1">Nama Layanan</div>
        <div className="flex-1">Harga Produk</div>
        <div className="flex-1  text-center">Pilihan</div>
      </div>
      {products.map((product) => (
        <TableRow
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </section>
  );
};