import { NextResponse } from "next/server";

export function GET(req: Request) {
  try {
    return NextResponse.json({ message: "Surprise" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
}
