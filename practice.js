const fs = require("fs");
fs.writeFileSync("fswd.txt","some data"); // may take a long time, nothing else wil run unless it's done -> not good, instead:

fs.writeFile("fswd.txt", "some data",(err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("The file was written!");
    }
}); 
// need a callback

//const content = fs.readFileSync("fswd.txt","utf8");
//console.log(content);
console.log("Sending welcome email...")

fs.writeFile("fswd.txt", "some data", (err) => {
    if (err) {
        console.log(err);
    } else {
        fs.readFile("fswd.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        })
    }
}); 
// only readFile will wait for the writeFile to end, all other codes below will go on
