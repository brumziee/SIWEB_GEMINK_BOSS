import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Validasi input
    if (!name || !name.trim()) {
      return NextResponse.json({ message: "Nama wajib diisi" }, { status: 400 });
    }

    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email || !emailPattern.test(email)) {
      return NextResponse.json({ message: "Format email tidak valid" }, { status: 400 });
    }

    if (!password || password.length < 6) {
      return NextResponse.json({ message: "Password minimal 6 karakter" }, { status: 400 });
    }

    // Cek apakah email sudah digunakan
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email sudah terdaftar" }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru ke database
    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        role: "user", // Default role
      },
    });

    // Hapus password sebelum mengirim response
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({
      success: true,
      message: "Registrasi berhasil",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan saat registrasi",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
