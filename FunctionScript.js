// JavaScript source code
function menuBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function menuBar1() {
    var x = document.getElementById("myTopnav1");
    if (x.className === "topnav") {
        x.className += " responsive1";
    } else {
        x.className = "topnav";
    }
}