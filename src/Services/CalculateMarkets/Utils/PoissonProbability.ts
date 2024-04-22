import {factorial} from "../../../Shared/Utils/Common";

/** Функция для расчета вероятности по распределению Пуассона. */
export function poissonProbability(k: number, lambda: number): number {
  return Math.pow(Math.E, -lambda) * Math.pow(lambda, k) / factorial(k);
}

export function poissonProbabilityLog(k: number, lambda: number): number {
  return Math.pow(lambda, k) * Math.exp(-lambda) / factorial(k);
}