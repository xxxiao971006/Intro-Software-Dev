const distanceFun = require("./mathHelpers").distanceFun;
const process = require("process");
const readline = require("readline-sync");
const fs = require("fs");
const path = require("path");

function processInput(dirName) {
    const args = process.argv.slice(2);
    const inputResult = distanceFun(args[0], args[1], args[2], args[3]);
    fs.mkdir(`./${dirName}`, (err) => {
        if (err) {
            let newDirName = "temp_" + dirName;
            console.log(`Folder "${dirName}" already exists. Creating a new folder for you called ${newDirName}. `)
            processInput(newDirName);
        } else {
            fs.writeFile(`${dirName}/points.txt`, `The user input is (${args[0]}, ${args[1]}), (${args[2]}, ${args[3]})`, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Content saved");

                    fs.appendFile(`${dirName}/points.txt`, `\nThe distance between your two points: (${args[0]}, ${args[1]}), (${args[2]}, ${args[3]}) is ${inputResult}`, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            return;
                        }
                    })
                }
            });
            
        }
    })
}

processInput("dataPoint");
