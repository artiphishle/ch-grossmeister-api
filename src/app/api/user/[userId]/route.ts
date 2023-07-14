import { NextResponse } from "next/server";
import { readOne } from "../../helpers/game.helper";

export async function GET({ params }: IUserGetQuery) {
  const { userId } = params;
  const { error, response } = await readOne(userId);
  return error ? NextResponse.error() : NextResponse.json(response);
}

interface IUserGetQuery {
  params: { userId: string };
}
