let input: string = `2018-01-01,Budapest,RAINY
2018-01-02,Budapest,RAINY
2018-01-03,Debrecen,SUNNY
2018-01-04,Debrecen,SUNNY
2018-01-05,Gyor,RAINY
2018-01-06,Gyor,RAINY
2018-01-07,Gyor,CLOUDY
2018-01-08,Pecs,CLOUDY
2018-01-09,Pecs,RAINY
2018-01-10,Pecs,CLOUDY
2018-01-11,Budapest,CLOUDY
2018-01-12,Debrecen,CLOUDY
2018-01-13,Gyor,RAINY
2018-01-14,Pecs,CLOUDY
2018-01-15,Pecs,RAINY
2018-01-16,Budapest,RAINY
2018-01-17,Debrecen,RAINY
2018-01-18,Gyor,RAINY
2018-01-19,Budapest,CLOUDY
2018-01-20,Budapest,SUNNY
2018-01-21,Debrecen,CLOUDY
2018-01-22,Debrecen,RAINY
2018-01-23,Gyor,CLOUDY
2018-01-24,Gyor,SUNNY
2018-01-25,Gyor,CLOUDY
2018-01-26,Pecs,SUNNY`;

function getRainiestCity(log: string): string {
  let logLines: string[] = log.split(`\n`);
  let rainyDaySummary = new Object();
  let rainyDayCount: number = 0;
  let rainiestCity: string = '';
  for (let line of logLines) {
    if (line.split(',')[2] === 'RAINY') {
      let cityName: string = line.split(',')[1];
      if (rainyDaySummary.hasOwnProperty(cityName)) {
        rainyDaySummary[cityName] += 1;
      } else {
        rainyDaySummary[cityName] = 1;
      }
    }
  }
  for (let city in rainyDaySummary) {
    if (rainyDaySummary[city] > rainyDayCount) {
      rainiestCity = city;
      rainyDayCount = rainyDaySummary[city];
    }
  }
  return rainiestCity;
}

console.log(getRainiestCity(input));