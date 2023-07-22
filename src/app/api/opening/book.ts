import type { TSan } from "@/app/models/types/game.types";

enum EEco {
  A00 = "A00",
  A01 = "A01", // b3
  A02 = "A02", // f4
  A04 = "A04", // Nf3
  A10 = "A10", // c4
  A40 = "A40", // d4

  B00 = "B00", // e4
  B20 = "B20", // e4 ..c5
  B27 = "B27", // e4 ..c5 Nf3

  C20 = "C20", // e4 ..e5
  C40 = "C40", // e4 ..e5 Nf3
  C42 = "C42", // e4 ..e5 Nf3 ..Nf6
  C44 = "C44", // e4 ..e5 Nf3 ..Nc6 / ... d4
  C45 = "C45", // e4 ..e5 Nfr ..Nc6 d4 ..exd4 Nxd4
  C50 = "C50", // e4 ..e5 Nf3 ..Nc6 Bc4
  C53 = "C53", // e4 ..e5 Nf3 ..Nc6 Bc4 ..Bc5 c3
  C60 = "C60", // e4 ..e5 Nf3 ..Nc6 Bb5
  C65 = "C65", // e4 ..e5 Nf3 ..Nc6 Bb5 ..Nf6
  C70 = "C70", // e4 ..e5 Nf3 ..Nc6 Bb5 ..a6
}

enum EName {
  _NewGame = "New game",

  A00__Amar_Opening = "Amar Opening",
  A00__Anderssens_Opening = "Anderssen's Opening",
  A00__Barnes_Opening = "Barnes Opening",
  A00__Clemenz_Opening = "Clemenz Opening",
  A00__Grob_Opening = "Grob Opening",
  A00__Hungarian_Opening = "Hungarian Opening",
  A00__Kadas_Opening = "Kadas Opening", // TODO accent auf erstem 'a'
  A00__Mieses_Opening = "Mieses Opening",
  A00__Polish_Opening = "Polish Opening",
  A00__Saragossa_Opening = "Saragossa Opening",
  A00__Sodium_Attack = "Sodium Attack",
  A00__Van_Geet_Opening = "Van Geet Opening",
  A00__Vant_Kruijs_Opening = "Van't Kruij's Opening",
  A00__Ware_Opening = "Ware Opening",
  A01__Nimzo_Larsen_Attack = "Nimzo-Larsen Attack",
  A02__Bird_Opening = "Bird Opening",
  A04__Zukertort_Opening = "Zukertort Opening",
  A10__English_Opening = "English Opening",
  A40__Queens_Pawn_Game = "Queen's Pawn Game",

  B00__Kings_Pawn_Game = "King's Pawn Game",
  B20__Sicilian_Defense = "Sicilian Defense",
  B20__Sicilian_Defense__Wing_Gambit = "Sicilian Defense: Wing Gambit",
  B20__Sicilian_Defense__Wing_Gambit__Marshall_Variation = "Sicilian Defense: Wing Gambit, Marshall Variation",
  B20__Sicilian_Defense__Wing_Gambit__Marienbad_Variation = "Sicilian Defense: Wing Gambit, Marienbad Variation",
  B20__Sicilian_Defense__Wing_Gambit__Romanian_Defense = "Sicilian Defense: Wing Gambit, Romanian Defense",
  B27__Sicilian_Defense = "Sicilian Defense",

  C20__Kings_Pawn_Game = "King's Pawn Game",
  C40__Kings_Knight_Opening = "King's Knight Opening",
  C42__Russian_Game = "Russian Game", // TODO how to handle aliases? Here: 'Petrov'
  C44__Kings_Knight_Opening__Normal_Variation = "King's Knight Opening: Normal Variation",
  C44__Scotch_Game = "Scotch Game",
  C44__Scotch_Game__Lolli_Variation = "Scotch Game: Lolli Variation",
  C45__Scotch_Game = "Scotch Game",
  C45__Scotch_Game__Schmidt_Variation = "Scotch Game: Schmidt Variation",
  C45__Scotch_Game__Classical_Variation = "Scotch Game: Classical Variation",
  C45__Scotch_Game__Malaniuk_Variation = "Scotch Game: Malaniuk Variation",
  C50__Italian_Game = "Italian Game",
  C50__Italian_Game__Giuoco_Piano = "Italian Game: Giuoco Piano",
  C53__Italian_Game__Classical_Variation = "Italian Game: Classical_Variation",
  C60__Ruy_Lopez = "Ruy Lopez",
  C65__Ruy_Lopez__Berlin_Defense = "Ruy Lopez: Berlin Defense",
  C70__Ruy_Lopez__Morphy_Defense = "Ruy Lopez: Morphy Defense",
  C70__Ruy_Lopez__Morphy_Defense__Caro_Variation = "Ruy Lopez: Morphy Defense, Caro Variation",
  C70__Ruy_Lopez__Morphy_Defense__Cozio_Defense = "Ruy Lopez: Morphy Defense, Cozio Defense",
  C70__Ruy_Lopez__Morphy_Defense__Norwegian_Variation = "Ruy Lopez: Morphy Defense, Norwegian Variation",
}

