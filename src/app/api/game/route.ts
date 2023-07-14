/**
 * TODO API requires authentication
 *
 * for now let's imagine there is only one user,
 * and everyone interacting with this api is this user.
 */
import { NextResponse } from "next/server";
import { createOne } from "../helpers/game.helper";

/**
 * Create a new game
 */
export async function POST() {
  const { error, response } = await createOne();
  console.log("error", error);
  console.log("response", response);
  return error ? NextResponse.error() : NextResponse.json(response);
}
