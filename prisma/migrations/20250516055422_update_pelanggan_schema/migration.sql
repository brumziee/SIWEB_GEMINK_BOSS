/*
  Warnings:

  - The primary key for the `Pelanggan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `alamat` on the `Pelanggan` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Pelanggan` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Pelanggan` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `Pelanggan` table. All the data in the column will be lost.
  - The primary key for the `Produk` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Produk` table. All the data in the column will be lost.
  - The primary key for the `Transaksi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Transaksi` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal` on the `Transaksi` table. All the data in the column will be lost.
  - Added the required column `alamat_pelanggan` to the `Pelanggan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_pelanggan` to the `Pelanggan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_pelanggan` to the `Pelanggan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `umur_pelanggan` to the `Pelanggan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategori` to the `Produk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_transaksi` to the `Transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaksi" DROP CONSTRAINT "Transaksi_id_pelanggan_fkey";

-- DropForeignKey
ALTER TABLE "Transaksi" DROP CONSTRAINT "Transaksi_id_produk_fkey";

-- DropIndex
DROP INDEX "Pelanggan_email_key";

-- AlterTable
ALTER TABLE "Pelanggan" DROP CONSTRAINT "Pelanggan_pkey",
DROP COLUMN "alamat",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "nama",
ADD COLUMN     "alamat_pelanggan" TEXT NOT NULL,
ADD COLUMN     "email_pelanggan" TEXT NOT NULL,
ADD COLUMN     "id_pelanggan" SERIAL NOT NULL,
ADD COLUMN     "nama_pelanggan" TEXT NOT NULL,
ADD COLUMN     "umur_pelanggan" INTEGER NOT NULL,
ADD CONSTRAINT "Pelanggan_pkey" PRIMARY KEY ("id_pelanggan");

-- AlterTable
ALTER TABLE "Produk" DROP CONSTRAINT "Produk_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_produk" SERIAL NOT NULL,
ADD COLUMN     "kategori" TEXT NOT NULL,
ADD CONSTRAINT "Produk_pkey" PRIMARY KEY ("id_produk");

-- AlterTable
ALTER TABLE "Transaksi" DROP CONSTRAINT "Transaksi_pkey",
DROP COLUMN "id",
DROP COLUMN "tanggal",
ADD COLUMN     "id_transaksi" SERIAL NOT NULL,
ADD COLUMN     "tanggal_transaksi" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Transaksi_pkey" PRIMARY KEY ("id_transaksi");

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_id_produk_fkey" FOREIGN KEY ("id_produk") REFERENCES "Produk"("id_produk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_id_pelanggan_fkey" FOREIGN KEY ("id_pelanggan") REFERENCES "Pelanggan"("id_pelanggan") ON DELETE RESTRICT ON UPDATE CASCADE;
