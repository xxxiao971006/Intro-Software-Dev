// Q1 

/* number, string, boolean, undefined, null
12,"hello",true,var undefinedVar;var a = null
typeof()

*/

// Q2

var numberList = ["First", "Second", "Third", "Fourth"];
for (num of numberList){
  console.log(numberList.indexOf(num) + 1 + ")",num);
}

// Q3
var numberList = ["First", "Second", "Third", "Fourth"];
var orderList = numberList.length;
for (num2 of numberList.reverse()){
  console.log(orderList + ")",num2);
  orderList = --orderList;
}

var numberList = ["First", "Second", "Third", "Fourth"];
for (num2 of numberList.reverse()){
  console.log(orderList + ")",num2);
}

// Q4

var nationality = "Canadian"; // do not change this line
var age = 30;

if (age >= 30 && nationality == "canadian") {
  console.log("Hello there");
} else if (age >= 30 && nationality != "canadian") {
  console.log("What is your nationality?");
}
// Output "What is your nationality?"

if (age >= 30 && nationality == "Canadian") {
  console.log("Hello there");
} else if (age >= 30 && nationality != "Canadian") {
  console.log("What is your nationality?");
}

// Q5

/* 

var m = "english";

function HelloWorld(language){
if(language == "english"){
console.log("hello")
}
else{
console.log("nice to meet you")
}
}


HelloWorld()

*/

function HelloWorld(language) {
  if(language == "english"){
    console.log("Hello");
  }else{
    console.log("nice to meet you");
  }
}

var m = "english";
HelloWorld(m);


// Q6

var fruits = ["Apple", "Banana", "Orange", "Strawberry", "Pineapple",
"Pear", "Grapes", "Passionfruit", "Kiwi", "Mandarin"];

// 1)
console.log(fruits[0]);

// 2)
console.log(fruits.length);

// 3)
console.log(fruits[fruits.length - 1]);

// 4)
var newLen1 = (fruits.unshift('Cherry'));
console.log(fruits);

// 5)
var newLen2 = fruits.push('Cherry');
console.log(fruits);

// 6)
fruits.shift();
console.log(fruits);

// 7)
fruits.pop();
console.log(fruits);

// 8)
console.log(fruits.indexOf('Kiwi'));

//* 9)
var delcount = 1;
fruits.splice(8,delcount);
console.log(fruits);

// 10)
fruits.forEach(item => {console.log("I am eating a ",item);});

// Q7

var season = "fall";
if (season == "summer"){
  console.log("It's summer!");
}else if(season == "fall"){
  console.log("It's fall.");
}else if(season == "winter"){
  console.log("It's winter");
}else{
  console.log("It's spring");
}

// Q8

var name = "jane";
if(name == "jane"){
  console.log("I am jane!");
}else{
  console.log("I am not jane.");
}

// Q9

var name = "jane"
if(name == "james" || name == "jane"){
  console.log("I am james or jane");
}else{
  console.log("I am not james or jane.");
}

// Q10

const os = require('os');
const numOfCpus = os.cpus().length;
console.log(numOfCpus);

// Q14

const process = require('process');
var args = process.argv;

console.log("Total number of arguments are: "+args.length);
args.forEach((val, index) => {
   console.log(`${index}: ${val}`);
});

// Q16)

var listOfTemperatures = ["13c", "23c", "12c", "57f", "69f", "30c"];
var endletter = "c";
for (var Temp of listOfTemperatures){
  if (Temp[Temp.length - 1] == "c"){
    console.log(Temp.slice(0,-1),"degrees celsius is",Math.round(Temp.slice(0,-1) * 1.8 + 32), "degrees fahrenheit");
  }else{
    console.log(Temp.slice(0,-1),"degrees fahrenheit is",Math.round((Temp.slice(0,-1) - 32) * 0.5556), "degrees of cesius");
  }
}

