import {CompareFunction} from "../../Constants/Common";

export function calculateOutcome(matrix: number[][], comp: CompareFunction) {
  let sum = 0;

  matrix.forEach((r, i) => {
    r.forEach((c, j) => {
      if (comp(i, j)) sum += c;
    })
  })

  return sum;
}