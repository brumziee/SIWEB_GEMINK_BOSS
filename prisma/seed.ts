#!/usr/bin/env ts-node-esm

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Hapus data lama dulu agar seed bisa diulang tanpa error
  await prisma.transaksi.deleteMany()
  await prisma.produk.deleteMany()
  await prisma.pelanggan.deleteMany()

  // Buat data pelanggan
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const pelanggan1 = await prisma.pelanggan.create({
    data: {
      nama_pelanggan: 'Andi',
      umur_pelanggan: 25,
      alamat_pelanggan: 'Jl. Merdeka No.10',
      email_pelanggan: 'andi@gmail.com',
    },
  })
  const pelanggan2 = await prisma.pelanggan.create({
    data: {
      nama_pelanggan: 'Budi',
      umur_pelanggan: 30,
      alamat_pelanggan: 'Jl. Sudirman No.5',
      email_pelanggan: 'budi@gmail.com',
    },
  })
  const pelanggan3 = await prisma.pelanggan.create({
    data: {
      nama_pelanggan: 'Citra',
      umur_pelanggan: 22,
      alamat_pelanggan: 'Jl. Gatot Subroto No.3',
      email_pelanggan: 'citra@yahoo.com',
    },
  })
  const pelanggan4 = await prisma.pelanggan.create({
    data: {
      nama_pelanggan: 'Dina',
      umur_pelanggan: 28,
      alamat_pelanggan: 'Jl. Thamrin No.8',
      email_pelanggan: 'dina@mail.com',
    },
  })
  const pelanggan5 = await prisma.pelanggan.create({
    data: {
      nama_pelanggan: 'Eko',
      umur_pelanggan: 35,
      alamat_pelanggan: 'Jl. Diponegoro No.15',
      email_pelanggan: 'eko@gmail.com',
    },
  })

  // Buat data produk
  const produk1 = await prisma.produk.create({
    data: {
      nama_produk: 'Laptop Lenovo IdeaPad',
      harga: 9000000,
      stok: 7,
      foto: '/images/lenovo.jpg',
      deskripsi: 'Laptop ringan dan cepat untuk pekerjaan kantor',
      kategori: 'laptop',
    },
  })
  const produk2 = await prisma.produk.create({
    data: {
      nama_produk: 'Keyboard Logitech K380',
      harga: 450000,
      stok: 10,
      foto: '/images/logitech.jpg',
      deskripsi: 'Keyboard Bluetooth portable dan stylish',
      kategori: 'keyboard',
    },
  })
  const produk3 = await prisma.produk.create({
    data: {
      nama_produk: 'Mouse Razer Viper Mini',
      harga: 500000,
      stok: 12,
      foto: '/images/razer.jpg',
      deskripsi: 'Mouse gaming dengan sensor presisi tinggi',
      kategori: 'mouse',
    },
  })
  const produk4 = await prisma.produk.create({
    data: {
      nama_produk: 'Laptop ASUS Vivobook',
      harga: 11000000,
      stok: 5,
      foto: '/images/asus.jpg',
      deskripsi: 'Laptop dengan layar OLED dan performa tinggi',
      kategori: 'laptop',
    },
  })
  const produk5 = await prisma.produk.create({
    data: {
      nama_produk: 'Keyboard Mechanical ROG',
      harga: 320000,
      stok: 20,
      foto: '/images/rog.jpg',
      deskripsi: 'Keyboard mechanical murah berkualitas',
      kategori: 'keyboard',
    },
  })

  // Buat data transaksi dengan relasi ke produk dan pelanggan
  await prisma.transaksi.create({
    data: {
      id_produk: produk1.id_produk,
      id_pelanggan: pelanggan1.id_pelanggan,
      tanggal_transaksi: new Date('2025-05-01'),
      total_harga: 9000000,
    },
  })
  await prisma.transaksi.create({
    data: {
      id_produk: produk2.id_produk,
      id_pelanggan: pelanggan2.id_pelanggan,
      tanggal_transaksi: new Date('2025-05-02'),
      total_harga: 450000,
    },
  })
  await prisma.transaksi.create({
    data: {
      id_produk: produk3.id_produk,
      id_pelanggan: pelanggan3.id_pelanggan,
      tanggal_transaksi: new Date('2025-05-03'),
      total_harga: 500000,
    },
  })
  await prisma.transaksi.create({
    data: {
      id_produk: produk4.id_produk,
      id_pelanggan: pelanggan4.id_pelanggan,
      tanggal_transaksi: new Date('2025-05-04'),
      total_harga: 11000000,
    },
  })
  await prisma.transaksi.create({
    data: {
      id_produk: produk5.id_produk,
      id_pelanggan: pelanggan5.id_pelanggan,
      tanggal_transaksi: new Date('2025-05-05'),
      total_harga: 320000,
    },
  })

  console.log('✅ Data berhasil di-seed!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
