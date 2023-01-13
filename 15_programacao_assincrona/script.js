// CALLBACKS.

console.log('Ainda não chamou o Callback.');

setTimeout(function() {
    console.log('Chamou o Callback.');
}, 2000);

console.log('Ainda não chamou o Callback.');


// PROMISES.

let promess = Promise.resolve(2 + 8);

console.log('A piece of code');

console.log(promess);
promess.then((value) => console.log(`The sum of the variable is ${value}`)); // é possível encadear outros Then, como um return +5 e depois o console log.


// FAILURES IN THE PROMISES.

let wrongPromise = Promise.resolve(new Error("Something went wrong!"));

wrongPromise
    .then(value => console.log(value))
    .catch(reason => console.log("Error: " + reason));


// DENYING PROMISES.

function verifySomething(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log("The number is 2."));
        } else {
            reject(new Error('It didn´t work.'));
        }
    })
}
verifySomething(4);
verifySomething(2);


// SOLVING MULTIPLE PROMISES.

const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve(100);
    }, 2500);
});

const promise2 = Promise.resolve(5);

const promise3 = new Promise((resolve, reject) => {
    resolve(10);
});

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)); // it will print when the last promise (the longest - p1) solve itself.


// ASYNC FUNCTIONS.

async function sum(a,b) {
    return a+b;
}

sum(2,2).then(value => console.log("Async Function value: " + value))


// AWAIT.

function delaySum(a,b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a+b);
        }, 3000);
    })
}

async function newSum(a,b,c,d) {
    let x = delaySum(a,b);
    let y = delaySum(c,d);

    return await x + await y; // it will wait because of the delay.
}

newSum(2,4,6,8).then(value => console.log("Delayed Sum value: " + value));


// GENERATORS.

function* generatorTest() {
    let id = 0;

    while(true) {
        yield id++;
    }
}

let createId = generatorTest();

console.log("Valor da ID: " + createId.next().value);
console.log("Valor da ID: " + createId.next().value);
console.log("Valor da ID: " + createId.next().value);
console.log(createId.next());