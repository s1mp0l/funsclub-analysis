import numeric from "numeric";
import {createNullArray} from "../../Shared/Utils/Common";
import {poissonProbabilityLog} from "../CalculateMarkets/Utils/PoissonProbability";
import {Market} from "../Constants/Markets";
import {Outcome} from "../Constants/Outcomes";

const error = (outcomes: Outcome[]) => (par: number[]): number => {
  const oddProbValues = outcomes.map(o => o.probValue ?? 0);
  const comps = outcomes.map(o => o.comp);

  const homeXG: number = Math.exp(par[0]);
  const awayXG: number = Math.exp(par[1]);

  let sums: number[] = createNullArray(comps.length);
  for (let i = 0; i <= 15; i++) {
    for (let j = 0; j <= 15; j++) {
      const prob: number = poissonProbabilityLog(i, homeXG) * poissonProbabilityLog(j, awayXG);
      comps.forEach((c, index) => {
        if (c(i, j)) sums[index] += prob;
      })
    }
  }

  return sums.reduce((acc, s, i) => (
    acc + ((s - oddProbValues[i]) ** 2)
  ), 0);
}

export function getXgFromMarkets(markets: Market[]) {
  const outcomes = markets.reduce((acc, m) =>
    [...acc, ...m.outcomes], [] as Outcome[]
  ).filter(o => o.oddValue);

  if (!outcomes || (outcomes.length < 3)) return null;

  const errorFn = error(outcomes);
  const result = numeric.uncmin(errorFn, [0, 0]);

  return [Math.exp(result.solution[0]), Math.exp(result.solution[1])];
}