import prisma from './prisma';

export async function deleteCustomer(id: number) {
  try {
    // Hapus transaksi terkait dulu (jika belum ada cascade delete)
    await prisma.transaksi.deleteMany({
      where: { id_pelanggan: id },
    });

    // Hapus pelanggan
    const deletedCustomer = await prisma.pelanggan.delete({
      where: { id_pelanggan: id },
    });

    // Perbarui ID pelanggan yang lebih tinggi agar terurut
    // Menggunakan raw query dengan hati-hati, pastikan tidak merusak integritas data
    await prisma.$queryRaw`
      UPDATE public.Pelanggan
      SET id_pelanggan = id_pelanggan - 1
      WHERE id_pelanggan > ${id}
    `;

    // Menampilkan pelanggan yang dihapus (opsional)
    console.log('Pelanggan yang dihapus:', deletedCustomer);
  } catch (error) {
    console.error('Error saat menghapus pelanggan:', error);
    throw new Error('Gagal menghapus pelanggan');
  }
}
