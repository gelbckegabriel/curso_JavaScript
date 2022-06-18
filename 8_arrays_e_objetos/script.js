// ARRAYS - []
let numbers = [1, 5, 17, 35];
let strings = ["Eu", "Estou", "Programando"];
let boolean = [true, false, true];

let misturado = ["Gelbcke", 20, true, "namorando"];

// IMPRIME TODOS OS ELEMENTOS DO ARRAY.
console.log(numbers);
console.log(strings);
console.log(boolean);
console.log(misturado);

// IMPRIME UM ELEMENTO ESPECIFICO DO ARRAY - O PRIMEIRO É IGUAL A "O".
console.log(misturado[0]);
console.log(strings[2]);
console.log(numbers[numbers.length-2]); // LENGHT DARÁ A QUANTIDADE TOTAL DE ELEMENTOS, SUBTRAINDO 2 IRÁ DAR O NÚMERO 2 == "17".

// PROPRIEDADES.
console.log(misturado[0].length);
console.log(strings[strings.length-1].length);

// MÉTODOS.
let marcas = ["Adidas", "Puma", "Nike", "HURLEY"];

console.log(marcas[0].toUpperCase())
console.log(marcas[3].toLowerCase())

// OBJETOS (parecidos com arrays, porém, mais organizados) - {}.
let pessoa = {
    nome: "Gelbcke",
    profissao: "Programador",
    idade: 20,
    desejo: function() {
        console.log("O " + pessoa.nome + " deseja ser um " + pessoa.profissao + " de sucesso!") // METODO!
    }
}
console.log(pessoa.nome);
pessoa.desejo();

// EXCLUSÃO + ADIÇÃO DE OBJETOS.
let car = {
    brand: "BMW",
    doors: 4,
    eletric: false,
    GPS: true,
    auto_pilot: false
}
delete car.auto_pilot;
console.log(car.auto_pilot);
car.rooftop = true;
console.log(car.rooftop);

// ADICIONANDO OBJETOS DE UMA VARIÁVEL PARA OUTRA.
let variable1 = {
    test1: "I´m ",
    test2: "practicing ",
}
let variable2 = {
    test3: "this function!"
}
Object.assign(variable1, variable2); console.log(variable1);

// VERIFICADOR DAS CHAVES DO OBJETO.
console.log(Object.keys(car));

// MUTAÇÃO / MUTABILITY - TORNAR VARIÁVEIS IDÊNTICAS.
let objetoa = {
    pontos: 10
}
    objetob = objetoa;

let objetoc = {
    pontos: 10
}
console.log(objetoa == objetob) //true
console.log(objetoa == objetoc) //false

// LOOPS EM ARRAYS.
let numeros = [1, 5, 10, 27, 39];

for (let i = 0; i <= numeros.length; i++) {
    console.log(numeros[i]);
}

// MÉTODOS DE ARRAYS.

// POP E PUSH: ADIÇÃO DE ELEMENTOS NO FINAL (PUSH) E REMOÇÃO DO ÚLTIMO ELEMENTO (POP) EM ARRAYS.
let funcionarios = ['Jorge', 'Crislaine', 'Gelbcke', 'Ana'];
let removerfuncionarios = funcionarios.pop();
console.log(removerfuncionarios)
funcionarios.push('Edemilson')
console.log(funcionarios)

// SHIFT E UNSHIFT: ADIÇÃO DE ELEMENTOS NO INICIO (UNSHIFT) E REMOÇÃO DO PRIMEIRO ELEMENTO (SHIFT) EM ARRAYS.
let funcionarios2 = ['Jorge', 'Crislaine', 'Gelbcke', 'Ana'];
let removerfuncionarios2 = funcionarios2.shift();
console.log(removerfuncionarios2)
funcionarios2.unshift('Edemilson')
console.log(funcionarios2)

// INDEXOF E LASTINDEXOF: ENCONTRA O INDICE DO PRIMEIRO ELEMENTO (INDEXOF) E ENCONTRA O ULTIMO ELEM. (LASTINDEXOF).
let valores = [0, 1, 2, 1, 0]

console.log(valores.indexOf(1));
console.log(valores.lastIndexOf(1));

// SLICE: RETORNA UM ARRAY A PARTIR DE OUTRO ARRAY - FAZ POR INTERVALO DO 1º AO 2º PARAMETRO OU DO PARAMETRO ATÉ O FINAL.
let numeros2 = [0,1,2,3,4,5];
console.log(numeros2.slice(2,3));
console.log(numeros2.slice(3));

// FOREACH: ITERA CADA ELEMENTO DO ARRAY.
let nomes = ["Gelbcke", "Josefina", "Jubileu", "Jodiscreia"]
nomes.forEach(nome => {
    console.log("O nome é " + nome);
});

// INCLUDES: VERIFICA SE O ARRAY POSSUI UM DETERMINADO ELEMENTO.
console.log(nomes.includes("Gelbcke"));

// REVERSE: INVERTE UM ARRAY.
console.log(nomes.reverse());

// MÉTODOS DE STRINGS.

// TRIM: REMOVE TUDO QUE NÃO É STRING (APENAS UMA PALAVRA).
let trimTest = "  \n Gelbcke  ";
console.log(trimTest.trim());

// PADSTART E PADEND: INSERE CARACTERES EM UMA STRING.
let milAoContrario = "1";
console.log(milAoContrario.padStart(4, "0"));
let mil = milAoContrario.padEnd(4, "0")
console.log(mil);

// SPLIT: DIVIDE UMA STRING POR UM SEPARADOR E RETORNA UM ARRAY.
let frase = "Meu nome é legal"
let palavras = frase.split(" ")
console.log(palavras)

// JOIN: JUNTA UM ARRAY EM UMA FRASE POR MEIO DE UM SEPARADOR.
let joinTest = palavras.join("<->")
console.log(joinTest)

// REPEAT: REPETE UMA STRING COM UM PARÂMETRO NUMBER;
console.log(joinTest.repeat(3))

// REST OPERATOR - CONVERTE EM ARRAY.
let num1 = 1, num2 = 2, num3 =3;
function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
    }
};
imprimirNumeros(num1, num2, num3);

// DESTRUCTURING - DEFINE VARIAVEIS COM PROPRIEDADES DO OBJETO.
const pessoaDestructured = {
    nome: "Gabriel",
    sobrenome: "Gelbcke",
}
const {nome: name1, sobrenome: lastname1} = pessoaDestructured;
console.log(name1);
console.log(lastname1);

// DESTRUCTURING EM ARRAYS - DEFINE VARIAVEIS COM PROPRIEDADES DO OBJETO.
let mistoArray = ["Gabriel", "gabrielgelbcke@gmail.com", "Rua da Cidadania, 274", 20];
let [nome, email, endereco, idade] = mistoArray;
console.log(`O nome do cliente é '${nome}', o email dele é '${email}', ele possui '${idade}' anos e mora na '${endereco}'.`);

// JSON - JavaScript Object Notation.
let funcionario = {
    "name": "Gabriel",
    "age": 20,
    "position": "Junior",
    "languages": ["JavaScript", "English", "Portuguese"]
}

// CONVERTER JSON PARA STRING.
let jsonToString = JSON.stringify(funcionario);
console.log(jsonToString);

// CONVERTER STRING PARA JSON.
let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson); 