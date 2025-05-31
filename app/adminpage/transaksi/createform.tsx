"use client";
import { useState } from "react";
import { ActionButton } from "./actionbutton";

interface FormProps {
  onCreated: () => void;
  onClose: () => void;
}

export function CreateForm({ onCreated, onClose }: FormProps) {
  const [form, setForm] = useState({
    date: "",
    total: "",
    customer: "",
    items: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/pagetransaksi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      onCreated();
      onClose();
    } else {
      alert("Gagal menambahkan data!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Tambah Transaksi</h2>
      <div className="space-y-3">
        <input
          name="date"
          type="date"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="total"
          type="text"
          placeholder="Total"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="customer"
          type="text"
          placeholder="Nama Pelanggan"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="items"
          type="text"
          placeholder="Item"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <div className="flex gap-3">
          <ActionButton type="submit" onClick={() => {}}>
            Simpan
          </ActionButton>
          <ActionButton variant="delete" onClick={onClose}>
            Batal
          </ActionButton>
        </div>
      </div>
    </form>
  );
}
