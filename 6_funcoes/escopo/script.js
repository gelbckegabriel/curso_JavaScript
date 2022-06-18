// O QUE ESTÁ DENTRO DE UMA FUNÇÃO É SEPARADO DO ESCOPO GLOBAL / TUDO QUE ESTÁ ENTRE CHAVES É UM NOVO ESCOPO.
let a = 10

function funcao1() {
    let a = 20  // escopo function
    console.log(a);
}

funcao1();
console.log(a);  // escopo global

let b = 5;
if (true) {
    let b = 15;
    console.log(b); // escopo if
}
console.log(b); // escopo global

function teste(a,b,c) {
    return b + c + a
}

console.log(teste("Nome", ": ", "Gabriel"));