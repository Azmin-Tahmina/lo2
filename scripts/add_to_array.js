"use strict";

/*
    File:   add_to_array.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   1/15/2019
    Purpose: 
*/

const valueArray = [];

for (let i = 0; i < 5; i++) {
    let value = window.prompt("Enter a value to be put into the array", "");
    valueArray.push(value);
    let result = "The contents of the array are currently\n" + valueArray.join("\n");

    result += "\n\nOr with indices\n";
    for (let j = 0; j < valueArray.length; j++) {
        result += "Position " + j + ": " + valueArray[j] + "\n";
    }

    window.alert(result);
}
