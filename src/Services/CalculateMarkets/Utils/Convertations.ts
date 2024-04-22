import {DEFAULT_MARGIN} from "../../Constants/Common";

export const getProbabilityFromOdd = (marginValue: number) => (oddValue: number) => {
  return 1/oddValue/marginValue;
}

export const fixedGetProbabilityFromOdd = getProbabilityFromOdd(DEFAULT_MARGIN);