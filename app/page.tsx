"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const checkLoginStatus = () => {
    return isLoggedIn;
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    if (!checkLoginStatus()) {
      e.preventDefault();
      router.push("/login"); // Redirect ke login jika belum login
    }
  };

  return (
    <div
      className="relative flex flex-col gap-5 justify-center items-center w-full h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/11/1200/675/istock-1560833158.jpg?ve=1&tl=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="z-10 flex flex-col gap-2 justify-center items-center">
        {/* GEMINK di atas, BOSS di bawah */}
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
          href="/katalog"
          onClick={handleExploreClick}
          className="px-10 py-4 text-2xl text-black bg-white rounded-xl cursor-pointer hover:bg-opacity-90 transition max-sm:px-8 max-sm:py-3 max-sm:text-xl"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
