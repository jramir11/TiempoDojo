
var nameTag = document.querySelector("#name-tag");
function setName(element) {
    alert("Cargando Informe Meteorologico.. ")
    /*console.log(element.value);
    nameTag.innerText = element.value;*/
}

var CuadroIAcc = document.querySelector("#CuadroIAccept");
function btnIAccept() {
    /*var nump = document.getElementById("btnAcc");
    nump.querySelector(".btnIAccept").innerHTML++;*/
    CuadroIAcc.remove();
 }

 var CambiaGr = document.querySelector("#selGrados");
 function CambiaGrados(element) {
    alert(element.value)
    alert(CambiaGr)
     //nameTag.innerText = element.value;
 }
 function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}
function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}
function CambiaGrados(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "Celcius") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}