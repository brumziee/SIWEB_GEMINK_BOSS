"use client";

import Link from "next/link";
import { useState } from "react";
import { FaUser, FaLock, FaArrowLeft } from "react-icons/fa";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <button className="absolute top-6 left-6 text-white text-2xl">
          <FaArrowLeft />
        </button>
        
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <div className="space-y-4">
          <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
            <FaUser className="mr-3" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent outline-none w-full placeholder-gray-300"
            />
          </div>

          <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
            <FaLock className="mr-3" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none w-full placeholder-gray-300"
            />
          </div>

          <p className="text-sm text-gray-400 mt-2 cursor-pointer hover:underline">Forgot Password?</p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold">Login</button>

          <p className="mt-4 text-sm">
            Don't have an account? <Link href="/register" className="text-blue-400 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
