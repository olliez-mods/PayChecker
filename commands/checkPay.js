const config = require("../config.json");
let table = require("../table.json");

exports.run = async () => {
    totalPay = 0;
    table.forEach(e => {
        if(e.hours <= 0){
          console.log(`Date: ${e.month} ${e.date} (${e.weekDay}), Pay: 0 (did no work)`);
        }else{
            let pay = (e.hours*config.pay)-(config.pay*config.bufferForPay);
            totalPay += pay;
        console.log(`Date: ${e.month} ${e.date} (${e.weekDay}), Pay: ${pay}`);
      }
    });
    console.log(`\n\n\nTOTAL PAY: ${totalPay}`);
}