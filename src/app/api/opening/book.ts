import type { TSan } from "@/app/models/types/game.types";

const BOOK: IBookOpening[] = [
  // a3 Anderssen's Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR b KQkq - 0 1",
    move: "a3",
    eco: "A00",
    name: "Anderssen's Opening",
    moves: [],
  },
  // a4 Ware Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/P7/8/1PPPPPPP/RNBQKBNR b KQkq - 0 1",
    move: "a4",
    eco: "A00",
    name: "Ware Opening",
    moves: [],
  },
  // b3 Nimzo-Larsen Attack
  {
    fen: "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
    move: "b3",
    eco: "A01",
    name: "Nimzo-Larsen Attack",
    moves: [],
  },
  // b4 Polish Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
    move: "b4",
    eco: "A00",
    name: "Polish Opening",
    moves: [],
  },
  // c3 Saragossa Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
    move: "c3",
    eco: "A00",
    name: "Saragossa Opening",
    moves: [],
  },
  // c4 English Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
    move: "c4",
    eco: "A10",
    name: "English Opening",
    moves: [],
  },
  // d3 Mieses Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
    move: "d3",
    eco: "A00",
    name: "Mieses Opening",
    moves: [],
  },
  // d4 Queen's Pawn Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
    move: "d4",
    eco: "A40",
    name: "Queen's Pawn Game",
    moves: [],
  },
  // e3 Van't Kruijs Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
    move: "e3",
    eco: "A00",
    name: "Van't Kruijs Opening",
    moves: [],
  },
  // e4 King's Pawn Game
  {
    fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
    move: "e4",
    eco: "B00",
    name: "King's Pawn Game",
    moves: [
      /*
      {
        move: "..e5",
        eco: "C20",
        name: "King's Pawn Game",
        moves: [
          
          {
            move: "Nf3",
            eco: "C40",
            name: "King's Knight Opening",
            moves: [
              {
                move: "..Nc6",
                eco: "C44",
                name: "King's Knight Opening: Normal Variation",
                moves: [
                  // Ruy Lopez
                  {
                    move: "Bb5",
                    eco: "C60",
                    name: "Ruy Lopez",
                    moves: [
                      {
                        move: "..a6",
                        eco: "C70",
                        name: "Ruy Lopez: Morphy Defense",
                        moves: [
                          {
                            move: "Ba4",
                            eco: "C70",
                            name: "Ruy Lopez: Morphy Defense",
                            moves: [
                              { move: "..Be7" },
                              { move: "..Nf6" },
                              { move: "..Be7" },
                              {
                                move: "..Nge7",
                                eco: "C70",
                                name: "Ruy Lopez: Morphy Defense, Cozio Defense",
                              },
                              {
                                move: "..b5",
                                eco: "C70",
                                name: "Ruy Lopez: Morphy Defense, Caro Variation",
                                moves: [
                                  {
                                    move: "Bb3",
                                    eco: "C70",
                                    moves: [
                                      {
                                        move: "..Na5",
                                        eco: "C70",
                                        name: "Ruy Lopez: Morphy Defense, Norwegian Variation",
                                        moves: [
                                          { move: "O-O", eco: "C70" },
                                          { move: "d4", eco: "C70" },
                                          { move: "Bxf7+", eco: "C70" },
                                          { move: "Nxe5", eco: "C70" },
                                          { move: "Nc3", eco: "C70" },
                                          { move: "d3", eco: "C70" },
                                          { move: "c3", eco: "C70" },
                                        ],
                                      },
                                      {
                                        move: "..Nf6",
                                        eco: "C70",
                                        moves: [
                                          { move: "O-O", eco: "C70" },
                                          { move: "d4", eco: "C70" },
                                          { move: "d3", eco: "C70" },
                                          { move: "Qe2", eco: "C70" },
                                        ],
                                      },
                                      { move: "..Bb7" },
                                      { move: "..g6" },
                                      {
                                        move: "..Bc5",
                                        eco: "C70",
                                        name: "Ruy Lopez: Morphy Defense, Norwegian Variation",
                                        moves: [
                                          { move: "c3" },
                                          { move: "O-O" },
                                          { move: "a4" },
                                          { move: "Nxe5" },
                                        ],
                                      },
                                      { move: "..d6" },
                                      { move: "..Be7" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },

                      {
                        move: "..Nf6",
                        eco: "C65",
                        name: "Ruy Lopez: Berlin Defense",
                      },
                    ],
                  },
                  // Italian Game
                  {
                    move: "Bc4",
                    eco: "C50",
                    name: "Italian Game",
                    moves: [
                      {
                        move: "..Bc5",
                        eco: "C50",
                        name: "Italian Game: Giuoco Piano",
                        moves: [
                          {
                            move: "c3",
                            eco: "C53",
                            name: "Italian Game: Classical Variation",
                            moves: [
                              {
                                move: "..Nf6",
                                moves: [
                                  {
                                    move: "d3",
                                    eco: "C53",
                                    name: "Italian Game: Classical Variation, Giuco Pianissimo",
                                    moves: [
                                      { move: "..d6" },
                                      { move: "..a6" },
                                      { move: "..O-O" },
                                      { move: "..a5" },
                                      { move: "..h6" },
                                      { move: "..Bb6" },
                                      { move: "..Qe7" },
                                      { move: "..d5" },
                                      { move: "..Be7" },
                                    ],
                                  },
                                  { move: "d4" },
                                  { move: "b4" },
                                  { move: "Qe2" },
                                  { move: "O-O" },
                                  { move: "Ng5" },
                                ],
                              },
                              { move: "..Qe7" },
                              { move: "..d6" },
                              { move: "..Bb6" },
                              { move: "..Qf6" },
                              { move: "..Nge7" },
                              { move: "..a6" },
                            ],
                          },
                          { move: "O-O" },
                          { move: "d3" },
                          { move: "b4" },
                          { move: "Nc3" },
                          { move: "d4" },
                          { move: "a4" },
                          { move: "Qe2" },
                          { move: "a3" },
                          { move: "Bb3" },
                          { move: "Bxf7+" },
                        ],
                      },
                      { move: "..Nf6" },
                      { move: "..Be7" },
                      { move: "..d6" },
                      { move: "..g6" },
                      { move: "..h6" },
                      { move: "..f5" },
                      { move: "..a6" },
                      { move: "..Bd6" },
                      { move: "..Nd4" },
                      { move: "..h5" },
                    ],
                  },
                  // Scotch Game
                  {
                    move: "d4",
                    eco: "C44",
                    name: "Scotch Game",
                    moves: [
                      {
                        move: "..exd4",
                        moves: [
                          {
                            move: "Nxd4",
                            eco: "C45",
                            moves: [
                              // Schmidt Variation
                              {
                                move: "..Nf6",
                                eco: "C45",
                                name: "Scotch Game: Schmidt Variation",
                                moves: [],
                              },
                              // Classical Variation
                              {
                                move: "..Bc5",
                                eco: "C45",
                                name: "Scotch Game: Classical Variation",
                                moves: [],
                              },
                              // Malaniuk Variation
                              {
                                move: "..Bb4+",
                                eco: "C45",
                                name: "Scotch Game: Malaniuk Variation",
                                moves: [
                                  { move: "c3", moves: [] },
                                  { move: "Nc3", moves: [] },
                                  { move: "Bd2", moves: [] },
                                ],
                              },
                              { move: "..Qf6", moves: [] },
                              // Steinitz Variation
                              {
                                move: "..Qh4",
                                eco: "C45",
                                name: "Scotch Game: Steinitz Variation",
                                moves: [
                                  { move: "Nc3", eco: "C45", moves: [] },
                                  // Horwitz Attack
                                  {
                                    move: "Nb5",
                                    eco: "C45",
                                    name: "Scotch Game: Horwitz Attack",
                                    moves: [],
                                  },
                                  { move: "Qd3", moves: [] },
                                  // Fraser Variation
                                  {
                                    move: "Nf3",
                                    eco: "C45",
                                    name: "Scotch Game: Fraser Variation",
                                    moves: [],
                                  },
                                  { move: "Be2", moves: [] },
                                  { move: "Nxc6", moves: [] },
                                  // Braune Variation
                                  {
                                    move: "Be3",
                                    eco: "C45",
                                    name: "Scotch Game: Braune Variation",
                                    moves: [],
                                  },
                                  {
                                    move: "Nb3",
                                    moves: [],
                                  },
                                  { move: "Qd2", moves: [] },
                                ],
                              },
                              { move: "..g6", moves: [] },
                              { move: "..d6", moves: [] },
                              { move: "..Nxd4", moves: [] },
                              { move: "..Nge7", moves: [] },
                              { move: "..d5", moves: [] },
                              { move: "..Ne5", moves: [] },
                              { move: "..Be7", moves: [] },
                            ],
                          },
                          // Scotch Gambit
                          {
                            move: "Bc4",
                            eco: "C44",
                            name: "Scotch Game: Scotch Gambit",
                            moves: [
                              {
                                move: "..Nf6",
                                eco: "C44",
                                name: "Scotch Game: Scotch Gambit, Dubois Réti Defense",
                                moves: [],
                              },
                              {
                                move: "..Bc5",
                                eco: "C44",
                                name: "Scotch Game: Haxo Gambit",
                                moves: [
                                  { move: "c3", moves: [] },
                                  { move: "O-O", moves: [] },
                                  {
                                    move: "Ng5",
                                    eco: "C44",
                                    name: "Scotch Game: Scotch Gambit, Sarratt Variation",
                                    moves: [],
                                  },
                                ],
                              },
                              { move: "..d6" },
                              { move: "..Bb4+" },
                              { move: "..Be7" },
                              { move: "..g6" },
                              { move: "..h6" },
                              { move: "..Qf6" },
                              { move: "..Nge7" },
                            ],
                          },
                          { move: "c3" },
                          { move: "Bb5" },
                        ],
                      },
                      { move: "..d6" },
                      // Lolli Variation
                      {
                        move: "..Nxd4",
                        eco: "C44",
                        name: "Scotch Game: Lolli Variation",
                        moves: [
                          { move: "Nxd4", moves: [] },
                          { move: "Nxe5", moves: [] },
                        ],
                      },
                      { move: "..Nf6" },
                      { move: "..d5" },
                      { move: "..Bd6" },
                      { move: "..Qf6" },
                      { move: "..Qe7" },
                    ],
                  },
                ],
              },
              // Russian Game
              {
                move: "..Nf6",
                eco: "C42",
                name: "Russian Game",
                moves: [
                  {
                    move: "Nxe5",
                    moves: [
                      {
                        move: "..d6",
                        eco: "C42",
                        moves: [
                          {
                            move: "Nf3",
                            eco: "C42",
                            moves: [
                              {
                                move: "..Nxe4",
                                eco: "C42",
                                moves: [
                                  // Classical Attack
                                  {
                                    move: "d4",
                                    eco: "C42",
                                    name: "Russian Game: Classical Attack",
                                    moves: [],
                                  },
                                  // Nimzowitsch Attack
                                  {
                                    move: "Nc3",
                                    eco: "C42",
                                    name: "Russian Game: Nimzowitch Attack",
                                    moves: [],
                                  },
                                  // Cozio Attack
                                  {
                                    move: "Qe2",
                                    eco: "C42",
                                    name: "Russian Game: Cozio Attack",
                                    moves: [],
                                  },
                                  // French Attack
                                  {
                                    move: "d3",
                                    eco: "C42",
                                    name: "Russian Game: French Attack",
                                    moves: [],
                                  },
                                  // Kaufmann Attack
                                  {
                                    move: "c4",
                                    eco: "C42",
                                    name: "Russian Game: Kaufmann Attack",
                                    moves: [],
                                  },
                                  // Millennium Attack
                                  {
                                    move: "Bd3",
                                    eco: "C42",
                                    name: "Russian Game: Millennium Attack",
                                    moves: [],
                                  },
                                  { move: "Be2", eco: "C42", moves: [] },
                                  { move: "Bc4", eco: "C42", moves: [] },
                                  { move: "c3", eco: "C42", moves: [] },
                                  { move: "Bb5+", eco: "C42", moves: [] },
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
                    moves: [],
                  },
                  // Three Knights Game
                  {
                    move: "Nc3",
                    eco: "C42",
                    name: "Russian Game: Three Knights Game",
                    moves: [],
                  },
                  { move: "d3", eco: "C42", moves: [] },
                  {
                    move: "Bc4",
                    eco: "C42",
                    name: "Russian Game: Italian Variation",
                    moves: [],
                  },
                  { move: "Qe2", eco: "C42", moves: [] },
                  { move: "Bb5", eco: "C42", moves: [] },
                  { move: "g3", eco: "C42", moves: [] },
                ],
              },
            ],
          },
        ],
      },

      // Skandinavian
      { move: "..d5" },

      // Sicilian
      { move: "..c5" },
    */
    ],
  },
  // f3 Barnes Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
    move: "f3",
    eco: "A00",
    name: "Barnes Opening",
    moves: [],
  },
  // f4 Bird Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
    move: "f4",
    eco: "A02",
    name: "Bird Opening",
    moves: [],
  },
  // g3 Hungarian Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq - 0 1",
    move: "g3",
    eco: "A00",
    name: "Hungarian Opening",
    moves: [],
  },
  // g4 Grob Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq - 0 1",
    move: "g4",
    eco: "A00",
    name: "Grob Opening",
    moves: [],
  },
  // h3 Clemenz Opening
  {
    fen: "rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq - 0 1",
    move: "h3",
    eco: "A00",
    name: "Clemenz Opening",
    moves: [],
  },
  // h4 Kadas Opening TODO Ka(é)das
  {
    fen: "rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP1/RNBQKBNR b KQkq - 0 1",
    move: "h4",
    eco: "A00",
    name: "Kadas Opening",
    moves: [],
  },
  /*
  // Na3 Sodium Attack
  { fen: "", move: "Na3", eco: "A00", name: "Sodium Attack", moves: [] },
  // Nc3 Van Geet Opening
  { fen: "", move: "Nc3", eco: "A00", name: "Van Geet Opening", moves: [] },
  // Nf3 Zukertort Opening
  { fen: "", move: "Nf3", eco: "A04", name: "Zukertort Opening", moves: [] },
  // Nh3 Amar Opening
  { fen: "", move: "Nh3", eco: "A00", name: "Amar Opening", moves: [] },
  */
];

interface IBookOpening {
  eco: string;
  fen: string;
  move: TSan;
  name: string;
  parent?: IBookOpening;
  moves: TSan[];
}

export { BOOK };
