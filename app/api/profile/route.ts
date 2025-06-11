// app/api/profile/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email tidak disediakan" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      name: true,
      email: true,
      role: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json(user);
}
