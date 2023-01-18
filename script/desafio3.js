
/*3. Faça um algoritmo que leia um número inteiro e mostre uma mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo.*/

let num = document.getElementById('a');

function mensagem(num) {
    if (Math.sign(num) == 1 && num % 2 == 0) {
        return `O número ${num} é positivo e par`;
    }
    
    else if (Math.sign(num) == 1 && num % 2 != 0) {
        return `O número ${num} é positivo e ímpar`;
    }
    
    else if (Math.sign(num) == -1 && num % 2 == 0) {
        return `O número ${num} é negativo e par`;
    }
    
    else if (Math.sign(num) == -1 && num % 2 != 0) {
        return `O número ${num} é negativo e ímpar`;
    }
    
    else if (Math.sign(num) == 0) {
        return `O número ${num} não é positivo, negativo, par ou ímpar. `;
    }
    
    else {
        return "O número informado é inválido ";
    }
}

function resultado() {
    document.getElementById('resultado').innerHTML = 'Resultado: <br>' + mensagem(200);
}