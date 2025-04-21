"use client";
import * as React from "react";
import Header from "./header";
import ProductCard from "./product";
import NavigationControls from "./navigation";

function LaptopShowcase() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400&family=Cutive+Mono&family=Overcame+Demo&family=Poppins:wght@400&family=Sakana&display=swap"
      />
      <main className="relative mx-auto my-0 w-full bg-orange-50 max-w-[1440px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />

        <h1 className="mx-0 my-8 text-6xl text-center text-black max-sm:text-5xl">
          LAPTOP'S
        </h1>

        <section className="flex flex-col gap-8 items-center max-md:flex-col">
          <ProductCard
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/074ac8e4acd2900ce5e8f9c9282735fae7aee8a7?placeholderIfAbsent=true"
            altText="Ares Skylarx"
            name="ARES SKYLARX"
            color="RED/BLACK"
            ram="2000 TB"
            specs="SPEK DEWA"
            price="Rp. 290.000.000"
          />

          <ProductCard
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/e809ab8fb40c76122e1ee4abb288c6ba6c87e092?placeholderIfAbsent=true"
            altText="Ruby Freedoms"
            name="RUBY FREEDOMS"
            color="BLACK"
            ram="234 TB"
            specs="SPEK DEWA DEWI RAJA"
            price="Rp. 200.000.000"
          />
        </section>

        <NavigationControls />
      </main>
    </>
  );
}

export default LaptopShowcase;
