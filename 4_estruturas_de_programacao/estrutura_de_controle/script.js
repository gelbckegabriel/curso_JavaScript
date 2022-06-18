// ESTRUTURA SIMPLES DE "IF" E "ELSE".
let idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
    console.log("Você está autorizado a acessar este site!");
}  else {
    console.log("Você não está permitido a ver o conteúdo deste site!");
}

// ESTRUTURA COMPLETA COM "IF, "ELSE IF" E "ELSE".
let a = 9, b = 2;

if(a + b == 20){
    console.log("Seu resultado é '20'.");
} else if(a + b == 10){
    console.log("Seu resultado é igual a '10'.")
} else {
    console.log("Nenhuma das opções acima.");
}