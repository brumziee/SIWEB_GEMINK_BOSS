"use client";

import { useState, Suspense } from "react"; // Mengimpor Suspense
import { useSearchParams, useRouter } from "next/navigation";

// Komponen ResetPasswordForm yang akan dibungkus dengan Suspense
function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email") || ""; // aman meskipun null
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Password for ${email} has been reset successfully!`);
    router.push("/login"); 
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FFF5E8] text-gray-900">
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
          className="w-full bg-[#1B1891] hover:bg-[#161676] py-3 mt-4 rounded-full font-semibold text-white text-lg shadow-md transition-all"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

// Halaman Reset Password dengan Suspense
export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Menambahkan Suspense untuk pembungkus */}
      <ResetPasswordForm />
    </Suspense>
  );
}
