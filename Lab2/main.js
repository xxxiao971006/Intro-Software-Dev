const getDayOfTheWeek = require("./lab2").getDayOfTheWeek;
const makeCalendar = require("./lab2").makeCalendar;
const readline = require("readline-sync");

const userYear = readline.questionInt("Enter a Year: ");
const userMonth = readline.question("Enter a month: ");
const userDate = readline.questionInt("Enter a date: ");

function getDayOfTheWeekForUserDate() {
  console.log(`The day ${userYear}-${userMonth}-${userDate} is a ${getDayOfTheWeek(userYear, userMonth, userDate)}.`);
}

getDayOfTheWeekForUserDate();
makeCalendar();

