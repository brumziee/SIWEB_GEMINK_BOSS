"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);

    // 🔐 Cek login hardcoded terlebih dahulu
    const defaultUsers = [
      { name: "user123", password: "12345", role: "user" },
      { name: "admin123", password: "12345", role: "admin" },
    ];

    const foundUser = defaultUsers.find(
      (user) => user.name === name && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("role", foundUser.role);
      localStorage.setItem("user", JSON.stringify({ name: foundUser.name, role: foundUser.role }));
      router.push(foundUser.role === "admin" ? "/adminpage" : "/");
      setLoading(false);
      return;
    }

    // 🔄 Jika bukan user hardcoded, lanjutkan ke API
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }), // name, bukan username
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Login gagal");
        setLoading(false);
        return;
      }

      localStorage.setItem("role", data.user.role);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push(data.user.role === "admin" ? "/adminpage" : "/");
    } catch (error) {
      console.error("Login error:", error);
      alert("Terjadi kesalahan saat login");
    }

    setLoading(false);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FFF5E8] text-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-excelate font-bold mb-6">LOGIN BOSS</h1>

        <div className="space-y-4">
          <div className="flex items-center bg-gray-200 px-4 py-3 rounded-lg">
            <FaUser className="mr-3 text-gray-600" />
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <Link href="/forgot">Forgot Password?</Link>
          </p>

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full bg-[#1e1e99] hover:bg-[#161676] py-3 rounded-full font-semibold text-white text-lg shadow-md transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
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
