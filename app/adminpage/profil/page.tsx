"use client";

import React, { useEffect, useState } from "react";
import { Mail, UserCircle, Shield } from "lucide-react";

const ProfilPage = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      // Fallback user admin jika tidak ada user tersimpan
      const defaultAdmin = {
        name: "Admin",
        email: "admin@gemink.com",
        role: "admin",
      };
      localStorage.setItem("user", JSON.stringify(defaultAdmin));
      setUser(defaultAdmin);
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Memuat profil...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-3xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 tracking-wide">
          Profil {user.role}
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff&size=128`}
            alt="Foto Profil"
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          <div className="mt-2 inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            <Shield className="inline-block w-4 h-4 mr-1" /> {user.role}
          </div>
        </div>

        <hr className="mb-6 border-gray-300" />

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <UserCircle className="text-blue-500 w-6 h-6" />
            <div>
              <label className="text-sm text-gray-500">Nama</label>
              <p className="text-lg font-semibold text-gray-800">{user.name}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="text-blue-500 w-6 h-6" />
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <p className="text-lg font-semibold text-gray-800">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tombol reset untuk debugging */}
      {/* <button
        onClick={() => {
          const defaultAdmin = {
            name: "Admin",
            email: "admin@gemink.com",
            role: "admin",
          };
          localStorage.setItem("user", JSON.stringify(defaultAdmin));
          location.reload();
        }}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Reset ke Admin
      </button> */}
    </div>
  );
};

export default ProfilPage;
