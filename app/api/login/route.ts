import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, password } = await req.json();

    // Validasi input
    if (!name || !password) {
      return NextResponse.json({ error: "Nama dan password wajib diisi" }, { status: 400 });
    }

    // Cari user berdasarkan nama
    const user = await prisma.user.findFirst({
      where: { name },
    });

    if (!user) {
      return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
    }

    // Bandingkan password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }

    // Buang password sebelum mengirim ke frontend
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      message: "Login berhasil",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat login" },
      { status: 500 }
    );
  }
}
