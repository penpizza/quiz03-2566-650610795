import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Penpicha Thongkham",
    studentId: "650610795",
  });
};