enum EFen {
  _NewGame = "rnbqkkbnr/pppppppp/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0",

  A00__Amar_Opening = "rnbqkbnr/pppppppp/8/8/8/7N/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
  A00__Anderssens_Opening = "rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR b KQkq - 0 1",
  A00__Barnes_Opening = "rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
  A00__Clemenz_Opening = "rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq - 0 1",
  A00__Grob_Opening = "rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq - 0 1",
  A00__Hungarian_Opening = "rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq - 0 1",
  A00__Kadas_Opening = "rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP1/RNBQKBNR b KQkq - 0 1",
  A00__Mieses_Opening = "rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
  A00__Polish_Opening = "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
  A00__Saragossa_Opening = "rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
  A00__Sodium_Attack = "rnbqkbnr/pppppppp/8/8/8/N7/PPPPPPPP/R1BQKBNR b KQkq - 1 1",
  A00__Van_Geet_Opening = "rnbqkbnr/pppppppp/8/8/8/8/2N5/R1BQKBNR b KQkq - 1 1",
  A00__Vant_Kruijs_Opening = "rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
  A00__Ware_Opening = "rnbqkbnr/pppppppp/8/8/P7/8/1PPPPPPP/RNBQKBNR b KQkq - 0 1",
  A01__Nimzo_Larsen_Attack = "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
  A02__Bird_Opening = "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
  A04__Zukertort_Opening = "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 0 1",
  A10__English_Opening = "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 1 1",
  A40__Queens_Pawn_Game = "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",

  B00__Kings_Pawn_Game = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
  B20__Sicilian_Defense = "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
  B20__Sicilian_Defense__Wing_Gambit = "rnbqkbnr/pp1ppppp/8/2p5/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
  B20__Sicilian_Defense__Wing_Gambit__Marshall_Variation = "",
  B20__Sicilian_Defense__Wing_Gambit__Marienbad_Variation = "",
  B20__Sicilian_Defense__Wing_Gambit__Romanian_Defense = "",
  B27__Sicilian_Defense = "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",

  C20__Kings_Pawn_Game = "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
  C40__Kings_Knight_Opening = "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 3",
  C42__Russian_Game = "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 4",
  C44__Kings_Knight_Opening__Normal_Variation = "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 4",
  C44__Scotch_Game = "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
  C44__Scotch_Game__Lolli_Variation = "r1bqkbnr/pppp1ppp/8/4p3/3nP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
  C45__Scotch_Game = "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
  C45__Scotch_Game__Schmidt_Variation = "r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
  C45__Scotch_Game__Classical_Variation = "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
  C45__Scotch_Game__Malaniuk_Variation = "r1bqk1nr/pppp1ppp/2n5/8/1b1NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
  C50__Italian_Game = "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
  C50__Italian_Game__Giuoco_Piano = "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
  C53__Italian_Game__Classical_Variation = "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
  C60__Ruy_Lopez = "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
  C65__Ruy_Lopez__Berlin_Defense = "r1bqkb1r/pp1ppppp/2n2n2/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
  C70__Ruy_Lopez__Morphy_Defense = "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
  C70__Ruy_Lopez__Morphy_Defense__Caro_Variation = "r1bqkbnr/2pp1ppp/p1n5/1p2p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
  C70__Ruy_Lopez__Morphy_Defense__Cozio_Defense = "r1bqkb1r/1pppnppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
  C70__Ruy_Lopez__Morphy_Defense__Norwegian_Variation = "r1bqkbnr/2pp1ppp/p7/np2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq - 2 6",
}

/* TRANSPOSITION TABLE */

type TTT = { [k: string]: EName };

