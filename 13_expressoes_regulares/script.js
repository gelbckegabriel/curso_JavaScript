// How to call regular expressions.

let reg1 = new RegExp('TEST');
let reg2 = /ball/;

// Now there is a way to verify the definition of the pattern by the regex.

console.log(/testing/.test('tttestingggggg'));
console.log(/testing/.test("asdtestasd"));

console.log(reg2.test('Do you have a ball?'));

// character set.

console.log(/[123]/.test("Is there 123 in here?"));
console.log(/[0-9]/.test('Is there the number 8 here?'));

// special characters.

const pointRegex = /./; // it will accept anything.

console.log(pointRegex.test("asd"));
console.log(pointRegex.test(" "));
console.log(pointRegex.test("123"));
console.log(pointRegex.test("123asd"));

const lowerS = /\s/; // characters that are in blank.

console.log(lowerS.test("asd"));
console.log(lowerS.test(" "));
console.log(lowerS.test("123"));
console.log(lowerS.test("123asd"));

// check if it´s a year.

let year = /\d\d\d\d/;
console.log(year.test(2022));
console.log(year.test("2022"));
console.log(year.test(21));

console.log('---------------------------------------------------------------------------');

// NOT (^) operator.

const notAandB = /[^ab]/;
console.log(notAandB.test("a"));
console.log(notAandB.test("aqui tem a"));

const notAtoZ = /[^a-z]/;
console.log(notAtoZ.test("d"));
console.log(notAtoZ.test("aqui tem s")); // it will accept because of the blanks.

// PLUS (+) operator.

const digits = /\d+/;
console.log(digits.test("123"));
console.log(digits.test("123456789"));
console.log(digits.test(""));

// QUESTION (?) operator.

let opcional = /Prova\s?\d?/;
console.log(opcional.test("Prova"));
console.log(opcional.test("Prova 1"));

// PRECISION ('{}') operator.

let cellphoneNumber = /41\s?\d{4,5}-\d{4}/;
console.log(cellphoneNumber.test("413594-8989"));
console.log(cellphoneNumber.test("41 99764-1234"));
console.log(cellphoneNumber.test("41 451-8899"));
console.log(cellphoneNumber.test("4581-899"));

// EXEC method.

let execMethod = /\d+/.exec("Number 100");
console.log(execMethod);
console.log(execMethod.index);

// MATCH method. (works in a similar way that exec).

let matchMethod = "Number 100";
console.log(matchMethod.match(/\d+/));
console.log(matchMethod.match(/\S/).index);

// CHOICE PATTERN (|).

let fruits = /\d+ (banana|grape|orange)/;
console.log(fruits.test("1 grape"));
console.log(fruits.test("10 potatoes"));
console.log(fruits.test("15 bananas"));

// VALIDATING E-MAIL.

const email = /\D+@\D+.com/;
console.log(email.test("gabrielgelbcke@gmail.com"));
console.log(email.test("234235@gmail.com"));
console.log(email.test("gabrielgelbcke@gmail3.com"));
console.log(email.test("gabrielgelbckegmail.com"));

// VALIDATING WEB ADRESS.

const website = /www.\w+.com|com.br/;
console.log(website.test("www.instagram.com"));
console.log(website.test("www.governodoparana.com.br"));
console.log(website.test("ww2.teste.com"));

// VALIDATING BIRTH DATE.

const birthDate = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
console.log(birthDate.test("12/12/2001"));
console.log(birthDate.test("21/01/62"));
console.log(birthDate.test("7/9/1958"));
console.log(birthDate.test("04/4/2005"));