import { model, models, Schema } from "mongoose";
import { IOpening, TSan } from "./types/game.types";

const REGEX_ECO = new RegExp(/^[A-E][0-9][0-9]$/);

const openingSchema = new Schema<IOpening>(
  {
    eco: { type: String, immutable: true, required: true, match: REGEX_ECO },
    fen: { type: String, immutable: true, required: true, unique: true },
    moves: { type: Array<TSan>, immutable: true, required: true },
    name: { type: String, immutable: true, required: true },
  },
  { timestamps: true }
);

export const Opening =
  models.Opening || model<IOpening>("Opening", openingSchema);
