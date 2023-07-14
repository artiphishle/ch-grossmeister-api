import type { TUserId } from "../user.types";

// TODO copy from legacy repo 'chess'
type TSan = string;

interface IMove {
  from: Readonly<number>;
  to: Readonly<number>;
}
interface IGame {
  fen: Readonly<string>;

  event: Readonly<string>;
  site: Readonly<string>;
  date: Readonly<Date | "??">;
  round: Readonly<string>;
  black: Readonly<TUserId>;
  white: Readonly<TUserId>;
  result: Readonly<EGameTermination>;

  moves: Readonly<TSan[]>;
}

enum EGameTermination {
  Abandoned = "Abandoned",
  Adjudication = "Adjudication",
  Death = "Death",
  Emergency = "Emergency",
  Normal = "Normal",
  RulesInfraction = "Rules Infraction",
  TimeForfeit = "Time Forfeit",
  Unterminated = "Unterminated",

  Running = "*",
}

interface IOpening extends Pick<IGame, "fen" | "moves"> {
  eco: Readonly<string>;
  name: Readonly<string>;

  // TODO replace with gameId's when in db
  origins?: Readonly<IOpening[]>;
}

export { EGameTermination };
export type { TSan };
export type { IOpening, IGame, IMove };
