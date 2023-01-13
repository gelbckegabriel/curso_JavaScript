const btnEvent = document.querySelector('#eventButton');
const btnRemove = document.querySelector('#removeEvent');

const btnObject = document.querySelector("#objectButton");

const defaultEvent = document.getElementById("defaultEvent");

const colorChange = document.getElementById("colorChange");

const inputFocus = document.querySelector("#inputFocus");

function msg() {
    console.log("You've Clicked!");
}


// Creating an event.
btnEvent.addEventListener("click", msg);


// Removing an event.
btnRemove.addEventListener("click", () => {
    btnEvent.removeEventListener("click", msg); // IT NEEDS AN EXTERNAL FUNCTION, SUCH AS "msg".
});


// The object of an event.
function checkObject(e) {
    console.log(e);
};

btnObject.addEventListener("click", checkObject);


// Change the default event of an element.
defaultEvent.addEventListener("click", function(e) {

    e.preventDefault(); // THIS WILL MAKE THE BUTTON TO NOT FOLLOW THE LINK, BUT TO PRINT THE MESSAGE BELOW.
    console.log("You've clicked, but it didn't open the link!");

});


// Events with the keyboard.
window.addEventListener("keydown", function(e) {

    if(e.key == 'g') {
        console.log("You've clicked the letter 'G'!");
    }

    else if(e.key == '1') {
        console.log("You've clicked the number '1'!");
    }

})

window.addEventListener("keyup", function(e) {

    if(e.key == 'Enter') {
        console.log("You've dropped the 'Enter' button!");
    }

})


// Other events with the mouse.
colorChange.addEventListener("mousedown", function() {
    colorChange.style.color = "blue";
})

colorChange.addEventListener("mouseup", function() {
    colorChange.style.color = "black";
})

colorChange.addEventListener("dblclick", function() {
    colorChange.style.color = "red";
})

colorChange.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    console.log("You´ve clicked with the right button.");
})

let timeout; // YOU NEED TO CREATE THE VARIABLE OUTSIDE OF THE EVENT.
window.addEventListener("mousemove", function(e) {

    // console.log("Location of the mouse indicator: " + e.x + "x - " + e.y + "y.");

    // DEBOUNCE - it will be used so that it doesn't get called too many times.
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log("DEBOUNCE - Location of the mouse indicator: " + e.x + "x - " + e.y + "y."), 500);

})

window.addEventListener("scroll", function(e) {
    
    if(window.pageYOffset > 1000) {
    console.log("You've reached the position.");
    }

});


// Check the focus and blur events.
inputFocus.addEventListener("focus", function() {
    console.log("You're focuse on this element!");
})

inputFocus.addEventListener("blur", function() {
    console.log("Now, you've lost it!");
})


// Loading events.
// window.addEventListener("load", function(e) {
//     this.alert("Assine os nossos termos de uso!")
// })

// window.addEventListener("beforeunload", function(e) {
//     event.returnValue = null; // IT NEEDS THIS TO WORK.
// })