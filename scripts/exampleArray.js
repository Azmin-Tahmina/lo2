"use strict"

// let array1 = new Array();
// let array2 = new Array("test1","test2",11,4,true);
// array2[5] = "test3";
// array2[6] = "test4";
// array2[9] = 9;
// array2[10] = 10;
//
// let array3 = ["test3","test4",6,7,false]
// let array4 = [5];

// console.log("Size array1 "+ array1.length);
// console.log("Size array2 "+ array2.length);
// console.log("Size array3 "+ array3.length);
// console.log("Size array4 "+ array4.length);

// array2.length = 3;

// for(const var1 of array2)
// {
//     // document.write("<p>"+"array element: "+var1+"</p></br>");
//     console.log("array element: "+var1);
// }
//
// for(let var2 of array2)
// {
//     console.log("array element: "+var2);
// }

// for(let i=0;i<array2.length;i++)
// {
//     console.log("array element: "+array2[i]);
// }
// from the last we will use push and pop
let westTeams = ["Lions", "Elks", "Stampeders", "Roughriders"];
westTeams.push("TestString1")

// for(const var1 of westTeams)
// {
//     // document.write("<p>"+"array element: "+var1+"</p></br>");
//     console.log("array element: "+ var1);
// }

let lastvalarray = westTeams.pop();

document.write(lastvalarray);


// for(const var1 of westTeams)
// {
//     // document.write("<p>"+"array element: "+var1+"</p></br>");
//     console.log("array element: "+ var1);
// }

//from the first use- shift/unshift

let firstvalarray = westTeams.shift();

console.log("Shift value from first: ")
document.write("<p>"+firstvalarray+"</p>");

// for(const var1 of westTeams)
// {
//     // document.write("<p>"+"array element: "+var1+"</p></br>");
//     console.log("array element: "+ var1);
// }

console.log("added value first: ")
westTeams.unshift("teststring2")
// for(const var1 of westTeams)
// {
//     // document.write("<p>"+"array element: "+var1+"</p></br>");
//     console.log("array element: "+ var1);
// }

westTeams.sort();

for(const var1 of westTeams)
{
    // document.write("<p>"+"array element: "+var1+"</p></br>");
    console.log("array element: "+ var1);
}

westTeams.reverse();

for(const var1 of westTeams)
{
    // document.write("<p>"+"array element: "+var1+"</p></br>");
    console.log("array element: "+ var1);
}

console.log("Example of Join:");
let joinExample = westTeams.join();
console.log("joinExample: "+ joinExample);

let joinExamplewithand = westTeams.join(" and ");
console.log("joinExamplewithand: "+ joinExamplewithand);

console.log("tostringExample: "+ westTeams.toString());

console.log("includesExample: "+ westTeams.includes("Test"));

console.log("includesWithPositionExample: "+ westTeams.includes("Elks",3));




























