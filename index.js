// change the behavior of the operator

function addFunc(n1, n2) {
    return n1 + n2;
}

function subtractFunc(n1, n2) {
    return n1 - n2;
}

function calculator(n1, n2, operator) {
    return operator(n1, n2);
}
// make a function as a parameter

console.log(calculator(5, 4, subtractFunc));

// Calling a function
// Invoke a function
// Directly calling it
addFunc(6,7);

// Indirectly invoke a function
const referenceOne = addFunc; // cannot use addFunc() -> will return the value of n1+n2
referenceOne(6,7);

function addTwo(num1, addReference) {
    return addReference(num,2);
}

console.log(addTwo(7,addFunc));
// addTwo -> Higher order function: take another function as the parameter
// addFunc -> Callback function

const colors = ["green","blue","red"];

function callback(value) {
    console.log(value);
}

colors.forEach(callback);
// loop the array

function myForEach(arr,callback) {
    // logic to loop through the arr
    // use a regular for loop
    // for each loop...you should call the callback function
    // give the callback function the current element(value) in the arr
    for (let i = 0; i < arr.length; i++) {
        // do something involve the callback parameter
        const item = arr[i];
        callback(item);
    }
}

myForEach(colors,callback)
// 99% will see the following:
myForEach(colors, function (value) {
    console.log(value);}
)


setTimeout(/*some callback function*/,/*some time*/)

const multiplier = (num1,num2, callback) => {
    setTimeout(() => {
        // num1 and num2 must be integers. If decimals are passed, convert them
        // not a number, pass an error to first argument, and leave result empty
        // otherwise, multiply together and pass null for error and result as second argument
        if (typeof num1 !== "number" || typeof num2 != "number") {
            callback("You must pass numbers to this function")
        }else{
            callback(null, parseInt(num1)*parseInt(num2));
        }


    },4000);
};

const callback = (err, result) => {};

multiplier(5, 4, (err,result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});




