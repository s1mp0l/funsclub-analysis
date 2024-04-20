import {poissonProbability} from "./PoissonProbability";
import {MAX_TEAM_GOALS_PER_MATCH} from "../../Constants/Common";
import {calculateMatrixSum} from "../../../Shared/Utils/Common";

export function getScoreMatrix(homeExpectedGoals: number, awayExpectedGoals: number): number[][] {
  const maxGoals = MAX_TEAM_GOALS_PER_MATCH;
  const matrix: number[][] = [];

  console.time("matrix")

  // Создаем матрицу с нулевыми значениями
  for (let i = 0; i <= maxGoals; i++) {
    matrix[i] = [];
    for (let j = 0; j <= maxGoals; j++) {
      matrix[i][j] = 0;
    }
  }

  // Заполняем матрицу точных счетов на основе математического ожидания голов
  for (let i = 0; i <= maxGoals; i++) {
    for (let j = 0; j <= maxGoals; j++) {
      // Используем распределение Пуассона для расчета вероятности
      const homeProb = poissonProbability(i, homeExpectedGoals);
      const awayProb = poissonProbability(j, awayExpectedGoals);
      // Вероятность того, что будет именно такой счет
      matrix[i][j] = homeProb * awayProb;
    }
  }

  console.timeEnd("matrix")
  console.log(calculateMatrixSum(matrix))

  return matrix;
}