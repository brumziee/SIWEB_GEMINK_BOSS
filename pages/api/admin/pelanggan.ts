import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const pelanggan = await prisma.pelanggan.findMany();
      res.status(200).json(pelanggan);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Terjadi kesalahan saat mengambil data pelanggan" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
