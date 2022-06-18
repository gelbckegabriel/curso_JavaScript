// A VARIÁVEL NOME POSSUI TRÊS ENTRADAS DIFERENTES, POIS ESTÃO EM TRÊS ESCOPOS DIFERENTES (LET, FUNCTION E IF).
let nome = "Gelbcke";

function primeiraFuncao(){
    let nome = "Jubileu";
    console.log(nome);
}

if (true) {
    let nome = "Jubileia";
    console.log(nome);
}

primeiraFuncao();
console.log(nome);