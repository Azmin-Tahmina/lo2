"use strict";

/*
    File:   math_methods.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   1/15/2019
    Purpose: 
*/

let number = Math.random() * 10;

let outputString = "Number between 0 and 10, not including 10: " + number + "<br />";
outputString += "Number cubed: " + Math.pow(number, 3) + "<br />";
outputString += "Square root of number: " + Math.sqrt(number) + "<br />";
outputString += "Integer just less than number: " + Math.floor(number) + "<br />";
outputString += "Position of the first 1 in number: " + String(number).indexOf("1");

document.getElementById("output").innerHTML = outputString;
