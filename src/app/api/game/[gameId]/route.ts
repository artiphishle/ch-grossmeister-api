import { NextRequest, NextResponse } from "next/server";

import dotenv from "dotenv";
dotenv.config();

import { deleteOne, readOne, updateOne } from "../../helpers/game.helper";

/**
 * Return existing game
 */
export async function GET(_: NextRequest, { params }: IGameGetQuery) {
  const { gameId } = params;
  const { error, response } = await readOne(gameId);
  return error ? NextResponse.error() : NextResponse.json(response);
}

/**
 * Update an existing game
 */
export async function PATCH(req: NextRequest, { params }: IGamePutQuery) {
  const { gameId } = params;
  const data = await req.json();
  const { error, response } = await updateOne(gameId, data);
  return error ? NextResponse.error() : NextResponse.json(response);
}

/**
 * Delete an existing game
 */
export async function DELETE(_: NextRequest, { params }: IGameDeleteQuery) {
  const { gameId } = params;
  const { error, response } = await deleteOne(gameId);
  return error ? NextResponse.error() : NextResponse.json(response);
}

interface IGameGetQuery {
  params: { gameId: string };
}
interface IGamePutQuery extends IGameGetQuery {}
interface IGameDeleteQuery extends IGameGetQuery {}
