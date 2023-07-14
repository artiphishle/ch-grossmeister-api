import { model, models, Schema } from "mongoose";
import { EGameTermination, type IGame } from "./types/game.types";

const gameSchema = new Schema<IGame>(
  {
    fen: { type: String, required: true, trim: true },
    event: { type: String, required: true, trim: true },
    site: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    round: { type: String, required: true },
    black: { type: String, required: true },
    white: { type: String, required: true },
    result: { type: String, required: true, default: EGameTermination.Running },
  },
  { timestamps: true }
);

// TODO why isn't this not enough, have to new Game<IGame>() instead of new Game() to get types
export default models.Game || model("Game", gameSchema);
