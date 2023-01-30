"use strict";

let year = window.prompt("Enter a year: ");
let checked_year;
let leapyear_flag = "";
let output_msg="";

while(year != null)
{
    // "2000 year"
    checked_year = parseInt(year);

    if(checked_year<0 || isNaN(checked_year))
    {
        window.alert("Year: "+checked_year + "is not a valid year");
    }
    else
    {
        if(checked_year%400 == 0)
        {
            leapyear_flag = true;
        }
        else if(checked_year%100 == 0)
        {
            leapyear_flag = false;
        }
        else if(checked_year%4 == 0)
        {
            leapyear_flag = true;
        }
        else
        {
            leapyear_flag = false;
        }

    }

    if(leapyear_flag == true)
    {
        output_msg = "The year "+checked_year+" is a leap year"+"\n";
    }
    else
    {
        output_msg = "The year "+checked_year+" is not a leap year"+"\n";
    }
    window.alert(output_msg);
    year = window.prompt("Enter a year: ");
}

document.getElementById("pid").innerHTML = output_msg;