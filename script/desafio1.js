/*1. Escreva um programa que, dado quatro valores, A, B, C e D, imprima o maior e o menor valor*/

// let a = document.getElementById('a');
// let b = document.getElementById('b');
// let c = document.getElementById('c');
// let d = document.getElementById('d');

function numeroMaior(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    }
    else if (b > a && b > c && b > d) {
        return b;
    }
    else if (c > a && c > b && c > d) {
        return c;
    }
    else if (d > a && d > c && d > b) {
        return d;
    }
}
function numeroMenor(a, b, c, d) {
    if (a < b && a < c && a < d) {
        return a;
    }
    else if (b < a && b < c && b < d) {
        return b;
    }
    else if (c < a && c < b && c < d) {
        return c;
    }
    else if (d < a && d < c && d < b) {
        return d;
    }
}

function apertarBotao() {
    document.querySelector('#resultado').innerHTML = 'RESULTADO <br> Número maior: ' +
    numeroMaior(10, 27, 21, 12) + '<br>Número menor: ' +
    numeroMenor(17, 15, 32, 40);
}

// numeroMenor(a, b, c, d);

// numeroMaior(a, b, c, d);