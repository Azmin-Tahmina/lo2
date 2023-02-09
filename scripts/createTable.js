"use strict";

const STATS_TABLE_HEADER = "<thead><tr><th>Column1</th><th>Column2</th><th>Column3</th></tr></thead>";
const ROW_NUM = 10

makeTable();

function makeTable() {
    let strStatsTable = STATS_TABLE_HEADER + "<tbody>";
    let i;

    for (i = 0; i < ROW_NUM; i++) {
        strStatsTable += "<tr><td>" + "testvalue"+i + "</td><td>0</td><td>0</td></tr>";
    }
    document.getElementById("tbl").innerHTML = strStatsTable + "</tbody>";
}

