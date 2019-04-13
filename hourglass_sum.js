function hourglassSum(arr) {
  let biggestSum = Number.NEGATIVE_INFINITY;
  for (let column = 0; column <4; column ++) {
    for (let row = 0; row < 4; row ++) {
      let sumOfHourglass = arr[row][column] + arr[row][column + 1] + arr[row][column + 2] + arr[row + 1][column + 1] + arr[row + 2][column] + arr[row + 2][column + 1] + arr[row + 2][column +2];
      if (biggestSum < sumOfHourglass) {
        biggestSum = sumOfHourglass;
      } 
    }
  }
  return biggestSum;
}

let arr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

console.log(hourglassSum(arr1));
