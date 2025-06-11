import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

// Buat instance Prisma di luar handler untuk menghindari banyak koneksi
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Validasi input lebih ketat
    if (!name || !name.trim()) {
      return NextResponse.json(
        { message: "Nama harus diisi" },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { message: "Email tidak valid" },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { message: "Password harus minimal 6 karakter" },
        { status: 400 }
      );
    }

    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }, // Gunakan lowercase untuk konsistensi
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email sudah terdaftar" },
        { status: 409 } // 409 Conflict lebih tepat untuk resource yang sudah ada
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(), // Simpan email dalam lowercase
        password: hashedPassword,
      },
    });

    // Jangan kembalikan password yang dihash
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({
      success: true,
      message: "Registrasi berhasil",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Register error:", error);
    
    // Berikan pesan error yang lebih spesifik
    let errorMessage = "Terjadi kesalahan server";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { 
        success: false,
        message: errorMessage 
      },
      { status: 500 }
    );
  } finally {
    // Pastikan koneksi Prisma ditutup
    await prisma.$disconnect();
  }
}