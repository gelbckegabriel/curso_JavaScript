// Strict Mode
/*
"use strict"
opa = 'teste';
console.log(opa); // Uncaught ReferenceError: assignment to undeclared variable opa
*/

// console.log is one of the forms/methods to debug a code.

// If you type "debugger;" in a line, the code will stop running when it reaches this point.

// Treatment of inputs by functions.
/*
function checkNumber(value) {
    let result = Number(value);
    if(Number.isNaN(result)) {
        console.log('Please, type only numbers!');
        return null;
    } else {
        return result;
    }
}
console.log(checkNumber(5));
console.log(checkNumber('test'));

let number = prompt("type a number: ");
checkNumber(number);
*/

// Exceptions - make it possible for you to create your error.
/*
let a = 1;

if(a != 2) {
    throw new Error("The number must be equal to '2'!");
}
*/

// Try and Catch will try to execute the code, if it doesn´t succeed it will return the error.
// Finally happens after the try/catch, and it works independent of the result.

/*
let a;

try {
    let c = a + b;
} catch(error) {
    console.log("Something went wrong: " + error);
} finally {
    console.log('Executed.');
}
*/