const transpositionTable: TTT = {
  [EFen._NewGame]: EName._NewGame,

  [EFen.A00__Amar_Opening]: EName.A00__Amar_Opening,
  [EFen.A00__Anderssens_Opening]: EName.A00__Anderssens_Opening,
  [EFen.A00__Barnes_Opening]: EName.A00__Barnes_Opening,
  [EFen.A00__Clemenz_Opening]: EName.A00__Clemenz_Opening,
  [EFen.A00__Grob_Opening]: EName.A00__Grob_Opening,
  [EFen.A00__Hungarian_Opening]: EName.A00__Hungarian_Opening,
  [EFen.A00__Kadas_Opening]: EName.A00__Kadas_Opening,
  [EFen.A00__Mieses_Opening]: EName.A00__Mieses_Opening,
  [EFen.A00__Polish_Opening]: EName.A00__Polish_Opening,
  [EFen.A00__Saragossa_Opening]: EName.A00__Saragossa_Opening, // double not detected?
  [EFen.A00__Vant_Kruijs_Opening]: EName.A00__Vant_Kruijs_Opening,
  [EFen.A00__Ware_Opening]: EName.A00__Ware_Opening,

  [EFen.A01__Nimzo_Larsen_Attack]: EName.A01__Nimzo_Larsen_Attack,
  [EFen.A02__Bird_Opening]: EName.A02__Bird_Opening,
  [EFen.A10__English_Opening]: EName.A10__English_Opening,
  [EFen.A40__Queens_Pawn_Game]: EName.A40__Queens_Pawn_Game,

  [EFen.B00__Kings_Pawn_Game]: EName.B00__Kings_Pawn_Game,
  [EFen.B20__Sicilian_Defense]: EName.B20__Sicilian_Defense,
  [EFen.B20__Sicilian_Defense__Wing_Gambit]:
    EName.B20__Sicilian_Defense__Wing_Gambit,
  [EFen.B20__Sicilian_Defense__Wing_Gambit__Marshall_Variation]:
    EName.B20__Sicilian_Defense__Wing_Gambit__Marshall_Variation,
  [EFen.B20__Sicilian_Defense__Wing_Gambit__Marienbad_Variation]:
    EName.B20__Sicilian_Defense__Wing_Gambit__Marienbad_Variation,
  [EFen.B20__Sicilian_Defense__Wing_Gambit__Romanian_Defense]:
    EName.B20__Sicilian_Defense__Wing_Gambit__Romanian_Defense,
  [EFen.B27__Sicilian_Defense]: EName.B27__Sicilian_Defense,

  [EFen.C20__Kings_Pawn_Game]: EName.C20__Kings_Pawn_Game,
  [EFen.C40__Kings_Knight_Opening]: EName.C40__Kings_Knight_Opening,
  [EFen.C42__Russian_Game]: EName.C42__Russian_Game,
  [EFen.C44__Kings_Knight_Opening__Normal_Variation]:
    EName.C44__Kings_Knight_Opening__Normal_Variation,
  [EFen.C44__Scotch_Game]: EName.C44__Scotch_Game,
  [EFen.C44__Scotch_Game__Lolli_Variation]:
    EName.C44__Scotch_Game__Lolli_Variation,
  [EFen.C45__Scotch_Game]: EName.C45__Scotch_Game,
  [EFen.C45__Scotch_Game__Schmidt_Variation]:
    EName.C45__Scotch_Game__Schmidt_Variation,
  [EFen.C45__Scotch_Game__Classical_Variation]:
    EName.C45__Scotch_Game__Classical_Variation,
  [EFen.C45__Scotch_Game__Malaniuk_Variation]:
    EName.C45__Scotch_Game__Malaniuk_Variation,
  [EFen.C50__Italian_Game]: EName.C50__Italian_Game,
  [EFen.C50__Italian_Game__Giuoco_Piano]: EName.C50__Italian_Game__Giuoco_Piano,
  [EFen.C53__Italian_Game__Classical_Variation]:
    EName.C53__Italian_Game__Classical_Variation,
  [EFen.C60__Ruy_Lopez]: EName.C60__Ruy_Lopez,
  [EFen.C65__Ruy_Lopez__Berlin_Defense]: EName.C65__Ruy_Lopez__Berlin_Defense,
  [EFen.C70__Ruy_Lopez__Morphy_Defense]: EName.C70__Ruy_Lopez__Morphy_Defense,
  [EFen.C70__Ruy_Lopez__Morphy_Defense__Caro_Variation]:
    EName.C70__Ruy_Lopez__Morphy_Defense__Caro_Variation,
  [EFen.C70__Ruy_Lopez__Morphy_Defense__Cozio_Defense]:
    EName.C70__Ruy_Lopez__Morphy_Defense__Cozio_Defense,
  [EFen.C70__Ruy_Lopez__Morphy_Defense__Norwegian_Variation]:
    EName.C70__Ruy_Lopez__Morphy_Defense__Norwegian_Variation,
};

