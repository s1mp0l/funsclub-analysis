import {CompareFunction} from "./Common";

export interface Outcome {
  name: string;
  comp: CompareFunction;
}

const totalHigher = (sum: number): CompareFunction =>
  (i, j) => i + j > sum;

const totalLower = (sum: number): CompareFunction =>
  (i, j) => i + j < sum;

const handicap = (difference: number): CompareFunction =>
  (i, j) => i + difference > j;

const asianHandicap = (handicap: number): CompareFunction =>
  (i, j) => i + handicap > j;

export enum Outcomes {
  // 1x2 Market
  HOME_WIN,
  AWAY_WIN,
  DRAW,

  // 12 Market
  HOME_WIN_OR_DRAW,
  AWAY_WIN_OR_DRAW,
  NOT_DRAW,

  // Total Market
  TOTAL_1H,
  TOTAL_2H,
  TOTAL_3H,
  TOTAL_4H,
  TOTAL_5H,
  TOTAL_6H,
  TOTAL_7H,

  TOTAL_1L,
  TOTAL_2L,
  TOTAL_3L,
  TOTAL_4L,
  TOTAL_5L,
  TOTAL_6L,
  TOTAL_7L,

  // Handicap Market
  HANDICAP_1,
  HANDICAP_2,
  HANDICAP_3,
  // Добавьте другие значения гандикапов по вашему желанию

  // Азиатские форы
  ASIAN_HANDICAP_MINUS_0_25,
  ASIAN_HANDICAP_MINUS_0_5,
  ASIAN_HANDICAP_MINUS_0_75,
  ASIAN_HANDICAP_MINUS_1,
  ASIAN_HANDICAP_MINUS_1_25,
  ASIAN_HANDICAP_MINUS_1_5,
  ASIAN_HANDICAP_MINUS_1_75,
  ASIAN_HANDICAP_MINUS_2,

  ASIAN_HANDICAP_PLUS_0_25,
  ASIAN_HANDICAP_PLUS_0_5,
  ASIAN_HANDICAP_PLUS_0_75,
  ASIAN_HANDICAP_PLUS_1,
  ASIAN_HANDICAP_PLUS_1_25,
  ASIAN_HANDICAP_PLUS_1_5,
  ASIAN_HANDICAP_PLUS_1_75,
  ASIAN_HANDICAP_PLUS_2,
}

export const OutcomesDict: Record<Outcomes, Outcome> = {
  // 1x2 Market
  [Outcomes.HOME_WIN]: {
    name: "Победа 1",
    comp: (i, j) => i > j,
  },
  [Outcomes.AWAY_WIN]: {
    name: "Победа 2",
    comp: (i, j) => i < j,
  },
  [Outcomes.DRAW]: {
    name: "Ничья",
    comp: (i, j) => i === j,
  },

  // 12 Market
  [Outcomes.HOME_WIN_OR_DRAW]: {
    name: "Победа 1 или ничья",
    comp: (i, j) => i >= j,
  },
  [Outcomes.AWAY_WIN_OR_DRAW]: {
    name: "Победа 2 или ничья",
    comp: (i, j) => i <= j,
  },
  [Outcomes.NOT_DRAW]: {
    name: "Не ничья",
    comp: (i, j) => i !== j,
  },

  // Total Market Higher
  [Outcomes.TOTAL_1H]: {
    name: ">1",
    comp: totalHigher(1),
  },
  [Outcomes.TOTAL_2H]: {
    name: ">2",
    comp: totalHigher(2),
  },
  [Outcomes.TOTAL_3H]: {
    name: ">3",
    comp: totalHigher(3),
  },
  [Outcomes.TOTAL_4H]: {
    name: ">4",
    comp: totalHigher(4),
  },
  [Outcomes.TOTAL_5H]: {
    name: ">5",
    comp: totalHigher(5),
  },
  [Outcomes.TOTAL_6H]: {
    name: ">6",
    comp: totalHigher(6),
  },
  [Outcomes.TOTAL_7H]: {
    name: ">7",
    comp: totalHigher(7),
  },

  // Total Market Lower
  [Outcomes.TOTAL_1L]: {
    name: "<1",
    comp: totalLower(1),
  },
  [Outcomes.TOTAL_2L]: {
    name: "<2",
    comp: totalLower(2),
  },
  [Outcomes.TOTAL_3L]: {
    name: "<3",
    comp: totalLower(3),
  },
  [Outcomes.TOTAL_4L]: {
    name: "<4",
    comp: totalLower(4),
  },
  [Outcomes.TOTAL_5L]: {
    name: "<5",
    comp: totalLower(5),
  },
  [Outcomes.TOTAL_6L]: {
    name: "<6",
    comp: totalLower(6),
  },
  [Outcomes.TOTAL_7L]: {
    name: "<7",
    comp: totalLower(7),
  },

  // Гандикап
  [Outcomes.HANDICAP_1]: {
    name: "1",
    comp: handicap(1),
  },
  [Outcomes.HANDICAP_2]: {
    name: "2",
    comp: handicap(2),
  },
  [Outcomes.HANDICAP_3]: {
    name: "3",
    comp: handicap(3),
  },

  // Азиатские форы
  [Outcomes.ASIAN_HANDICAP_MINUS_0_25]: {name: "-0.25", comp: asianHandicap(-0.25)},
  [Outcomes.ASIAN_HANDICAP_MINUS_0_5]: {name: "-0.5", comp: asianHandicap(-0.5)},
  [Outcomes.ASIAN_HANDICAP_MINUS_0_75]: {name: "-0.75", comp: asianHandicap(0.75)},
  [Outcomes.ASIAN_HANDICAP_MINUS_1]: {name: "-1", comp: asianHandicap(-1)},
  [Outcomes.ASIAN_HANDICAP_MINUS_1_25]: {name: "-1.25", comp: asianHandicap(-1.25)},
  [Outcomes.ASIAN_HANDICAP_MINUS_1_5]: {name: "-1.5", comp: asianHandicap(-1.5)},
  [Outcomes.ASIAN_HANDICAP_MINUS_1_75]: {name: "-1.75", comp: asianHandicap(-1.75)},
  [Outcomes.ASIAN_HANDICAP_MINUS_2]: {name: "-2", comp: asianHandicap(-2)},

  [Outcomes.ASIAN_HANDICAP_PLUS_0_25]: {name: "0.25", comp: asianHandicap(0.25)},
  [Outcomes.ASIAN_HANDICAP_PLUS_0_5]: {name: "0.5", comp: asianHandicap(0.5)},
  [Outcomes.ASIAN_HANDICAP_PLUS_0_75]: {name: "0.75", comp: asianHandicap(0.75)},
  [Outcomes.ASIAN_HANDICAP_PLUS_1]: {name: "1", comp: asianHandicap(1)},
  [Outcomes.ASIAN_HANDICAP_PLUS_1_25]: {name: "1.25", comp: asianHandicap(1.25)},
  [Outcomes.ASIAN_HANDICAP_PLUS_1_5]: {name: "1.5", comp: asianHandicap(1.5)},
  [Outcomes.ASIAN_HANDICAP_PLUS_1_75]: {name: "1.75", comp: asianHandicap(1.75)},
  [Outcomes.ASIAN_HANDICAP_PLUS_2]: {name: "2", comp: asianHandicap(2)},
};