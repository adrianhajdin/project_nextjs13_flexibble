import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = '8Re/kZd3408E37s+qEw40V7sY9VFhx2t/boPS3VEV9A=';
// const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret, raw: true });

  return NextResponse.json({ token }, { status: 200 });
} 