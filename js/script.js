const cin = document.getElementById('in');
const out = document.getElementById('out');
const calcout = document.getElementById('calout');
const convertbutton = document.getElementById('convertbutton');
const resetbutton = document.getElementById('resetbutton');

const inlabel = document.getElementById('inlabel');
const outlabel = document.getElementById('outlabel');
const formula = document.getElementById('formula');
let isceltofah = true;

function convert() {
    const cinvalue = parseFloat(cin.value);
    if (isceltofah) {
        const fvalue = (cinvalue * 9/5) + 32;
        out.value = fvalue.toFixed(2);
        calcout.textContent = `(${cinvalue}°C * 9/5) + 32`;
    } else {
        const cvalue = (cinvalue - 32) * 5/9;
        out.value = cvalue.toFixed(2);
        calcout.textContent = `(${cinvalue}°F - 32) * 5/9`;
    }
}
function conversion(){
    let inputNumber = document.getElementById("input-number")
    let outputNumber = document.getElementById("Converted")
    console.log(inputNumber);(outputNumber);
}

function reverse() {
    isceltofah = !isceltofah;
    if (isceltofah) {
        inlabel.textContent = "Celsius (&degC)";
        outlabel.textContent = "Fahrenheit (&degF)";
        formula.innerHTML = "<i>Formula:</i> &degF = (&degC * 9/5) + 32";
    } else {
        inlabel.textContent = "Fahrenheit (&degF)";
        outlabel.textContent = "Celsius (&degC)";
        formula.innerHTML = "<i>Formula:</i> &degC = (&degF - 32) * 5/9";
    }
    cin.value = "";
    out.value = "";
    calcout.textContent = "";
}
    
function reset() {
    cin.value = "";
    out.value = "";
    calcout.textContent = "";
}


