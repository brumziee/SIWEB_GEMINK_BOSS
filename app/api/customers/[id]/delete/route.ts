import { NextRequest, NextResponse } from 'next/server';
import { deleteCustomer } from '@/app/lib/action';

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;  // <-- await dulu
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    await deleteCustomer(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ error: 'Failed to delete customer' }, { status: 500 });
  }
}
