"use strict";

/*
    File:   iterate_array.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   1/15/2019
    Purpose: 
*/

/* myArray declared using array literal notation */
/* Could also have used:
    const myArray = new Array(1967, "Toronto Maple Leafs", null, false);
or
    const myArray = new Array(4);
    myArray[0] = 1967;
    myArray[1] = "Toronto Maple Leafs";
    myArray[2] = null;
    myArray[3] = false;
*/

const myArray = [1967, "Toronto Maple Leafs", null, false];
myArray[4] = "CST";
myArray[7] = true;


let outputArea = document.getElementById("arrayvalues");

for (let i = 0; i < myArray.length; i++) {
    outputArea.innerHTML += "<p>" + i + ": " + myArray[i] + "</p>";
}

/* Note that the for...of version does not give you an index number */
for (let value of myArray) {
    outputArea.innerHTML += "<p>" + value + "</p>";
}
