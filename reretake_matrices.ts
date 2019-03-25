let matrix3: number[][] = [
  [1, 1],
  [4, 2]
];

let matrix4: number[][] = [
  [4, 3, -1],
  [10, 2, 5],
  [-2, 3, 4]
];

function getUniqueNumbers(matrix: number[][]): number[] {
  let result: number[] = [];
  for (let row: number = 0; row < matrix.length; row ++) {
    for (let column: number = 0; column < matrix[row].length; column ++) {
      if (result.indexOf(matrix[row][column]) == -1) {
        result.push(matrix[row][column]);
      }
    }
  }
  return result;
}

console.log(getUniqueNumbers(matrix3));
console.log(getUniqueNumbers(matrix4));
