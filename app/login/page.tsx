"use client";

import Link from "next/link";
import { useState } from "react";
import { FaUser, FaLock, FaArrowLeft } from "react-icons/fa";
import Header from "@/app/layout";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-full bg-gradient-to-b from-blue-900 to-gray-300">
      <Header />
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center relative">
          <button className="absolute top-4 left-4 text-black text-2xl">
            <FaArrowLeft />
          </button>

          <h1 className="text-3xl font-bold mb-6 text-black">LOGIN BOSS</h1>
          <div className="space-y-4">
            <div className="flex items-center bg-gray-700 px-4 py-3 rounded-lg text-white">
              <FaUser className="mr-3" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent outline-none w-full placeholder-gray-300"
              />
            </div>

            <div className="flex items-center bg-gray-700 px-4 py-3 rounded-lg text-white">
              <FaLock className="mr-3" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none w-full placeholder-gray-300"
              />
            </div>

            <p className="text-sm text-gray-500 mt-2 cursor-pointer hover:underline">Forgot Password?</p>

            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold text-white text-lg">
              Login
            </button>

            <p className="mt-4 text-sm text-black">
              Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
