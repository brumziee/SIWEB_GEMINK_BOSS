"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || ""; // Ambil email dari URL
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Password for ${email} has been reset successfully!`);
    router.push("/login"); // Redirect kembali ke login
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-[#fdf5e6] to-[#1e1eff] text-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-excelate font-bold mb-6">Reset Password</h1>
        <p className="text-sm text-gray-600 mb-4">Enter your new password.</p>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full bg-gray-200 px-4 py-3 rounded-lg outline-none text-gray-900 placeholder-gray-500 mb-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full bg-gray-200 px-4 py-3 rounded-lg outline-none text-gray-900 placeholder-gray-500"
        />

        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 mt-4 rounded-full font-semibold text-white text-lg shadow-md transition-all"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
