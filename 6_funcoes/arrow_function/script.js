let parOuImpar = (num) => {;
    if (num % 2 == 0){
        console.log("Este número é PAR!");
    } else {
        console.log("Este número é IMPAR!");
    }
};

let raizQuadrada = a => a * a;

parOuImpar(4);
console.log(raizQuadrada(6));

/* TESTE
function parOuImpar (a) {
    let num = prompt();
    if (num == 0) {
        console.log("Este número é igual a ZERO!");
    } else if (num % 2 > 0){
        console.log("Este número é IMPAR!");
    } else if (num % 2 == 0){
        console.log("Este número é PAR!");
    }
}

parOuImpar();
*/