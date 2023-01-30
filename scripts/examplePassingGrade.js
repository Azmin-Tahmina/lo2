"use strict"

const passing_grade = 50;
let total_grade = 0;
let total_grade_count = 0;
let total_passed_grade_count = 0;
let total_failed_grade_count = 0;
let average_grade = 0;
let grade_type = "";
let output_string="";
let output_string_html ="";

let grade_input = window.prompt("Enter Input Grade:");
// for output in the html new line <br/>
// for window.prompt() , newline is "\n"

while(grade_input != null)
{
    let grade = parseFloat(grade_input);
    output_string = "Input Grade: "+ grade+"\n";
    if( grade<0 || grade>100 || isNaN(grade))
    {
        output_string += "Wrong Format\n";
    }
    else
    {
        if(grade>=passing_grade)
        {
            grade_type ="Passed";
            total_passed_grade_count++;
        }
        else
        {
            grade_type ="Failed";
            total_failed_grade_count++;
        }

        output_string += "Grade Type: "+grade_type+"\n";

        total_grade_count ++;
        total_grade += grade;

        average_grade = total_grade/total_grade_count;

        output_string+= "Total passed grade: "+total_passed_grade_count+"\n";
        output_string+= "Total failed grade: "+total_failed_grade_count+"\n";
        output_string+= "Total grade count: "+total_grade_count+"\n";
        output_string+= "Total grade: "+total_grade+"\n";
        output_string+= "Average grade: "+average_grade+"\n";

        output_string_html = "Total passed grade: "+total_passed_grade_count+"</br>"+
            "Total failed grade: "+total_failed_grade_count+"</br>"+
            "Total grade count: "+total_grade_count+"</br>" +
            "Total grade: "+total_grade+"</br>"+
            "Average grade: "+average_grade+"</br>";
    }


    window.alert(output_string);

    grade_input = window.prompt("Enter Input Grade:");

}


document.getElementById("pid").innerHTML = output_string_html;