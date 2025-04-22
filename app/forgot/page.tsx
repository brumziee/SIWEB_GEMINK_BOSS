"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleReset = () => {
    alert(`Password reset link has been sent to ${email}`);
    router.push(`/reset-password?email=${email}`); // Redirect ke halaman reset password
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FFF5E8] text-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-excelate font-bold mb-6">Forgot Password</h1>
        <p className="text-sm text-gray-600 mb-4">
          Enter your email to receive a password reset link.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-200 px-4 py-3 rounded-lg outline-none text-gray-900 placeholder-gray-500"
        />

        <button
          onClick={handleReset}
          className="w-full bg-[#1B1891] hover:bg-[#161676] py-3 mt-4 rounded-full font-semibold text-white text-lg shadow-md transition-all"
        >
          Send Reset Link
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Remember your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
