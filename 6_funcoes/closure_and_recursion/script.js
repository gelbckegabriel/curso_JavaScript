// CLOSURE É BEM UTILIZADO PARA SIMULAR METODOS PRIVADOS DO JS - ORIENTADO A OBJETOS.
function lembrarSoma (a) {
    return function (b) {
        return a + b
    }
}

let soma1 = lembrarSoma(5);
console.log(soma1(5));
let soma2 = lembrarSoma(10);
console.log(soma2(90));

// RECURSION É UTILIZADO PARA CHAMAR UMA FUNÇÃO NOVAMENTE.
function converterEmPar (n){
    if (n % 2 == 0) {
        console.log("'N' agora é par: " + n)
    } else {
        console.log(n)
        converterEmPar(n - 1);
    }
}

converterEmPar(33);