/* OPENING GROUPS */

const A00__AMAR_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Amar_Opening,
    name: EName.A00__Amar_Opening,
    moves: { played: ["Nh3"], possible: [] },
  },
];
const A00__ANDERSSEN_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Anderssens_Opening,
    name: EName.A00__Anderssens_Opening,
    moves: { played: ["a3"], possible: [] },
  },
];
const A00__BARNES_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Barnes_Opening,
    name: EName.A00__Barnes_Opening,
    moves: { played: ["f3"], possible: [] },
  },
];
const A00__CLEMENZ_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Clemenz_Opening,
    name: EName.A00__Clemenz_Opening,
    moves: { played: ["h3"], possible: [] },
  },
];
const A00__GROB_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Grob_Opening,
    name: EName.A00__Grob_Opening,
    moves: { played: ["g4"], possible: [] },
  },
];
const A00__HUNGARIAN_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Hungarian_Opening,
    name: EName.A00__Hungarian_Opening,
    moves: { played: ["g3"], possible: [] },
  },
];
const A00__KADAS_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Kadas_Opening,
    name: EName.A00__Kadas_Opening,
    moves: { played: ["h4"], possible: [] },
  },
];
const A00__MIESES_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Mieses_Opening,
    name: EName.A00__Mieses_Opening,
    moves: { played: ["d3"], possible: [] },
  },
];
const A00__POLISH_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Polish_Opening,
    name: EName.A00__Polish_Opening,
    moves: { played: ["b4"], possible: [] },
  },
];
const A00__SARAGOSSA_OPENING: IOpening[] = [
  {
    fen: EFen.A00__Saragossa_Opening,
    eco: EEco.A00,
    name: EName.A00__Saragossa_Opening,
    moves: { played: ["c3"], possible: [] },
  },
];
const A00__SODIUM_ATTACK: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Sodium_Attack,
    name: EName.A00__Sodium_Attack,
    moves: { played: ["Na3"], possible: [] },
  },
];
const A00__VAN_GEET_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Van_Geet_Opening,
    name: EName.A00__Van_Geet_Opening,
    moves: { played: ["Nc3"], possible: [] },
  },
];
const A00__VANT_KRUIJS_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Vant_Kruijs_Opening,
    name: EName.A00__Vant_Kruijs_Opening,
    moves: { played: ["e3"], possible: [] },
  },
];
const A00__WARE_OPENING: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Ware_Opening,
    name: EName.A00__Ware_Opening,
    moves: { played: ["a4"], possible: [] },
  },
];
const A01__NIMZO_LARSEN_ATTACK: IOpening[] = [
  {
    eco: EEco.A01,
    fen: EFen.A01__Nimzo_Larsen_Attack,
    name: EName.A01__Nimzo_Larsen_Attack,
    moves: { played: ["b3"], possible: [] },
  },
];
const A02__BIRD_OPENING: IOpening[] = [
  {
    eco: EEco.A02,
    fen: EFen.A02__Bird_Opening,
    name: EName.A02__Bird_Opening,
    moves: { played: ["f4"], possible: [] },
  },
];
const A04__ZUKERTORT_OPENING: IOpening[] = [
  {
    eco: EEco.A04,
    fen: EFen.A04__Zukertort_Opening,
    name: EName.A04__Zukertort_Opening,
    moves: { played: ["Nf3"], possible: [] },
  },
];
const A10__ENGLISH_OPENING: IOpening[] = [
  {
    eco: EEco.A10,
    fen: EFen.A10__English_Opening,
    name: EName.A10__English_Opening,
    moves: { played: ["c4"], possible: [] },
  },
];
const A40__QUEENS_PAWN_GAME: IOpening[] = [
  {
    eco: EEco.A40,
    fen: EFen.A40__Queens_Pawn_Game,
    name: EName.A40__Queens_Pawn_Game,
    moves: { played: ["d4"], possible: [] },
  },
];

