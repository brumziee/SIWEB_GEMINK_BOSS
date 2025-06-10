"use client";

import React from "react";

const ProfilPage = () => {
  // Data pengguna (sementara statis/mock)
  const user = {
    nama: "Felix Christian",
    email: "felixchristian@gmail.com",
    role: "Admin",
    foto: "https://ui-avatars.com/api/?name=Felix+Christian&background=0D8ABC&color=fff&size=128",
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Profil Pengguna</h1>

      <div className="bg-white rounded-2xl shadow-md p-6 max-w-md border border-gray-200">
        {/* Foto Profil */}
        <div className="flex justify-center mb-6">
          <img
            src={user.foto}
            alt="Foto Profil"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-sm"
          />
        </div>

        {/* Info Pengguna */}
        <div className="mb-4">
          <label className="text-sm text-gray-500">Nama</label>
          <p className="text-lg font-semibold">{user.nama}</p>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-500">Email</label>
          <p className="text-lg font-semibold">{user.email}</p>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-500">Role</label>
          <p className="text-lg font-semibold">{user.role}</p>
        </div>

        {/* Tombol Logout */}
        <button
          onClick={() => alert("Logout berhasil (simulasi)")}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilPage;
