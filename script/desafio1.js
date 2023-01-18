/*1. Escreva um programa que, dado quatro valores, A, B, C e D, imprima o maior e o menor valor*/

let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
document.getElementById('resultado').innerHTML = 'Resultado: '+ numeroMaior + numeroMenor;

function numeroMaior(a, b, c, d) {
    if (a > b && a > c && a > d) {
        console.log(a);
    }
    else if (b > a && b > c && b > d) {
        console.log(b);
    }
    else if (c > a && c > b && c > d) {
        console.log(c);
    }
    else if (d > a && d > c && d > b) {
        console.log(d);
    }
}
function numeroMenor(a, b, c, d) {
    if (a < b && a < c && a < d) {
        console.log(a);
    }
    else if (b < a && b < c && b < d) {
        console.log(b);
    }
    else if (c < a && c < b && c < d) {
        console.log(c);
    }
    else if (d < a && d < c && d < b) {
        console.log(d);
    }
}

numeroMenor(a, b, c, d);

numeroMaior(a, b, c, d);


