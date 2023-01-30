"use strict";

let countdownString="<h1>Countdown starts from: </h1>" ;

for(let i = 10 ; i > 0; i--)
{
    if(i===5)
    {
        countdownString += "Five<br/>";
    }
    else
    {
        countdownString += i+"<br/>";
    }
}

// let stringVal = "Blastoff";

// countdownString+= "<strong>"+stringVal+"</strong>";

countdownString+= "<strong>Blastoff</strong>";

document.getElementById("pid").innerHTML = countdownString;