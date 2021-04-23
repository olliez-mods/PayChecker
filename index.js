const config = require("./config.json");
const date = new Date();
const fs = require("fs");

let table = require("./table.json");

let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "may",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let dayOfWeekArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let commandFiles = {
  "1" : "newPayInput",
  "2" : "checkPay",
  "3" : "clear",
};

let dates = {
  "month" : monthArray[date.getMonth()],
  "day" : dayOfWeekArray[date.getDay()],
  "monthDate" : date.getDate()
}
let month = monthArray[date.getMonth()];
let day = dayOfWeekArray[date.getDay()];
let monthDate = date.getDate();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Pick an option,\n1.New Time\n2.Check Pay\n3.Clear Entrys\n', input => {
    console.clear();
    try{
      readline.close();
      let commandFile = require(`./commands/${commandFiles[input]}.js`);
      commandFile.run(dates);
      }catch(err) {
          if (err) console.log("ERROR: Failed to get the command, " + input);
      }
});
