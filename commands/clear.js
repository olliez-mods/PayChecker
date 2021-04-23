let table = require("../table.json");
const fs = require("fs");

exports.run = async () => {

    let backupFile = "backup";

    fs.readdir("./backups", (err, files) => {
        if(err) throw err;
      
        let file = files.filter(f => f.endsWith('.json'));
       backupFile += file.length.toString();
      });


    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

    readline.question('Are you sure??\n', input => {
        if(input != "yes") readline.close();

        let data = JSON.stringify(table, null, 2);

        fs.writeFile(`./backups/${backupFile}.json`, data, (err) => {
            if (err){
                console.log(err);
            }
            data = JSON.stringify([], null, 2);
            fs.writeFile('table.json', data, (errr) => {
                if(errr) console.log(errr);
            });
            readline.close();
        });
    });
}