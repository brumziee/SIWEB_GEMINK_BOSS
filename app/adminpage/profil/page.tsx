"use client";

import React from "react";
import { Mail, Phone, UserCircle, Shield } from "lucide-react";

const ProfilPage = () => {
  const user = {
    nama: "Felix Christian",
    email: "felixchristian@gmail.com",
    role: "Admin",
    foto: "https://ui-avatars.com/api/?name=Felix+Christian&background=0D8ABC&color=fff&size=128",
    nomor: "082369126912",
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gradient-to-br from-[#e0eafc] to-[#cfdef3]">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-3xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 tracking-wide">Profil Admin</h1>

        {/* Foto Profil */}
        <div className="flex justify-center mb-6">
          <img
            src={user.foto}
            alt="Foto Profil"
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* Nama dan Role */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{user.nama}</h2>
          <div className="mt-2 inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            <Shield className="inline-block w-4 h-4 mr-1" /> {user.role}
          </div>
        </div>

        <hr className="mb-6 border-gray-300" />

        {/* Detail Informasi */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <UserCircle className="text-blue-500 w-6 h-6" />
            <div>
              <label className="text-sm text-gray-500">Nama</label>
              <p className="text-lg font-semibold text-gray-800">{user.nama}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="text-blue-500 w-6 h-6" />
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <p className="text-lg font-semibold text-gray-800">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="text-blue-500 w-6 h-6" />
            <div>
              <label className="text-sm text-gray-500">Nomor Handphone</label>
              <p className="text-lg font-semibold text-gray-800">{user.nomor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