const B00__KINGS_PAWN_GAME: IOpening[] = [
  {
    eco: EEco.B00,
    fen: EFen.B00__Kings_Pawn_Game,
    name: EName.B00__Kings_Pawn_Game,
    moves: { played: ["e4"], possible: [""] },
  },
];
const B20__SICILIAN_DEFENSE: IOpening[] = [
  {
    eco: EEco.B20,
    fen: EFen.B20__Sicilian_Defense,
    name: EName.B20__Sicilian_Defense,
    moves: { played: ["e4", "..c5"], possible: [""] },
  },
];
const B20__SICILIAN_DEFENSE__WING_GAMBIT: IOpening[] = [
  {
    eco: EEco.B20,
    fen: EFen.B20__Sicilian_Defense__Wing_Gambit,
    name: EName.B20__Sicilian_Defense__Wing_Gambit,
    moves: { played: ["e4", "..c5", "b4"], possible: [""] },
  },
];
const B20__SICILIAN_DEFENSE__WING_GAMBIT__MARSHALL_VARIATION: IOpening[] = [
  {
    eco: EEco.B20,
    fen: EFen.B20__Sicilian_Defense__Wing_Gambit__Marshall_Variation,
    name: EName.B20__Sicilian_Defense__Wing_Gambit__Marshall_Variation,
    moves: { played: ["e4", "..c5", "b4", "..cxb4", "a3"], possible: [""] },
  },
];
const B20__SICILIAN_DEFENSE__WING_GAMBIT__MARIENBAD_VARIATION: IOpening[] = [
  {
    eco: EEco.B20,
    fen: EFen.B20__Sicilian_Defense__Wing_Gambit__Marienbad_Variation,
    name: EName.B20__Sicilian_Defense__Wing_Gambit__Marienbad_Variation,
    moves: {
      played: [
        "e4",
        "..c5",
        "b4",
        "..cxb4",
        "a3",
        "..d5",
        "exd5",
        "..Qxd5",
        "Bd2",
      ],
      possible: [""],
    },
  },
];
const B20__SICILIAN_DEFENSE__WING_GAMBIT__ROMANIAN_DEFENSE: IOpening[] = [
  {
    eco: EEco.B20,
    fen: EFen.B20__Sicilian_Defense__Wing_Gambit__Romanian_Defense,
    name: EName.B20__Sicilian_Defense__Wing_Gambit__Romanian_Defense,
    moves: {
      played: [
        "e4",
        "..c5",
        "b4",
        "..cxb4",
        "a3",
        "..d5",
        "exd5",
        "..Qxd5",
        "Bd2",
        "..e5",
        "Nf3",
        "..Nc6",
        "c4",
        "..Qe6",
      ],
      possible: [""],
    },
  },
];
const B27__SICILIAN_DEFENSE: IOpening[] = [
  {
    eco: EEco.B27,
    fen: EFen.B27__Sicilian_Defense,
    name: EName.B27__Sicilian_Defense,
    moves: { played: ["e4", "..c5", "Nf3"], possible: [""] },
  },
];

