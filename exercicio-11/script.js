// 11-Faça um programa que recebe a altura de um triangulo em um número inteiro e imprima-o utilizando asteriscos.

const input = prompt('Digite um número inteiro:', '5');

let result = '';
for(let i=1; i<=input; i++) {
    for(let j=1; j<=i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);