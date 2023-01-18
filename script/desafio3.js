
/*3. Faça um algoritmo que leia um número inteiro e mostre uma mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo.*/

let num = document.getElementById('a');
document.getElementById('resultado').innerHTML = 'Resultado: '+ num;

if (Math.sign(num) == 1 && num % 2 == 0){
		console.log(`O número ${num} é positivo e par`);
}

else if (Math.sign(num) == 1 && num % 2 != 0){
    console.log(`O número ${num} é positivo e ímpar`);
}

else if (Math.sign(num) == -1 && num % 2 == 0){
    console.log(`O número ${num} é negativo e par`);
}

else if (Math.sign(num) == -1 && num % 2 != 0){
        console.log(`O número ${num} é negativo e ímpar`);
}

else if (Math.sign(num) == 0){
        console.log(`O número ${num} não é positivo, negativo, par ou ímpar. `);
}

else{
    console.log("O número informado é inválido ")
}


