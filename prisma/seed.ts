import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const pelanggan1 = await prisma.pelanggan.create({
    data: {
      nama: 'Rendra',
      email: 'rendra@email.com',
      alamat: 'Jl. Pelajar 10',
    },
  });

  const produk1 = await prisma.produk.create({
    data: {
      nama_produk: 'Headset Gaming',
      harga: 750000,
      stok: 5,
      foto: '/images/headset.jpg',
      deskripsi: 'Headset surround sound',
    },
  });

  await prisma.transaksi.create({
    data: {
      id_produk: produk1.id,
      id_pelanggan: pelanggan1.id,
      total_harga: produk1.harga,
    },
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
