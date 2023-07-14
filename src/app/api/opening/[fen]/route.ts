import { NextRequest, NextResponse } from "next/server";
import { BOOK } from "../book";

/**
 * Find opening by encodeURLComponent(FEN)
 */
export async function GET(_: NextRequest, { params }: IOpeningGetQuery) {
  const { fen } = params;
  const opening = BOOK.find((o) => o.fen === decodeURIComponent(fen));

  if (!opening) return NextResponse.error();

  return NextResponse.json(opening);
}

interface IOpeningGetQuery {
  params: { fen: string };
}
