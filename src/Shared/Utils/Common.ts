/** Функция для расчета факториала. */
export function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function calculateMatrixSum(matrix: number[][]): number {
  let sum = 0;
  for (let row of matrix) {
    for (let cell of row) {
      sum += cell;
    }
  }
  return sum;
}

export const emptyArray = (n: number) =>
  Array.from({ length: n + 1 }, (_, index) => index);

export function createEmptyMatrix(rows: number, cols: number): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0; // Заполняем нулями, это пустая матрица
    }
  }
  return matrix;
}

export const formatMatrixToPercent = (matrix: number[][]): number[][] => {
  return matrix.map((r) => (
    r.map((c) =>
      +(c*100).toFixed(2)
    )
  ));
}

export const createNullArray = (n: number) => (
  Array.from({ length: n }, () => 0)
);