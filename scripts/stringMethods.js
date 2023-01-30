"use strict";

let stringVariable = "ThisisatestString";

let subString = stringVariable.substring(1,7);
let charAtval = stringVariable.charAt(3);
let indexofchar = stringVariable.indexOf("s");
let indexofchar1 = stringVariable.indexOf("s",8);
let includesExample = stringVariable.includes("sis");
let includesExample1 = stringVariable.includes("sis",8);


console.log("subString: "+subString.toUpperCase());
console.log("charAt: "+ charAtval.toUpperCase());
console.log("indexofchar: "+ indexofchar);
console.log("indexofchar1: "+ indexofchar1);
console.log("includesExample: "+ includesExample);
console.log("includesExample1: "+ includesExample1);

function addUs(value1, value2)
{
    return value1+value2;
}

let addval = addUs(6,7);

function randomVal(addval)
{
    return Math.random()*addval;
}

console.log("RandomValue: "+  randomVal(addval));
