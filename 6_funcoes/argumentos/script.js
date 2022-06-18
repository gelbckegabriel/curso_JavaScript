function soma (a,b) {
    if (a === undefined || b === undefined) {
        console.log("Os dois argumentos precisam ser preenchidos!")
    } else {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(5,5));

/*function soma (a,b) {
    a = Number(prompt("Digite um valor:"));
    b = Number(prompt("Digite outro valor:")); 
    if (a === undefined || b === undefined) {
        console.log("Um valor não foi preenchido!")
    } else {
        console.log(`A soma dos valores é: ${a+b}.`)
    }
}

soma();*/

// ARGUMENTO DEFAULT
function repetirFrase (frase, n=5) {
    for (let a = 1; a <= n; a++) {
        console.log(frase + " " + a);
    }
}

repetirFrase("Testando", 3);
repetirFrase("Mais 5 vezes.");