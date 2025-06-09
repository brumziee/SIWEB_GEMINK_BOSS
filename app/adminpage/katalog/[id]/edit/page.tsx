// app/adminpage/katalog/[id]/edit/page.tsx
export const dynamic = 'force-dynamic';

import EditProdukForm from '@/app/ui/adminpage/katalog/editproduk';
import prisma from '@/app/lib/prisma';
import { notFound } from 'next/navigation';

type Params = {
  id: string;
};

export default async function EditProdukPage(props: { params: Promise<Params> }) {
  const params = await props.params;  // <- tunggu promise selesai
  const id = parseInt(params.id);

  if (isNaN(id)) return notFound();

  const produk = await prisma.produk.findUnique({
    where: { id_produk: id },
  });

  if (!produk) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Produk</h1>
      <EditProdukForm product={produk} />
    </main>
  );
}
