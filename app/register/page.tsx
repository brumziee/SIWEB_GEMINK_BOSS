"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    alert("Registrasi berhasil! Silakan login.");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-[#fdf5e6] to-[#1e1eff] text-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-excelate font-bold mb-6">SIGN UP</h2>

        <div className="space-y-4">
          <div className="flex items-center bg-gray-200 px-4 py-3 rounded-lg">
            <FaUser className="mr-3 text-gray-600" />
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent outline-none w-full text-gray-900 placeholder-gray-500"
              required
            />
          </div>

          <div className="flex items-center bg-gray-200 px-4 py-3 rounded-lg">
            <FaEnvelope className="mr-3 text-gray-600" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none w-full text-gray-900 placeholder-gray-500"
              required
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
              required
            />
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-[#1e1e99] hover:bg-[#161676] py-3 rounded-full font-semibold text-white text-lg shadow-md transition-all"
          >
            Register
          </button>

          <p className="mt-4 text-sm text-gray-600">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
