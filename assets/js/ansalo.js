var a1 = document.getElementById('a1');
var b_2 = document.getElementById('b_2');
var c_3 = document.getElementById('c_3');
var d_4 = document.getElementById('d_4');
var e_5 = document.getElementById('e_5');
var f_6 = document.getElementById('f_6');
var g_7 = document.getElementById('g_7');
var h_8 = document.getElementById('h_8');
var i_9 = document.getElementById('i_9');
var j_0 = document.getElementById('j_0');
var reset = document.getElementById('reset');
let mensaje_letras = document.getElementById('mensaje_letras');
let mensaje_numeros = document.getElementById('mensaje_numeros');

let arre_letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let arre_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function letras() {

}

function numeros() {

}


a1.onclick = function (e) {
    if (arre_letras[0] === 'a') {
        mensaje_letras.innerText = mensaje_letras.innerText + "A";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] === 1) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "1";
        swal("El numero seleccionado es el: 1", "¡Continua!");
        arre_numeros.shift();

    }

}


b_2.onclick = function (e) {
    if (arre_letras[0] === 'b') {
        mensaje_letras.innerText = mensaje_letras.innerText + "B";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] === 2) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "2";
        swal("El numero seleccionado es el: 2", "¡Continua!");
        arre_numeros.shift();
    }

}



c_3.onclick = function (e) {
    if (arre_letras[0] === 'c') {
        mensaje_letras.innerText = mensaje_letras.innerText + "C";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] === 3) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "3";
        swal("El numero seleccionado es el: 3", "¡Continua!");
        arre_numeros.shift();
    }

}



d_4.onclick = function (e) {
    if (arre_letras[0] === 'd') {
        mensaje_letras.innerText = mensaje_letras.innerText + "D";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] == 4) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "4";
        swal("El numero seleccionado es el: 4", "¡Continua!");
        arre_numeros.shift();
    }

}




e_5.onclick = function (e) {
    if (arre_letras[0] === 'e') {
        mensaje_letras.innerText = mensaje_letras.innerText + "E";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] == 5) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "5";
        swal("El numero seleccionado es el: 5", "¡Continua!");
        arre_numeros.shift();
    }

}

f_6.onclick = function (e) {
    if (arre_letras[0] === 'f') {
        mensaje_letras.innerText = mensaje_letras.innerText + "F";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] == 6) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "6";
        swal("El numero seleccionado es el: 6", "¡Continua!");
        arre_numeros.shift();
    }

}


g_7.onclick = function (e) {
    if (arre_letras[0] === 'g') {
        mensaje_letras.innerText = mensaje_letras.innerText + "G";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] == 7) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "7";
        swal("El numero seleccionado es el: 7", "¡Continua!");
        arre_numeros.shift();
    }

}



h_8.onclick = function (e) {
    if (arre_letras[0] === 'h') {
        mensaje_letras.innerText = mensaje_letras.innerText + "H";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] == 8) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "8";
        swal("El numero seleccionado es el: 8", "¡Continua!");
        arre_numeros.shift();
    }

}


i_9.onclick = function (e) {
    if (arre_letras[0] === 'i') {
        mensaje_letras.innerText = mensaje_letras.innerText + "I";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] == 9) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "9";
        swal("El numero seleccionado es el: 9", "¡Continua!");
        arre_numeros.shift();
    }

}


j_0.onclick = function (e) {
    if (arre_letras[0] === 'j') {
        mensaje_letras.innerText = mensaje_letras.innerText + "J";
        swal("La letra seleccionada es la:", arre_letras[0]);
        arre_letras.shift();
    } else if (arre_numeros[0] == 0) {
        mensaje_numeros.innerText = mensaje_numeros.innerText + "0";
        swal("El numero seleccionado es el: 0", "¡Felicidades!");
        arre_numeros.shift();
    }

}



reset.onclick = function (e) {
    mensaje_numeros.innerText = " ";
    mensaje_letras.innerText = " ";
}











/*/ ////////////////   TEMA    COLORES  //////////////////////*/


const fondo = document.querySelector('.fondo');

const cambiarTemas = () => {
    const btnTheme = document.querySelectorAll('.theme')

    const cambiarTema = (e) => {
        const targetTema = e.target.id;
        const bordeTarget = e.target;
        console.log(targetTema)

        fondo.className = 'fondo ' + targetTema
        guardarEnStorage(targetTema)
    }

    for (let i = 0; i < btnTheme.length; i += 1) {
        btnTheme[i].addEventListener('click', cambiarTema)
    }
}
const guardarEnStorage = (targetTema) => {
    if (fondo.classList.contains(targetTema)) {
        localStorage.setItem('fondo', targetTema)
    } else {
        localStorage.setItem('fondo', 'light')
    }
}

const cargarTema = () => {
    const temaGuardado = localStorage.getItem('fondo')

    const btnTema = document.getElementById(temaGuardado)

    if (temaGuardado === 'pink') {
        fondo.classList.add('pink')
        btnTema.classList.add('selected')
    } else if (temaGuardado === 'dark') {
        fondo.classList.add('dark')
        btnTema.classList.add('selected')
    } else if (temaGuardado === 'light') {
        fondo.className = 'fondo'
        btnTema.classList.add('selected')
    }


}
cambiarTemas()
cargarTema()