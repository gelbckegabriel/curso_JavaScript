/* EXERCICIO 26 - CRIE UM ARRAY COM 5 ITENS E ACESSE O ITEM 1,3,4.
let arrayFetch = [1,2,3,4,5];
console.log(arrayFetch[0], arrayFetch[2], arrayFetch[3]);*/

/* EXERCICIO 27 - CRIE UM ARRAY COM 2 ELEMENTOS E OUTRO COM 4, IMPRIMA A QNTD DE ELEMENTOS DE CADA.
let arrayElements1 = ["Java", "Script"]
let arrayElements2 = [1,2,3,4]

console.log(arrayElements1.length);
console.log(arrayElements2.length);*/

/* EXERCICIO 28 - CRIE UM OBJETO COM AS PROPRIEDADES DEFINIDAS E AS IMPRIMA NO CONSOLE.
let onibus = {
    rodas: 8,
    limite_de_passageiros: 40,
    portas: 3
}
console.log(onibus.rodas)
console.log(onibus.limite_de_passageiros)
console.log(onibus.portas)
console.log(onibus)

// EXERCICIO 29 - ADICIONE (+IMPRIMA ESTA PROPRIEDADE) E DELETE UMA PROPRIEDADE DO OBJETO.
delete onibus.rodas;
onibus.janelas = 20;
console.log(onibus.janelas)*/

/* EXERCICIO 30 - CRIE UM ARRAY COM 5 NOMES E VERIFIQUE SE O SEU EXISTE, CASO EXISTA, IMPRIMA ALGO NO CONSOLE.
let nomes = ["João", "Gelbcke", "Alysson", "Pedro", "Ozorio"]

for (let i = 0; i < nomes.length; i++){
    if (nomes[i] == "Gelbcke") {
        console.log("O seu nome existe - LOOP 'FOR'.")
    }
}
if (nomes.includes("Gelbcke")) {
    console.log("O seu nome existe - CONDIÇÃO 'IF'")
}*/

/* EXERCICIO 31 - CRIE DOIS ARRAYS, UM COM MENOS DE 5 ELEMENTOS E OUTRO COM MAIS, FAÇA UMA FUNÇÃO QUE VERIFICA O NÚMERO DE ELEMENTOS E IMPRIMA INFORMAÇÕES DIVERGENTES SOBRE O QUE TEM MENOS DE 5 PARA O QUE TEM MAIS DE 5.
let array1 = [1,2,3]
let array2 = [1,2,3,4,5,6]

function contArray(contador) {
    if (contador.length < 5) {
        console.log("O array possui poucos números")
    } else {
        console.log("O array possui muitos números")
    }
}
contArray(array2);
contArray(array1);*/

/* EXERCICIO 32 - CRIE UM ARRAY COM 5 ELEMENTOS E FACA UMA ITERAÇÃO COM TODOS E IMPRIMA-OS.
let iteracao = [1,2,3,4,5]
iteracao.forEach(numero => {
    console.log("número é " + numero)
});*/

/* EXERCICIO 33 - CRIE UM JSON, ATRIBUA ELE A UMA VARIAVEL E ACESSE AS PROPRIEDADES AS IMPRIMINDO EM UM CONSOLE.
let jsonVariable = {
    "nome": "Gabriel",
    "profissao": "Auxiliar",
    "idioma": "PT-BR"
}
console.log(jsonVariable);
console.log(jsonVariable.profissao);*/

/* EXERCICIO 34 - CRIE UM ARRAY A PARTIR DE UMA FRASE E IMPRIMA CADA PALAVRA DO ARRAY POR MEIO DE UM LOOP.
let frase = "Meu nome é Gabriel";
let arrayFrase = frase.split(" ");
let i = 0;
while (i < arrayFrase.length) {
    console.log(arrayFrase[i])
    i = i + 1;
}*/

/* EXERCICIO 35 - CRIE UM OBJ CALCULADORA, QUE TEM OS MÉTODOS SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR, CADA MÉTODO SÓ PODE ACEITAR DOIS PARAMETROS, UTILIZE CADA UM DOS MÉTODOS.
let calculadora = {
    soma: function (a,b) {
        return a+b
    },
    subtracao: function (a,b) {
        return a-b
    },
    multiplicacao: function (a,b) {
        return a*b
    },
    divisao: function (a,b) {
        return a/b
    }
}
console.log(calculadora.soma(8,5))
console.log(calculadora.subtracao(8,5))
console.log(calculadora.multiplicacao(8,5))
console.log(calculadora.divisao(8,5))*/