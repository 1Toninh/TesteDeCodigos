/*1. Escreva um programa que, dado quatro valores, A, B, C e D, imprima o maior e o menor valor*/

let a = prompt("Digite um número");
let b = prompt("Digite um número");
let c = prompt("Digite um número");
let d = prompt("Digite um número");

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


/*2. Dados três valores distintos, fazer um algoritmo que, após a leitura destes dados imprima-os em ordem crescente.*/

var numero = []
for(var i = 0; i < 3; i++) numero[i] = prompt("Informe um número: ");
numero.sort();
for (var i = 0; i < 3; i++) console.log(numero[i]);


/*3. Faça um algoritmo que leia um número inteiro e mostre uma mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo.
*/
let num = prompt("Digite um número: ");
	if (num < 0){
		console.log(`Este número ${num} é negativo`);
	}
	else if (num >= 0){
		console.log(`Este número ${num} é positivo`);
	}
	if (num % 2 == 0){
		console.log(`Número ${num} é par`);
	}
	else if (num % 2 != 0){
		console.log(`Número ${num} é impar`);
	}

