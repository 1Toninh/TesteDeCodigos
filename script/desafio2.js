/*
2. Dados três valores distintos, fazer um algoritmo que, após a leitura destes dados imprima-os em ordem crescente.*/


// let valor1 = document.getElementById('a');
// let valor2 = document.getElementById('b');
// let valor3 = document.getElementById('c');

function ordemCrescente(valor1, valor2, valor3) {
    let numeros = [valor1, valor2, valor3]
    

    document.getElementById('resultado').innerHTML = 'Resultado: <br>' + numeros.sort();
}

function imprima() {
    ordemCrescente(25, 10, 78);
}