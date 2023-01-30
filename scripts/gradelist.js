"use strict";

/*
    File:   gradelist.js
    Author: Michael Grzesina (mg)
    Course: CWEB 190
    Date:   1/25/2019
    Purpose:  Practice JavaScript constructs by creating a sorted list of grades that the user enters
*/

const NUMBER_OF_MARKS = 50; // number of marks in the evaluation being processed

let arMarks = []; // array to store all of the entered marks
let markCount = 0; // count of the number of array items displayed


/*
    Function:   anonymous
    Purpose:    take mark from input box and add to list of marks
    Parameters: none
    Returns:    nothing
    Assumptions:    Elements with the IDs shown are in the HTML page
 */
document.getElementById("btnProcessMark").onclick = function() {
    let mark = document.getElementById("mark").value;
    mark = parseFloat(mark);
    if (isNaN(mark) || mark < 0 || mark > NUMBER_OF_MARKS) {
        window.alert("Enter a valid mark from 0 to " + NUMBER_OF_MARKS + "!");
    } else {
        if (mark === 0) {
            window.alert("0 is a terrible mark!");
        }
        document.getElementById("percentage").innerHTML = formatMark(mark);
        processMark(mark);
    }
};


/*
    Function:   formatMark
    Purpose:    display given mark as a percentage of NUMBER_OF_MARKS
    Parameters: mark
    Returns:    a string with the mark out of NUMBER_OF_MARKS and a percentage
    Assumptions:    mark is a valid number
 */
function formatMark(mark) {
    let percent = (mark / NUMBER_OF_MARKS) * 100;
    percent = percent.toFixed(1);
    return mark + " / " + NUMBER_OF_MARKS + " = " + percent + "%";
}


/*
    Function:   processMark
    Purpose:    display marks in an ordered list sorted highest to lowest
    Parameters: mark - the last mark entered into the list
    Returns:    nothing (changes arMarks to add the number in sorted order)
    Assumptions:    mark is a valid number
 */
function processMark(mark) {
    arMarks.push(mark);
    arMarks.sort(function(a, b) {
        return b - a;
    });

    document.getElementById("btnProcessMark").disabled = true;
    markCount = 0;
    document.getElementById("gradesList").innerHTML = "";
    setTimeout(displayGradesOneByOne, 1000);
    // let listItems = "";
    // for (let i = 0; i < arMarks.length; i++) {
    //     listItems += "<li>" + formatMark(arMarks[i]) + "</li>";
    // }
    // document.getElementById("gradesList").innerHTML = listItems;
}


/*
    Function:   displayGradesOneByOne
    Purpose:    display the current mark in the array in a list item in the sorted list
    Parameters: none
    Returns:    nothing
    Assumptions:    global variables markCount and arMarks exist; appropriate IDs in HTML document exist
 */
function displayGradesOneByOne() {
    document.getElementById("gradesList").innerHTML += "<li>" + formatMark(arMarks[markCount]) + "</li>";
    markCount++;
    if (markCount < arMarks.length) {
        setTimeout(displayGradesOneByOne, 1000);
    } else {
        document.getElementById("btnProcessMark").disabled = false;
        document.getElementById("mark").value = "";
        document.getElementById("mark").focus();
    }
}
