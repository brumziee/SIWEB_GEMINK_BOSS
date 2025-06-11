"use client";

import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userData, setUserData] = useState<{ username?: string; role?: string } | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");

    if (storedUsername && storedRole) {
      setUserData({ username: storedUsername, role: storedRole });
    }
  }, []);

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg font-semibold">Memuat profil...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-[#261FB3] mb-4">Profil Pengguna</h1>
      <div className="text-gray-800 space-y-2">
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Role:</strong> {userData.role}</p>
      </div>
    </div>
  );
}
