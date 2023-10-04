// 3-Faça um programa que recebe um número inteiro e mostre a contagem de 1 até tal número.
const target = window.prompt('Digite um número inteiro:', '10');
const itensretorno = document.getElementById('retorno');

for (let i=1; i<=target; i++) {
    const result = `O Numero e ->: ${i}\n`;
    console.log(result);

    const htmlderetorno = document.createElement('li');
    
    htmlderetorno.classList.add('h2-retorno');
    
    const textodoh2 = document.createTextNode(result);
   
    htmlderetorno.appendChild(textodoh2);
    
    itensretorno.appendChild(htmlderetorno);
}