const C20__KINGS_PAWN_GAME: IOpening[] = [
  {
    eco: EEco.A00,
    fen: EFen.A00__Amar_Opening,
    name: EName.A00__Amar_Opening,
    moves: { played: ["e4", "..e5"], possible: [] },
  },
];
const C40__KINGS_KNIGHT_OPENING: IOpening[] = [
  {
    eco: EEco.C40,
    fen: EFen.C40__Kings_Knight_Opening,
    name: EName.C40__Kings_Knight_Opening,
    moves: { played: ["e4", "..e5", "Nf3"], possible: [] },
  },
];
const C42__RUSSIAN_GAME: IOpening[] = [
  {
    eco: EEco.C42,
    fen: EFen.C42__Russian_Game,
    name: EName.C42__Russian_Game,
    moves: { played: ["e4", "e5", "Nf3", "..Nf6"], possible: [] },
  },
];
const C44__KINGS_KNIGHT_OPENING__NORMAL_VARIATION: IOpening[] = [
  {
    eco: EEco.C44,
    fen: EFen.C44__Kings_Knight_Opening__Normal_Variation,
    name: EName.C44__Kings_Knight_Opening__Normal_Variation,
    moves: { played: ["e4", "..e5", "Nf3", "..Nc6"], possible: [] },
  },
];
const C44__SCOTCH_GAME: IOpening[] = [
  {
    eco: EEco.C44,
    fen: EFen.C44__Scotch_Game,
    name: EName.C44__Scotch_Game,
    moves: { played: ["e4", "..e5", "Nf3", "..Nc6", "d4"], possible: [] },
  },
];
const C44__SCOTCH_GAME__LOLLI_VARIATION: IOpening[] = [
  {
    eco: EEco.C44,
    fen: EFen.C44__Scotch_Game__Lolli_Variation,
    name: EName.C44__Scotch_Game__Lolli_Variation,
    moves: {
      played: ["e4", "..e5", "Nf3", "..Nc6", "d4", "..Nxd4"],
      possible: [],
    },
  },
];
const C45__SCOTCH_GAME: IOpening[] = [
  {
    eco: EEco.C45,
    fen: EFen.C45__Scotch_Game,
    name: EName.C45__Scotch_Game,
    moves: {
      played: ["e4", "..e5", "Nf3", "..Nc6", "d4", "..exd4", "Nxd4"],
      possible: [],
    },
  },
];
const C45__SCOTCH_GAME__SCHMIDT_VARIATION: IOpening[] = [
  {
    eco: EEco.C45,
    fen: EFen.C45__Scotch_Game__Schmidt_Variation,
    name: EName.C45__Scotch_Game__Schmidt_Variation,
    moves: {
      played: ["e4", "..e5", "Nf3", "..Nc6", "d4", "..exd4", "Nxd4", "..Nc6"],
      possible: [],
    },
  },
];
const C45__SCOTCH_GAME__CLASSICAL_VARIATION: IOpening[] = [
  {
    eco: EEco.C45,
    fen: EFen.C45__Scotch_Game__Classical_Variation,
    name: EName.C45__Scotch_Game__Classical_Variation,
    moves: {
      played: ["e4", "..e5", "Nf3", "..Nc6", "d4", "..exd4", "Nxd4", "..Bc5"],
      possible: [],
    },
  },
];
const C45__SCOTCH_GAME__MALANIUK_VARIATION: IOpening[] = [
  {
    eco: EEco.C45,
    fen: EFen.C45__Scotch_Game__Malaniuk_Variation,
    name: EName.C45__Scotch_Game__Malaniuk_Variation,
    moves: {
      played: ["e4", "..e5", "Nf3", "..Nc6", "d4", "..exd4", "Nxd4", "..Bb4+"],
      possible: [],
    },
  },
];
const C50__ITALIAN_GAME: IOpening[] = [
  {
    eco: EEco.C50,
    fen: EFen.C50__Italian_Game,
    name: EName.C50__Italian_Game,
    moves: { played: ["e4", "e5", "Nf3", "..Nc6", "Bc4"], possible: [] },
  },
];
const C50__ITALIAN_GAME__GIUOCO_PIANO: IOpening[] = [
  {
    eco: EEco.C50,
    fen: EFen.C50__Italian_Game__Giuoco_Piano,
    name: EName.C50__Italian_Game__Giuoco_Piano,
    moves: {
      played: ["e4", "e5", "Nf3", "..Nc6", "Bc4", "..Bc5"],
      possible: [],
    },
  },
];
const C53__ITALIAN_GAME__CLASSICAL_VARIATION: IOpening[] = [
  {
    eco: EEco.C53,
    fen: EFen.C53__Italian_Game__Classical_Variation,
    name: EName.C53__Italian_Game__Classical_Variation,
    moves: {
      played: ["e4", "e5", "Nf3", "..Nc6", "Bc4", "..Bc5", "c3"],
      possible: [],
    },
  },
];
const C60__RUY_LOPEZ: IOpening[] = [
  {
    eco: EEco.C60,
    fen: EFen.C60__Ruy_Lopez,
    name: EName.C60__Ruy_Lopez,
    moves: { played: ["e4", "..e5", "Nf3", "..Nc6", "Bb5"], possible: [] },
  },
];
const C65__RUY_LOPEZ__BERLIN_DEFENSE: IOpening[] = [
  {
    eco: EEco.C65,
    fen: EFen.C65__Ruy_Lopez__Berlin_Defense,
    name: EName.C65__Ruy_Lopez__Berlin_Defense,
    moves: {
      played: ["e4", "..e5", "Nf3", "..Nc6", "Bb5", "..Nf6"],
      possible: [],
    },
  },
];
const C70__RUY_LOPEZ__MORPHY_DEFENSE: IOpening[] = [
  {
    eco: EEco.C70,
    fen: EFen.C70__Ruy_Lopez__Morphy_Defense,
    name: EName.C70__Ruy_Lopez__Morphy_Defense,
    moves: {
      played: ["e4", "..e5", "Nf3", "..Nc6", "Bb5", "..a6"],
      possible: [],
    },
  },
];
const C70__RUY_LOPEZ__MORPHY_DEFENSE__CARO_VARIATION: IOpening[] = [
  {
    eco: EEco.C70,
    fen: EFen.C70__Ruy_Lopez__Morphy_Defense__Caro_Variation,
    name: EName.C70__Ruy_Lopez__Morphy_Defense__Caro_Variation,
    moves: {
      played: ["e4", "..e5", "Nf3", "..Nc6", "Bb5", "..a6", "Ba4", "..b5"],
      possible: [],
    },
  },
];
const C70__RUY_LOPEZ__MORPHY_DEFENSE__COZIO_DEFENSE: IOpening[] = [
  {
    eco: EEco.C70,
    fen: EFen.C70__Ruy_Lopez__Morphy_Defense__Cozio_Defense,
    name: EName.C70__Ruy_Lopez__Morphy_Defense__Cozio_Defense,
    moves: {
      played: ["e4", "..e5", "Nf3", "..Nc6", "Bb5", "..a6", "Ba4", "..Nge7"],
      possible: [],
    },
  },
];
const C70__RUY_LOPEZ__MORPHY_DEFENSE__NORWEGIAN_VARIATION: IOpening[] = [
  {
    eco: EEco.C70,
    fen: EFen.C70__Ruy_Lopez__Morphy_Defense__Norwegian_Variation,
    name: EName.C70__Ruy_Lopez__Morphy_Defense__Norwegian_Variation,
    moves: {
      played: [
        "e4",
        "..e5",
        "Nf3",
        "..Nc6",
        "Bb5",
        "..a6",
        "Ba4",
        "..b5",
        "Bb3",
        "..Na5",
      ],
      possible: [],
    },
  },
];

