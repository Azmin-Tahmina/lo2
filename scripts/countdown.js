"use strict";

/*
    File:   countdown.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   1/15/2019
    Purpose: 
*/

const outputElement = document.getElementById("output");

for (let i = 10; i > 0; i--) {
    let outputString = "";
    if (i === 5) {
        outputString = "Five";
    } else {
        outputString = i;
    }
    outputElement.innerHTML += outputString + "<br />";
}

outputElement.innerHTML += "<strong>Blastoff!</strong>";
