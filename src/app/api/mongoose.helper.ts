/**
 * TODO connect/disconnect query based?
 */

import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "";
if (!MONGODB_URI) {
  console.error("missing MONGODB_URI in .env file");
  process.exit(1);
}

import mongoose from "mongoose";
mongoose.connect(MONGODB_URI);

import "../models/opening";
import "../models/game";
