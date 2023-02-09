"use strict";

let increaseVal = 0;

function clickMe(inputbutton)
{
    window.alert(inputbutton.value+" "+inputbutton.type+" "+inputbutton.id);
}

// function clickMe()
// {
//     window.alert(this.value+" "+this.type+" "+this.id);
// }

function increaseMe()
{
    increaseVal++;
    window.alert(increaseVal);
}

// document.getElementById("click4").onclick = increaseMe;