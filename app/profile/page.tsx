"use client";

import React, { useEffect, useState } from "react";
import { Mail, UserCircle, Shield } from "lucide-react";

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
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Memuat profil...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold">
        <p>Profil tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-3xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 tracking-wide">
          Profil {userData.role}
        </h1>

        <div className="flex justify-center mb-6 relative">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Foto Profil"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md object-cover"
            />
          ) : (
            <img
              src={`https://ui-avatars.com/api/?name=${userData.name}&background=0D8ABC&color=fff&size=128`}
              alt="Foto Profil"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
            />
          )}

          {/* <label className="absolute bottom-2 right-[calc(50%-80px)] bg-white rounded-full p-2 shadow-md cursor-pointer"> */}
            {/* <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            /> */}
            {/* <span className="text-sm text-blue-600 font-semibold">✎</span> */} 
          {/* </label> */}
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
          <div className="mt-2 inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            <Shield className="inline-block w-4 h-4 mr-1" /> {userData.role}
          </div>
        </div>

        <hr className="mb-6 border-gray-300" />

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <UserCircle className="text-blue-500 w-6 h-6" />
            <div>
              <label className="text-sm text-gray-500">Nama</label>
              <p className="text-lg font-semibold text-gray-800">{userData.name}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="text-blue-500 w-6 h-6" />
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <p className="text-lg font-semibold text-gray-800">{userData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
