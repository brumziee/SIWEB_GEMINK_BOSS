"use client";

import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userData, setUserData] = useState<{ name?: string; email?: string; role?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setLoading(false);
      return;
    }

    const { email } = JSON.parse(storedUser);

    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        setUserData(data);
      } catch (error) {
        console.error(error);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg font-semibold">Memuat profil...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg font-semibold text-red-600">Profil tidak ditemukan.</p>
      </div>
    );
  }

  const initial = userData.name?.charAt(0).toUpperCase() || "?";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] p-6 pt-10">
      {/* Avatar */}
      <div className="relative mb-6">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-[#261FB3] text-white flex items-center justify-center text-4xl font-bold shadow-lg">
            {initial}
          </div>
        )}

        <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <span className="text-sm text-[#261FB3] font-semibold">✎</span>
        </label>
      </div>

      {/* Detail Pengguna */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center space-y-3">
        <h2 className="text-2xl font-bold text-[#261FB3]">{userData.name}</h2>
        <p className="text-gray-600">{userData.email}</p>
        <p className="text-sm text-gray-700 bg-gray-200 inline-block px-3 py-1 rounded-full">
          Role: <strong>{userData.role}</strong>
        </p>
      </div>
    </div>
  );
}
