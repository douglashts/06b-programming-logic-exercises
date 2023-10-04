// 4. Faça um programa que mostre todos os números primos de 0 a 100.
// Um número primo é aquele que é dividido apenas por um e por ele mesmo. Entre 0 e 100 existem apenas 25 números primos.

function isPrimo(n) {
    let dividir = 0;
    for (let i=0; i<=n; i++) {
       // console.log(`Numero da Funcao que acha->${i}`);
        if (n % i === 0) {
            dividir ++;
            //console.log(`Numero dividir->${dividir}`);
        }
    }

    if (dividir === 2) {
        return true;
    } else {
        return false;
    }
}

let total = 0;

for(let i=1; i<=100; i++) {
   //console.log(`Numero do For->${i}`);
     if (isPrimo(i)) {
     total ++;
        
        console.log(`O Primeiro ${total} -- Primo->${i}`);
    }
}
 if(total === 25){
    console.log('Esta Correto os 25 numeros Primos...')
 }
