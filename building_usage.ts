let log: string = `name;type;date
Joe;student;2010-09-03
Ann;mentor;2010-09-03
Bob;student;2010-09-03
Pete;student;2010-09-03
Joe;student;2010-09-04
Bill;mentor;2010-09-04
Joe;student;2010-09-04
Pete;student;2010-09-04
Ann;mentor;2010-09-05
Joe;student;2010-09-05
Ann;mentor;2010-09-05
Joe;student;2010-09-06
Joe;student;2010-09-06
Pete;student;2010-09-07`;

function buildingUsage(log: string): string {
  let studentUsage: number = 0;
  let mentorUsage: number = 0;
  let logLines: string [] = log.split('\n');
  for (let line of logLines) {
    if (line.split(';')[1] === 'student') {
      studentUsage ++;
    } else if (line.split(';')[1] === 'mentor') {
      mentorUsage ++;
    }
  }
  return `Building usage\n\nStudents: ${studentUsage}\nMentors: ${mentorUsage}`;
}

console.log(buildingUsage(log));