const BOOK: IOpening[] = [
  ...A00__AMAR_OPENING,
  ...A00__ANDERSSEN_OPENING,
  ...A00__BARNES_OPENING,
  ...A00__CLEMENZ_OPENING,
  ...A00__GROB_OPENING,
  ...A00__HUNGARIAN_OPENING,
  ...A00__KADAS_OPENING,
  ...A00__MIESES_OPENING,
  ...A00__POLISH_OPENING,
  ...A00__SARAGOSSA_OPENING,
  ...A00__SODIUM_ATTACK,
  ...A00__VAN_GEET_OPENING,
  ...A00__VANT_KRUIJS_OPENING,
  ...A00__WARE_OPENING,
  ...A01__NIMZO_LARSEN_ATTACK,
  ...A02__BIRD_OPENING,
  ...A04__ZUKERTORT_OPENING,
  ...A10__ENGLISH_OPENING,
  ...A40__QUEENS_PAWN_GAME,

  ...B00__KINGS_PAWN_GAME,
  ...B20__SICILIAN_DEFENSE,
  ...B20__SICILIAN_DEFENSE__WING_GAMBIT,
  ...B20__SICILIAN_DEFENSE__WING_GAMBIT__MARSHALL_VARIATION,
  ...B20__SICILIAN_DEFENSE__WING_GAMBIT__MARIENBAD_VARIATION,
  ...B20__SICILIAN_DEFENSE__WING_GAMBIT__ROMANIAN_DEFENSE,
  ...B27__SICILIAN_DEFENSE,

  ...C20__KINGS_PAWN_GAME,
  ...C40__KINGS_KNIGHT_OPENING,
  ...C42__RUSSIAN_GAME,
  ...C44__KINGS_KNIGHT_OPENING__NORMAL_VARIATION,
  ...C44__SCOTCH_GAME,
  ...C44__SCOTCH_GAME__LOLLI_VARIATION,
  ...C45__SCOTCH_GAME,
  ...C45__SCOTCH_GAME__SCHMIDT_VARIATION,
  ...C45__SCOTCH_GAME__CLASSICAL_VARIATION,
  ...C45__SCOTCH_GAME__MALANIUK_VARIATION,
  ...C50__ITALIAN_GAME,
  ...C50__ITALIAN_GAME__GIUOCO_PIANO,
  ...C53__ITALIAN_GAME__CLASSICAL_VARIATION,
  ...C60__RUY_LOPEZ,
  ...C65__RUY_LOPEZ__BERLIN_DEFENSE,
  ...C70__RUY_LOPEZ__MORPHY_DEFENSE,
  ...C70__RUY_LOPEZ__MORPHY_DEFENSE__CARO_VARIATION,
  ...C70__RUY_LOPEZ__MORPHY_DEFENSE__COZIO_DEFENSE,
  ...C70__RUY_LOPEZ__MORPHY_DEFENSE__NORWEGIAN_VARIATION,
];

