
function valleyCounter(journeyLog: string): number {
  let directionArray: number[] = [];
  for (let i: number = 0; i < journeyLog.length; i ++) {
    if (journeyLog.substring(i, i + 1) === 'U') {
      directionArray[i] = 1;
    } else {
      directionArray[i] = -1;
    }
  }

  console.log(summarizeElements(directionArray, 0, 0));
  console.log(summarizeElements(directionArray, 0, 1));
  console.log(summarizeElements(directionArray, 0, 2));
  console.log(summarizeElements(directionArray, 0, 3));
  console.log(summarizeElements(directionArray, 0, 4));
  console.log(summarizeElements(directionArray, 0, 5));
  console.log(summarizeElements(directionArray, 0, 6));
  console.log(summarizeElements(directionArray, 0, 7));

  let numberOfValleys: number = 0;
  let startIndex: number = 0;
  for (let i: number = 1; i < directionArray.length; i ++) {
    if (summarizeElements(directionArray, startIndex, i) === 0) {
      if (startIndex === -1) {
        numberOfValleys ++;
      }
      startIndex = i;
    }
  }
  return numberOfValleys;
}

function summarizeElements(array: number[], from: number, to: number): number {
  let sum: number = 0;
  for (let i = from; i <= to; i ++) {
    sum += array[i];
  }
  return sum;
} 

let journeyLog = 'UDDDUDUU';

console.log(valleyCounter(journeyLog));
