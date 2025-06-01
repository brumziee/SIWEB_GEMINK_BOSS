import prisma from './prisma';

export async function deleteCustomer(id: number) {
  // Hapus transaksi terkait dulu (jika belum ada cascade delete)
  await prisma.transaksi.deleteMany({
    where: { id_pelanggan: id },
  });

  // Hapus pelanggan
  await prisma.pelanggan.delete({
    where: { id_pelanggan: id },
  });
}
