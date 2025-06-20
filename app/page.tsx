"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PopularProductSection } from "@/app/popular-product/popular-section";
import { ReviewSection } from "@/app/testimoni/section";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Cek status login saat halaman dimuat
  useEffect(() => {
    const role = localStorage.getItem("role"); // Ambil status login dari localStorage
    if (role) {
      setIsLoggedIn(true); // Set login status jika role ditemukan
    }
  }, []);

  const checkLoginStatus = () => {
    return isLoggedIn;
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    if (!checkLoginStatus()) {
      e.preventDefault();
      router.push("/shop"); // Arahkan ke halaman /shop
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#FFF5E8] text-black">
      {/* HERO SECTION */}
      <section
        className="relative flex flex-col gap-5 justify-center items-center w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/11/1200/675/istock-1560833158.jpg?ve=1&tl=1')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="z-10 flex flex-col gap-2 justify-center items-center">
          <h1 className="font-excelate text-6xl text-center text-orange-100 leading-none max-md:text-7xl max-sm:text-6xl">
            GEMINK
          </h1>
          <h1 className="font-excelate text-6xl text-center text-orange-100 leading-none max-md:text-7xl max-sm:text-6xl">
            BOSS
          </h1>

          <div className="h-0.5 bg-white w-[274px]" />

          <p className="text-2xl italic font-semibold text-white max-sm:text-xl">
            Gear Up, Level Up
          </p>

          <Link
            href="/shop"
            onClick={handleExploreClick}
            className="px-10 py-4 text-2xl text-black bg-white rounded-xl cursor-pointer hover:bg-opacity-90 transition max-sm:px-8 max-sm:py-3 max-sm:text-xl"
          >
            Explore
          </Link>
        </div>
      </section>

      {isLoggedIn && <PopularProductSection />}

      {isLoggedIn && <ReviewSection />}
    </div>
  );
};

export default HomePage;
