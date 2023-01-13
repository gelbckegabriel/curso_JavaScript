// 'NODE' can be used to make tests on the terminal, such as "console.log", "2+2" and etc.
// 'NODE INDEX.JS' will execute the project in the terminal.

let msg = 'hello, world!';
console.log(msg);

// 'NPM INIT' to initialize the project and create the package.json.
// 'NPM INSTALL' if you use just this, it will install all the dependencies that the project requires.

// 'FILE SYSTEM' module - readFile, writeFile method.
// IT IS POSSIBLE TO GENERATE ONE VARIABLE PER METHOD OR YOU CAN ADD A ',' TO ADD MULTIPLES IN THE SAME VARIABLE.
let {readFile, writeFile} = require('fs'); // fs = FileSystem.

readFile("arquivo.txt", "utf8", (error, text) => {
    if(error) {
        throw error;
    } else {
        console.log(text);
    }
});

writeFile("arquivo.txt", "this text has been added with the 'writeFile' method!", (error) => {
    if(error) {
        throw error;
    } else {
        console.log("Text added with Sucess!");
    }
});

// 'THE HTTP MODULE' - Create server to serve web pages.
const {createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1>Hello, World!</h1>
    <p>First web page with Node.JS</p>`);
    response.end(); // IT IS MANDATORY TO END.
});

server.listen(8000); // THE PORT WHERE THE SERVER WILL LISTEN - ON YOUR BROWSER TYPE 'localhost:8000'.

console.log("Listening! (port 8000)");

// 'NPM INSTALL EXPRESS' has been used to install this framework - USED TO CREATE APPLICATIONS.
let express = require('express');
let app = express();

app.get('/', function(requisiton, response) { // '/' IT'S THE MAIN PATH OF THE APP.
    response.send('First path with Express!');
});

app.get('/test', function(requisiton, response) { // '/test' IT'S A NEW PATH OF THE APP.
    response.send('Testing a new path!');
});

app.listen('1', function() {
    console.log('Application is working at the port 1.');
});



// I'VE USED POSTMAN THAT IS A SOFTWARE USED TO TEST API´s.