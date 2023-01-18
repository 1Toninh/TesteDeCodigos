/*
2. Dados três valores distintos, fazer um algoritmo que, após a leitura destes dados imprima-os em ordem crescente.*/

let numeros = []
for(let i = 0; i < 3; i++) {
    numeros[i] = prompt("Informe um número: ");
}

numeros.sort();

for (let i = 0; i < numeros.length; i++) {

    console.log(numeros[i]);
}
