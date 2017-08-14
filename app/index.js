
const chalk = require('chalk');
var moment = require('moment');

let day  = moment().format('dddd');
let dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log("It is " + chalk.blueBright(day) + ", " + chalk.blueBright(dateTime) + ".");
// __________________________
  let first = moment().format('DDDo')

console.log("It is the " + chalk.cyan(first) + "th day of the year.");
// ___________________________
function secondCal(){
let seconds = moment().format('s');
  return seconds * 60 * 60;
}
console.log("It is " + chalk.yellow(secondCal()) + " seconds into the day.");

// ____________________________
function dayLight(){
  let dateCheck = moment().format('Mo-Do');
  if (3-3 < dateCheck < 11-5){
    return "is";
  } else{
    return "is not";
  }
}
console.log("It " + chalk.white(dayLight()) + " during Daylight Savings Time.");

// _____________________________
function leapYear(){
  let check = moment().isLeapYear()
  if (check === true){
    return "is";
  } else {
    return "is not";
  }
}
console.log("It " + chalk.red(leapYear()) + " not a leap year.");

// Answers needed:
// console.log(`It is ${Today}, ${Month) ${Date}th ${Year}, ${time}.`); - light blue
// console.log(`It is the ${199}th day of the year.`); -pink
// console.log(`It is ${54468} seconds into the day.`); -aqua
// console.log(`It ${is} during Daylight Savings Time.`); -light green
// console.log(`It ${is not} not a leap year.`); -red
