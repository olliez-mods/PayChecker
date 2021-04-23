const fs = require("fs");
let table = require("../table.json");


exports.run = async (dates) => {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

    readline.question('How Many Hours did you do today?\n', input1 => {
        let  newInput = {
          "month": dates.month,
          "date": dates.monthDate,
          "weekDay": dates.day,
          "hours": parseInt(input1)
        }
        if(table.length <= 0){
            table.push(newInput);
        }else{
        if(table[table.length-1].date == dates.monthDate){
            console.log(`\nSince you already had an Entry with this date it was overwriten\n`);
            table[table.length-1] = newInput;
        }else{
            table.push(newInput);
        }
    }
            
  
            let data = JSON.stringify(table, null, 2);
  
            fs.writeFile('table.json', data, (err) => {
                if (err) console.log(err);
            });
          readline.close();
    });
}