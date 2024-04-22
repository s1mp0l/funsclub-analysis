import {OutcomesDict, Outcomes, Outcome} from "./Outcomes";

export enum MarketNames {
  RESULT_1X2,
  RESULT_12,
  TOTAL_HIGHER,
  TOTAL_LOWER,
  TOTAL_EXACT,
  HANDICAP,
  ASIAN_HANDICAP_MINUS,
  ASIAN_HANDICAP_PLUS,
}

export type MarketName = keyof typeof MarketNames;

export interface Market {
  name: string;
  outcomes: Outcome[];
}

export const MarketOutcomes: Record<MarketNames, Market> = {
  [MarketNames.RESULT_1X2]: {
    name: "Результат матча",
    outcomes: [
      OutcomesDict[Outcomes.HOME_WIN],
      OutcomesDict[Outcomes.AWAY_WIN],
      OutcomesDict[Outcomes.DRAW],
    ],
  },
  [MarketNames.RESULT_12]: {
    name: "Результат матча (двойной шанс)",
    outcomes: [
      OutcomesDict[Outcomes.HOME_WIN_OR_DRAW],
      OutcomesDict[Outcomes.NOT_DRAW],
      OutcomesDict[Outcomes.AWAY_WIN_OR_DRAW],
    ],
  },
  [MarketNames.TOTAL_HIGHER]: {
    name: "Суммарное количество голов в матче больше",
    outcomes: [
      OutcomesDict[Outcomes.TOTAL_1H],
      OutcomesDict[Outcomes.TOTAL_2H],
      OutcomesDict[Outcomes.TOTAL_3H],
      OutcomesDict[Outcomes.TOTAL_4H],
      OutcomesDict[Outcomes.TOTAL_5H],
      OutcomesDict[Outcomes.TOTAL_6H],
      OutcomesDict[Outcomes.TOTAL_7H],
    ],
  },
  [MarketNames.TOTAL_LOWER]: {
    name: "Суммарное количество голов в матче меньше",
    outcomes: [
      OutcomesDict[Outcomes.TOTAL_1L],
      OutcomesDict[Outcomes.TOTAL_2L],
      OutcomesDict[Outcomes.TOTAL_3L],
      OutcomesDict[Outcomes.TOTAL_4L],
      OutcomesDict[Outcomes.TOTAL_5L],
      OutcomesDict[Outcomes.TOTAL_6L],
      OutcomesDict[Outcomes.TOTAL_7L],
    ],
  },
  [MarketNames.TOTAL_EXACT]: {
    name: "Точное суммарное количество голов в матче",
    outcomes: [
      OutcomesDict[Outcomes.TOTAL_0E],
      OutcomesDict[Outcomes.TOTAL_1E],
      OutcomesDict[Outcomes.TOTAL_2E],
      OutcomesDict[Outcomes.TOTAL_3E],
      OutcomesDict[Outcomes.TOTAL_4E],
      OutcomesDict[Outcomes.TOTAL_5E],
      OutcomesDict[Outcomes.TOTAL_6E],
      OutcomesDict[Outcomes.TOTAL_7E],
    ],
  },
  [MarketNames.HANDICAP]: {
    name: "Команда 1 победит с форой",
    outcomes: [
      OutcomesDict[Outcomes.HANDICAP_1],
      OutcomesDict[Outcomes.HANDICAP_2],
      OutcomesDict[Outcomes.HANDICAP_3],
    ]
  },
  [MarketNames.ASIAN_HANDICAP_MINUS]: {
    name: "Азиатская фора (-)",
    outcomes: [
      OutcomesDict[Outcomes.ASIAN_HANDICAP_MINUS_0_25],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_MINUS_0_5],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_MINUS_0_75],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_MINUS_1],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_MINUS_1_25],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_MINUS_1_5],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_MINUS_1_75],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_MINUS_2],
    ]
  },
  [MarketNames.ASIAN_HANDICAP_PLUS]: {
    name: "Азиатская фора (+)",
    outcomes: [
      OutcomesDict[Outcomes.ASIAN_HANDICAP_PLUS_0_25],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_PLUS_0_5],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_PLUS_0_75],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_PLUS_1],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_PLUS_1_25],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_PLUS_1_5],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_PLUS_1_75],
      OutcomesDict[Outcomes.ASIAN_HANDICAP_PLUS_2],
    ]
  },
}