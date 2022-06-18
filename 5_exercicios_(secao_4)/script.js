/* EXERCICIO 6
let a = "Gelbcke", b = 20, c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
*/

/* EXERCICIO 7
var idade = 18;
if (idade < 18) {
    console.log("A idade desta pessoa é de " + idade + " anos. Ela NÃO pode entrar!");
} else {
    console.log("Pode entrar!");}
*/

/* EXERCICIO 8
const nome = "Gelbcke";
if (nome == "Gelbcke") {
    console.log(`Olá ${nome}! Como você está hoje?`);
}
*/

/* EXERCICIO 9
let potencia1 = Math.pow(2,2), pot2 = Math.pow(3,2), pot3 = Math.pow(18,2);
console.log(`A primeira potência é '${potencia1}', a segunda é '${pot2}' e a última é '${pot3}'!`);
console.log("3 elevado a 2º potência: " + Math.pow(3,2));
*/

/* EXERCICIO 10
let velocidade = 137;
if (velocidade < 80) {
    console.log("Você não recebeu uma multa.");
} else {
    console.log("VOCÊ FOI MULTADO!");}
*/

/* EXERCICIO 11
let idade = 20, cnh = true;
if (idade < 18 && cnh != true) {
    console.log("Você não possui habilitação e nem idade para dirigir!");
} else if (idade >= 18 && cnh == false) {
    console.log("Você possui idade, mas precisa de uma habilitação para dirigir!");
} else if (idade >= 18 && cnh == true){
    console.log("Você possui idade e habilitação, pode dirigir!");
} else if (idade < 18 && cnh != false){
    console.log("Isto é incorreto, pois menores de idade não estão permitidos a receber CNH.");
}
*/

/* VERSAO ALTERNATIVA DO EXERCICIO 11 PENSADA POR MIM
let idade = prompt("Qual é a sua idade?"), cnh = prompt("Você possui CNH?");
if (cnh != "s" && cnh != "S" && cnh != "SIM" && cnh != "sim" && cnh != "Sim" && cnh != "SIm" && cnh != "sIm" && cnh != "sIM" && cnh != "Sim." && cnh != "sim." && cnh != "SIM." && cnh != "sIm." && cnh != "sIM." && idade < 18){
    console.log("Você precisa ser maior de 18 anos e possuir CNH. VOCÊ NÃO PODE DIRIGIR!");
} else if (cnh != "s" && cnh != "S" && cnh != "SIM" && cnh != "sim" && cnh != "Sim" && cnh != "SIm" && cnh != "sIm" && cnh != "sIM" && cnh != "Sim." && cnh != "sim." && cnh != "SIM." && cnh != "sIm." && cnh != "sIM." && idade >= 18){
    console.log("Você possui a idade, mas precisa de habilitação. VOCÊ NÃO PODE DIRIGIR");
} else if (cnh == "s" && cnh == "S" && cnh == "SIM" && cnh == "sim" && cnh == "Sim" && cnh == "SIm" && cnh == "sIm" && cnh == "sIM" && cnh == "Sim." && cnh == "sim." && cnh == "SIM." && cnh == "sIm." && cnh == "sIM." && idade >= 18){
    console.log("Você possui habilitação e tem a idade necessária. PODE DIRIGIR!");
} else if (cnh == "s" && cnh == "S" && cnh == "SIM" && cnh == "sim" && cnh == "Sim" && cnh == "SIm" && cnh == "sIm" && cnh == "sIM" && cnh == "Sim." && cnh == "sim." && cnh == "SIM." && cnh == "sIm." && cnh == "sIM." && idade < 18){
    console.log("Isso está incorreto, você precisa ser maior de 18 anos para possuir habilitação. VOCÊ NÃO PODE DIRIGIR!");
}
*/

/* EXERCICIO 12
let a = 0;
while (a < 10) {
    console.log(a);
    a = a + 1;
}
    console.log(a);
*/

/* EXERCICIO 13
for(let a = 100; a >= 50; a = a - 1){
    console.log(a);
}
*/

/* EXERCICIO 14
for (let a = 0; a < 51; a = a + 1) {
    if (a % 2 == 0) {
        console.log(a);
    }
}
*/

/* EXERCICIO 15
let num = prompt("Digite um número e eu irei verificar se ele é primo ou não.");
let divisoes = 0;

for (let a = 1; a <= num; a = a + 1){
    if (num % a == 0) {
        divisoes++;
    }
}

if (divisoes == 2) {
    console.log(`O valor '${num}' é um número PRIMO.`);
} else {
    console.log(`O valor '${num}' NÃO é um número PRIMO.`);
}
*/