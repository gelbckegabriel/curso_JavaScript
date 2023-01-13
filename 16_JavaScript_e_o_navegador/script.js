// MOVING AROUND 'DOM'.
/*console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].innerText);
console.log(document.body.childNodes[1].textContent);*/


// FINDING SPECIFIED ELEMENTS.
/*console.log(document.body);

console.log(document.getElementById('title'));

console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('li'));

console.log(document.getElementsByClassName('blue-items'));

console.log(document.querySelector('#title h5')); // uses '#' to identify an ID.
console.log(document.querySelector('h5'));
console.log(document.querySelector('div div h5'));*/


// ADDING, REMOVING AND CLONING SPECIFIED ELEMENTS.
/*
// insertBefore.
let newElement = document.createElement("p");
let text = document.createTextNode('text example');
newElement.appendChild(text);

let targetElement = document.querySelector("#mainTitle");
let fatherElement = document.querySelector("#title");

fatherElement.insertBefore(newElement, targetElement);

// appendChild.
let newElement2 = document.createElement("p");
let text2 = document.createTextNode('text example');
newElement2.appendChild(text2);

let p = document.querySelector("#complementary");
let father = p.parentNode;
father.appendChild(newElement2);

// replaceChild.
let newTitle = document.createElement("h1");
let newTitleText = document.createTextNode("Working with DOM (REPLACED WITH 'replaceChild')");
newTitle.appendChild(newTitleText);

let oldTitle = document.querySelector('#mainTitle');
let fatherOldTitle = oldTitle.parentNode;

fatherOldTitle.replaceChild(newTitle, oldTitle);*/


// INSERT TEXT.
/*let text = document.createTextNode('text example');
let p = document.getElementById('emptyP');
p.appendChild(text);*/


// CREATING ELEMENTS.
/*let span = document.createElement('span');
let example = document.querySelector('h1');
let parent = example.parentNode;

parent.insertBefore(span, example);*/


// MODIFYING ATTRIBUTES OF ELEMENTS.
/*let url = document.getElementById('link');
console.log(url.getAttribute('href'));

url.setAttribute('href', 'https://www.linkedin.com/in/gabriel-gelbcke-874930159/');
console.log(url.getAttribute('href'));*/


// VERIFYING LENGTH AND HEIGHT OF ATTRIBUTES.
/*let elTest = document.querySelector('#mainTitle');

console.log(elTest.offsetHeight); // considers borders.
console.log(elTest.offsetWidth); // considers borders.

console.log(elTest.clientHeight); // desconsiders borders.
console.log(elTest.clientWidth); // desconsiders borders.*/


// VERIFYING THE POSITION OF ATTRIBUTES.
/*let elTest = document.querySelector('#mainTitle');
console.log(elTest.getBoundingClientRect());*/


// CHANGING THE CSS.
/*let title = document.querySelector('#mainTitle');
title.style.color = 'red';
title.style.backgroundColor = 'yellow';
title.style.width = '400px';*/


// SELECTING MULTIPLE ELEMENTS WITH QUERY.
let allItems = document.querySelectorAll('li');
console.log(allItems);