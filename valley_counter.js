function countingValleys(n, s) {
  let numberOfValleys = 0;
  let startIndex = 0;
  let sumOfSteps = 0;
  if (s.slice(0, 1) == 'U') {
    sumOfSteps = 1;
  } else {
    sumOfSteps = -1;
  }

  for (let i = 1; i < n; i ++) {
    if (s.slice(i, i + 1) == 'U') {
      sumOfSteps ++;
    } else {
      sumOfSteps --;
    } 
    if (sumOfSteps == 0) {
      if (s.slice(startIndex, startIndex + 1) == 'D') {
        numberOfValleys ++;
      }
      startIndex = i + 1;
    }
  }
  return numberOfValleys;
}

let n = 8;
let s = 'UDDDUDUU';

console.log(countingValleys(n, s));