/*
  >> scotch unlisted
  move: "..exd4",
  fen: "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
*/
const scotchAfterNxd4 = [
  {
    move: "..Qh4",
    name: "Scotch Game: Steinitz Variation",
    moves: [
      { move: "Nc3", eco: "C45", moves: [] },
      // Horwitz Attack
      {
        move: "Nb5",
        name: "Scotch Game: Horwitz Attack",
      },
      // Fraser Variation
      {
        move: "Nf3",
        name: "Scotch Game: Fraser Variation",
      },
      // Braune Variation
      {
        move: "Be3",
        name: "Scotch Game: Braune Variation",
      },
    ],
  },
];
const scotchGambit = {
  move: "Bc4",
  eco: "C44",
  name: "Scotch Game: Scotch Gambit",
  moves: [
    {
      move: "..Nf6",
      name: "Scotch Game: Scotch Gambit, Dubois Réti Defense",
    },
    {
      move: "..Bc5",
      name: "Scotch Game: Haxo Gambit",
      moves: [
        {
          move: "Ng5",
          name: "Scotch Game: Scotch Gambit, Sarratt Variation",
        },
      ],
    },
  ],
};
const scotchMovesAfterd4 = [
  // Lolli Variation
  {
    move: "..Nxd4",
    name: "Scotch Game: Lolli Variation",
  },
];
const afterPetrov = [
  {
    moves: { played: ["e4", "e5", "Nf3", "..Nf6", "Nxe5"], possible: [] },
    possible: [
      {
        moves: {
          played: ["e4", "e5", "Nf3", "..Nf6", "Nxe5", "..d6"],
          possible: [],
        },
        eco: "C42",
        possible: [
          {
            move: "Nf3",
            eco: "C42",
            possible: [
              {
                move: "..Nxe4",
                eco: "C42",
                possible: [
                  // Classical Attack
                  {
                    move: "d4",
                    eco: "C42",
                    name: "Russian Game: Classical Attack",
                    possible: [],
                  },
                  // Nimzowitsch Attack
                  {
                    move: "Nc3",
                    eco: "C42",
                    name: "Russian Game: Nimzowitch Attack",
                    possible: [],
                  },
                  // Cozio Attack
                  {
                    move: "Qe2",
                    eco: "C42",
                    name: "Russian Game: Cozio Attack",
                    possible: [],
                  },
                  // French Attack
                  {
                    move: "d3",
                    eco: "C42",
                    name: "Russian Game: French Attack",
                    possible: [],
                  },
                  // Kaufmann Attack
                  {
                    move: "c4",
                    eco: "C42",
                    name: "Russian Game: Kaufmann Attack",
                    possible: [],
                  },
                  // Millennium Attack
                  {
                    move: "Bd3",
                    eco: "C42",
                    name: "Russian Game: Millennium Attack",
                    possible: [],
                  },
                  { move: "Be2", eco: "C42", possible: [] },
                  { move: "Bc4", eco: "C42", possible: [] },
                  { move: "c3", eco: "C42", possible: [] },
                  { move: "Bb5+", eco: "C42", possible: [] },
                ],
              },
            ],
          },
          // Paulsen Attack
          {
            move: "Nc4",
            eco: "C42",
            name: "Russian Game: Paulsen Attack",
            moves: [{ move: "..Nxe4", moves: [] }],
          },
          // Cochrane Gambit
          {
            move: "Nxf7",
            eco: "C42",
            name: "Russian Game: Cochrane Gambit",
            moves: [{ move: "..Qxf7", eco: "C42", moves: [] }],
          },
          // Karklins-Martinovsky Variation
          {
            move: "Nd3",
            eco: "C42",
            name: "Russian Game: Karklins-Martinovsky Variation",
          },
        ],
      },
      // Damiano Variation
      {
        move: "..Nxe4",
        eco: "C42",
        name: "Russian Game: Damiano Variation",
        moves: [],
      },
    ],
  },
  // Modern Attack
  {
    move: "d4",
    eco: "C43",
    name: "Russian Game: Modern Attack",
  },
  // Three Knights Game
  {
    move: "Nc3",
    eco: "C42",
    name: "Russian Game: Three Knights Game",
  },
  // Italian Variation
  {
    move: "Bc4",
    eco: "C42",
    name: "Russian Game: Italian Variation",
  },
];

interface IOpening {
  eco: EEco;
  fen: EFen;
  moves: { played: TSan[]; possible: TSan[] };
  name: EName;
  // parent?: IOpening;
}

export { transpositionTable, BOOK };
