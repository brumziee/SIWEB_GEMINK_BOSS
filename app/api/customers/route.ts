// app/api/customers/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '../../../prisma/prisma';

export async function GET() {
  try {
    const customers = await prisma.pelanggan.findMany();
    return NextResponse.json(customers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching customers' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const customer = await prisma.pelanggan.create({
      data: {
        nama_pelanggan: body.nama_pelanggan,
        umur_pelanggan: Number(body.umur_pelanggan),
        alamat_pelanggan: body.alamat_pelanggan,
        email_pelanggan: body.email_pelanggan,
      },
    });
    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating customer' }, { status: 500 });
  }
}

