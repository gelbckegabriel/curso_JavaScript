function multiplicarPorTres (a,b,c) {
    return a*b*c; // se utilizar return a*c, o número 2 será ignorado na invocação.
}

console.log(multiplicarPorTres(1,2,3));

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir!")
    } else {
        console.log("Não pode dirigir");
    }
}

podeDirigir(18, 1); // ao invés de "true" ou "false", pode-se utilizar "0" para F e "1" para T.

function teste(a,b,c) {
    return b + c + a
}

console.log(teste("Nome", ": ", "Gabriel"));