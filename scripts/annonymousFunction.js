"use restrict";

// function  add(a,b)
// {
//     return a+b;
// }
//
// console.log(add(3,4));
//
// let sum = function (a,b)
// {
//     return a+b;
// }
//
// console.log(sum(8,9));
//
// let addVal = sum;
//
// console.log(addVal(9,7))
//
// let array = [5,2,1];
//
// console.log(array.sort());
//
// console.log(array.sort(function (a,b){ return a-b; }));


//Anonymous Function:

let array1 = [1, 30, 24, 2, 3, 11];

console.log("Normal sort: "+ array1.sort());

function assendingSort(a,b)
{
    return b-a;
}

console.log("Callback/normal Function: "+array1.sort(assendingSort));

console.log("Callback/Anonymous Function: "+array1.sort(function (a,b){ return b-a;}));

array1.sort((a,b)=>b-a);

console.log("fat arrow => "+ array1);

function filterarray(val)
{
    return val>=10;
}

let filterarray1 = array1.filter(filterarray);

let filterarray2 = array1.filter(val => val>=10);

console.log("filter1: "+filterarray1);
console.log("filter2: "+filterarray2);
// let  maparray = array.map();

function maparray(val)
{
    return val*10;
}

let maparray1 = array1.map(maparray);
let maparray2 = array1.map(function(val){ return val*2;});

console.log("map1: "+maparray1);
console.log("map2: "+maparray2);




















