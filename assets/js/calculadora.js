var valor2;
var valor1;
var operacion;

function calculadora() {
    let porcentaje = document.getElementById('porcentaje');
    let ce = document.getElementById('ce');
    let c = document.getElementById('c');
    let reset = document.getElementById('reset');
    let x_1 = document.getElementById('x_1');
    let x_2 = document.getElementById('x_2');
    let raiz = document.getElementById('raiz');
    let division = document.getElementById('division');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let multiplicacion = document.getElementById('multiplicacion');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let menos = document.getElementById('menos');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    //let mas = document.getElementById('mas');
    // let simmas = document.getElementById('simmas');
    let cero = document.getElementById('cero');
    let punto = document.getElementById('punto');
    let igual = document.getElementById('igual');
    let seis = document.getElementById('seis');
    let sumaR = document.getElementById('sumaR');
    let total = document.getElementById('total');

    uno.onclick = function (e) {
        total.innerText = total.innerText + "1";
    }

    dos.onclick = function (e) {
        total.innerText = total.innerText + "2";
    }

    tres.onclick = function (e) {
        total.innerText = total.innerText + "3";
    }

    cuatro.onclick = function (e) {
        total.innerText = total.innerText + "4";
    }

    cinco.onclick = function (e) {
        total.innerText = total.innerText + "5";
    }

    seis.onclick = function (e) {
        total.innerText = total.innerText + "6";
    }

    siete.onclick = function (e) {
        total.innerText = total.innerText + "7";
    }

    ocho.onclick = function (e) {
        total.innerText = total.innerText + "8";
    }

    nueve.onclick = function (e) {
        total.innerText = total.innerText + "9";
    }

    cero.onclick = function (e) {
        total.innerText = total.innerText + "0";
    }


    punto.onclick = function (e) {
        total.innerText = total.innerText + ".";
    }


    reset.onclick = function (e) {
        total.innerText = total.innerText.slice(0, -1);

    }

    c.onclick = function (e) {
        total.innerText = " ";

    }

    ce.onclick = function (e) {
        total.innerText = " ";
    }

    sumaR.onclick = function (e) {
        valor1 = total.innerText;
        operacion = "sumarr";
        borrar();
    }

    menos.onclick = function (e) {
        valor1 = total.innerText;
        operacion = "restarr";
        borrar();
    }

    multiplicacion.onclick = function (e) {
        valor1 = total.innerText;
        operacion = "multiplicacionrr";
        borrar();
    }

    division.onclick = function (e) {
        valor1 = total.innerText;
        operacion = "divisionrr";
        borrar();
    }

    raiz.onclick = function (e) {
        valor1 = total.innerText;
        operacion = "raices";
        borrar();
    }

    x_2.onclick = function (e) {
        valor1 = total.innerText;
        operacion = "elevado";
        borrar();
    }


    x_1.onclick = function (e) {
        valor1 = total.innerText;
        operacion = "sobre";
        borrar();
    }

    porcentaje.onclick = function (e) {
        valor1 = total.innerText;
        operacion = "porcentajes";
        borrar();
    }

    igual.onclick = function (e) {
        valor2 = total.innerText;
        operadores();
    }
}

function borrar() {
    total.textContent = "";
}

function contadores() {
    total.innerText = "";
    valor2 = 0;
    valor1 = 0;
    operacion = "";
}

function operadores() {

    //valor1 = parseFloat(document.getElementById('valor1').value)
    //valor2 = parseFloat(document.getElementById('valor2').value)
    var res = 0;
    switch (operacion) {
        case "sumarr":
            res = parseFloat(valor1) + parseFloat(valor2);
            break;

        case "restarr":
            res = parseFloat(valor1) - parseFloat(valor2);
            break;

        case "multiplicacionrr":
            res = parseFloat(valor1) * parseFloat(valor2);
            break;

        case "divisionrr":
            res = parseFloat(valor1) / parseFloat(valor2);
            break;

        case "raices":
            res = Math.sqrt(valor1);
            break;


        case "elevado":
            res = Math.pow(valor1, valor2);
            break;

        case "sobre":
            res = Math.trunc(valor1);
            break;
        case "porcentajes":
            res = parseFloat(valor1) * parseFloat(valor2) / 100;
            break;
    }

    contadores();
    total.textContent = res;
}