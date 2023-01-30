"use strict";

let array1 = []
let result

for(let i=0 ; i<5; i++)
{
    let elm = window.prompt("Enter Element:","");
    array1.push(elm);
    let result = array1.join("\n")
    window.alert(result);
}
