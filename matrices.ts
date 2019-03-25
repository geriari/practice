
let matrix1: number[][] = [
  [2, 1],
  [0, 1]
];

let matrix2: number[][] = [
  [0, 3],
  [-1, 1]
];

function matrixMaximizer(matrix1: number[][], matrix2: number[][]): number[][] {
  let result: number[][] = [];
  for (let row: number = 0; row < matrix1.length; row ++) {
    result[row] = [];
    for (let column: number = 0; column < matrix1.length; column ++) {
      if (matrix1[row][column] > matrix2[row][column]) {
        result[row][column] = matrix1[row][column];
      } else {
        result[row][column] = matrix2[row][column];
      }
    }
  }
  return result;
}

console.log(matrixMaximizer(matrix1, matrix2));
