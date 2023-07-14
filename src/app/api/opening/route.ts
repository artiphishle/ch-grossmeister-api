import { BOOK } from "@/app/api/opening/book";
import { NextResponse } from "next/server";

/**
 * Find all root openings (no parent)
 */
export async function GET() {
  return NextResponse.json(BOOK.filter((opening) => opening.parent));
}
