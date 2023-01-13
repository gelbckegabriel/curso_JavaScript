// EXERCISE 1: Create a regex that accepts only CAPSLOCK characters.

const capsLock = /[A-Z]/;
console.log(capsLock.test("TESTE"));
console.log(capsLock.test("1234"));
console.log(capsLock.test("test"));

// EXERCISE 2: Create a regex that accepts only string and that ends with "ID".

const idString = /[A-Z|a-z]+ID\b/; // \b stands for boundery - it will assure that it will end with "ID".
console.log(idString.test("thisismyID"));
console.log(idString.test("123ID"));
console.log(idString.test("GOFORid"));

// EXERCISE 3: Create a regex that will accept this expression "Brand: nameOfTheBrand". - The name will have variations that can be; Nike, Adidas or Puma.

const brand = /Brand: (Adidas|Nike|Puma)/;
console.log(brand.test("Brand: Adidas"));
console.log(brand.test("Brand: Nike"));
console.log(brand.test("Brand: Puma"));
console.log(brand.test("Brand: Asics"));

// EXERCISE 4: Create a regex that validates IP adress - Example: 127.0.0.1.

const ipAdress = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
console.log(ipAdress.test("127.0.0.1"));
console.log(ipAdress.test("8.8.8.8"));
console.log(ipAdress.test("192.168.0.62"));
console.log(ipAdress.test("357.867.250"));
console.log(ipAdress.test("255.7.250"));

/* EXERCISE 5: Create a regex that will validate the user names in the system:
    accept a-z, _ and -, numbers from 0 to 9, minimum of three characters and maximum of 16.*/

const username = /^(?=.{3,16}$)[a-z0-9-_]/;
console.log(username.test("gabrielgelbcke"));
console.log(username.test("gabriel_gelbcke"));
console.log(username.test("gabrielgelbckeeeeeeeee"));
console.log(username.test("gabrielgelbcke897"));