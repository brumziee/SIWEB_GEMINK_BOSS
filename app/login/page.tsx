"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      router.push("/adminpage"); // Arahkan ke halaman admin
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#F5E1C9] text-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">LOGIN BOSS</h1>

        <div className="space-y-4">
          <div className="flex items-center bg-gray-200 px-4 py-3 rounded-lg">
            <FaUser className="mr-3 text-gray-600" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent outline-none w-full text-gray-900 placeholder-gray-500"
            />
          </div>

          <div className="flex items-center bg-gray-200 px-4 py-3 rounded-lg">
            <FaLock className="mr-3 text-gray-600" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none w-full text-gray-900 placeholder-gray-500"
            />
          </div>

          <p className="text-sm text-gray-500 mt-2 cursor-pointer hover:underline">
            Forgot Password?
          </p>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full font-semibold text-white text-lg shadow-md transition-all"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
