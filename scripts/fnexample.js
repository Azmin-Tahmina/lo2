"use strict";

// function Example

function fnexample(value1,value2)
{
  let sum = value1*value2;
  return sum;
}

console.log("variable value: "+ fnexample(2,3));

//function example with same local and global variable name;

let name ="TestName"; // first global variable

console.log("Value of name: "+ name)

function changeName()
{
    name = "TestName1"; // variable name is working as a global variable
    console.log("Value of name from changeName() : "+ name)
}

changeName();

function changeNamelocal()
{
    let name = "TestName2"; // variable name is working as a local variable
    console.log("Value of name from changeNamelocal() : "+ name)
}

changeNamelocal();

console.log("Value of name for global variable : "+ name)  // variable name is working as a global variable
