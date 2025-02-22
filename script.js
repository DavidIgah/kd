var display = document.getElementById("display")
function clearDisplay(){
    display.value = "";
}

function appendValue(val){
    display.value += val;
}

function evalute(){
    display.value = eval(display.value)
}