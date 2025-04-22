"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setLoading(true);

    // Simulasi proses login (bisa diganti API real)
    setTimeout(() => {
      if (username === "admin123" && password === "12345") {
        localStorage.setItem("role", "admin");
        router.push("/adminpage");
      } else if (username === "user123" && password === "12345") {
        localStorage.setItem("role", "user");
        router.push("/");
      } else {
        alert("Invalid username or password!");
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FFF5E8] text-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-excelate font-bold mb-6">LOGIN BOSS</h1>

        <div className="space-y-4">
          {/* Username */}
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

          {/* Password */}
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

          {/* Forgot password */}
          <p className="text-sm text-gray-500 mt-2 cursor-pointer hover:underline">
            <Link href="/forgot">Forgot Password?</Link>
          </p>

          {/* Button login */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full bg-[#1e1e99] hover:bg-[#161676] py-3 rounded-full font-semibold text-white text-lg shadow-md transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Sign up */}
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
