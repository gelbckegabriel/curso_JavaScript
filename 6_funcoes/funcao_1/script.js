function ativandoFuncao() {
    console.log("Olá, mundo!");
}

ativandoFuncao();

const funcaoPorVariavel = function() {
    console.log("Esta função é uma variável aleatória. Número: " + Math.random());
}

funcaoPorVariavel();
funcaoPorVariavel();

let funcaoPorParametro = function(numero) {
    console.log("O valor digitado por parâmetro é: " + numero);
}

funcaoPorParametro(20);
funcaoPorParametro(10);