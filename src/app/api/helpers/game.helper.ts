import { isValidObjectId, models } from "mongoose";

import "../mongoose.helper";
// import Game from "@/app/models/game";
const Game = models.Game;

import { EGameTermination, type IGame } from "@/app/models/types/game.types";

import { ERR_INVALID_ID } from "../errors";
import { mockUser } from "./user.helper";

// TODO not here
const FEN_INIT = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

/**
 * Creates a new game
 */
async function createOne() {
  const game = new Game<IGame>({
    fen: FEN_INIT,
    event: "Testing",
    site: "https://grossmeister.ch",
    date: new Date(),
    round: "1",
    black: "Engine",
    white: mockUser.id,
    result: EGameTermination.Running,
    moves: [],
  });

  try {
    const response = await game.save();
    return { error: null, response };
  } catch (error: any) {
    return { error: error.message };
  }
}

/**
 * Finds a game by its id
 */
async function readOne(gameId: string) {
  if (!isValidObjectId(gameId)) return { error: ERR_INVALID_ID };

  try {
    return { error: null, response: await Game.findOne({ _id: gameId }) };
  } catch (error: any) {
    return { error: error.message };
  }
}

/**
 * Updates a game by its id
 */
async function updateOne(gameId: string, data: Partial<IGame>) {
  // TODO check if data contains invalid fields
  if (!isValidObjectId(gameId)) return { error: ERR_INVALID_ID };

  try {
    const response = await Game.updateOne(
      { _id: gameId },
      { ...data },
      { returnOriginal: false }
    );
    return { error: null, response };
  } catch (error: any) {
    return { error: error.message };
  }
}

/**
 * Deletes a game by its id
 */
async function deleteOne(gameId: string) {
  if (!isValidObjectId(gameId)) return { error: ERR_INVALID_ID };

  try {
    return { error: null, response: await Game.findByIdAndDelete(gameId) };
  } catch (error: any) {
    return { error: error.message };
  }
}

export { createOne, readOne, updateOne, deleteOne };
