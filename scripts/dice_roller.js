"use strict";

/*
    File:   dice_roller.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   1/18/2019
    Purpose: 
*/


/*
    Function: getRandomInt
    Purpose: returns a random integer between 1 and the supplied parameter
    Parameters: max - the highest value in the range of random numbers
    Returns: a random number between 1 and max
    Assumptions: max will be an integer greater than 1
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}


/* global code */
const SIDES = 6;
const NUM_DICE = 3;

// const die1 = getRandomInt(SIDES);
// const die2 = getRandomInt(SIDES);
// const die3 = getRandomInt(SIDES);

// let resultString = "The rolls were " + die1 + ", " + die2 + ", and " + die3;

let resultString = "<p>The values of the dice are:</p>";
for (let i = 0; i < NUM_DICE; i++) {
    resultString += "<p>" + getRandomInt(SIDES) + "</p>";
}

document.getElementById("output").innerHTML = resultString;
