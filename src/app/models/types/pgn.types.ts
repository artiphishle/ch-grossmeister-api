import { EGameTermination } from "./game.types";

type TPgnTag =
  | EPgnTag.Event
  | EPgnTag.Site
  | EPgnTag.Date
  | EPgnTag.Round
  | EPgnTag.White
  | EPgnTag.Black
  | EPgnTag.Result;

interface IPgnTags {
  Event: Readonly<string>; // Name of the tournament or match event
  Site: Readonly<string>; // Location of the event, e.g. New York City, NY USA
  Date: Readonly<string | "??">; // Starting date of the game, in YYYY.MM.DD (or ?? for unknown)
  Round: Readonly<string>; // Playing round ordinal of the game within the event
  White: Readonly<string>; // White player, e.g. 'Carlsen, Magnus'
  Black: Readonly<string>; // Black player
  Result: Readonly<"1-0" | "0-1" | "1/2-1/2" | "*">; // Result of the game (* for other/ongoing)
  Annotator?: Readonly<string>; // The person providing notes to the game
  PlyCount?: Readonly<string>; // Denoting the total number of half-moves played
  TimeControl?: Readonly<string>; // e.g. 40/7200:3600 (moves per second: sudden death seconds)
  Time?: Readonly<string>; // Time the game started, HH:MM:SS, local TZ
  Termination?: Readonly<EGameTermination>; // Details about termination
  Mode?: Readonly<"OTB|ICS">; // live or online
}

enum EPgnTag {
  Event = "Event",
  Site = "Site",
  Date = "Date",
  Round = "Round",
  Black = "Black",
  White = "White",
  Result = "Result",
}

/**
 * Constants
 */
const PGN_DEFAULT_TAGS: IPgnTags = {
  Event: "",
  Site: "",
  Date: "??",
  Round: "",
  White: "",
  Black: "",
  Result: "*",
};

export { EPgnTag };
export type { IPgnTags, TPgnTag };
