var currentDisplay ="";
var operator = null;
var button0 = document.getElementById('btn0');
var button1 = document.getElementById('btn1');
var buttonClr = document.getElementById('btnClr');
var buttonEql = document.getElementById('btnEql');
var buttonSum = document.getElementById('btnSum');
var buttonSub = document.getElementById('btnSub');
var buttonMul = document.getElementById('btnMul');
var buttonDiv = document.getElementById('btnDiv');
var opButtons = document.getElementsByClassName('ops');

button0.onclick = function() {
    currentDisplay=currentDisplay+"0";
    document.getElementById('res').innerHTML=currentDisplay;
}

button1.onclick = function() {
    currentDisplay=currentDisplay+"1";
    document.getElementById('res').innerHTML=currentDisplay;
}

buttonClr.onclick = function() {
    currentDisplay="";
    operator=null;
    document.getElementById('res').innerHTML=currentDisplay;
}

buttonEql.onclick = function() {
    currentDisplay=currentDisplay+"1";
    document.getElementById('res').innerHTML=currentDisplay;
}

buttonSum.onclick = function() {
    if(currentDisplay!=="" && !operator) {
        currentDisplay=currentDisplay+"+";
        operator = "add";
        document.getElementById('res').innerHTML=currentDisplay;
    }
}

buttonSub.onclick = function() {
    if(currentDisplay!=="" && !operator) {
        currentDisplay=currentDisplay+"+";
        operator = "subtract";
        document.getElementById('res').innerHTML=currentDisplay;
    }
}

buttonMul.onclick = function() {
    if(currentDisplay!=="" && !operator) {
        currentDisplay=currentDisplay+"+";
        operator = "multiply";
        document.getElementById('res').innerHTML=currentDisplay;
    }
}

buttonDiv.onclick = function() {
    if(currentDisplay!=="" && !operator) {
        currentDisplay=currentDisplay+"+";
        operator = "divide";
        document.getElementById('res').innerHTML=currentDisplay;
    }
}