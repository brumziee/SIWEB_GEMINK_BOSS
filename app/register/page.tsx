"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm">Nama Lengkap</label>
            <input type="text" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-sm">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          
          <div>
            <label className="block text-sm">Password</label>
            <input type="password" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold">Register</button>
        </form>

        <p className="mt-4 text-center text-sm">
          Sudah punya akun? <Link href="/login" className="text-blue-400 hover:underline">Login di sini</Link>
        </p>
      </div>
    </div>
  );
}
