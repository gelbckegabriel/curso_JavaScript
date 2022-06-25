// MÉTODOS.
let cachorro = {
    pata: 4,
    genero: "masculino",
    raca: "SRD - Sem Raça Definida",
    latir: function () {
        console.log("Au Au");
    },
    setRaca: function(novaRaca) {
        this.raca = novaRaca
    },
    getRaca: function() {
        return "A raça é: " + this.raca;
    }
}
console.log(cachorro.genero);
cachorro.latir();

cachorro.setRaca("labrador")
console.log(cachorro.getRaca())

// PROTOTYPES.
let pessoa = {
    maos: 2
}
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
console.log(pessoa.hasOwnProperty('maos')) // conforme campo verificado em OBJECT (pai do pessoa == object).

// CRIAÇÃO DE UM NOVO OBJETO A PARTIR DE OUTRO. O NOVO IRÁ HERDAR OS MÉTODOS E PROPRIEDADES DO PROTOTYPE DO OBJETO BASE, QUANTO DO OBJETO BASE PARA O NOVO.
let pessoaNova = Object.create(pessoa);

console.log(pessoaNova);
console.log(Object.getPrototypeOf(pessoaNova));
console.log(pessoaNova.maos); // IRÁ APRESENTAR O VALOR 2, POIS ELE ESTÁ PUXANDO A INFORMAÇÃO DO SEU PROTOTYPE.
console.log(pessoaNova.hasOwnProperty('maos')) // RETORNARÁ FALSE, POIS O PESSOANOVA EM SI NÃO POSSUI O ATRIBUTO MAOS.
console.log(Object.getPrototypeOf(pessoaNova) == pessoa)

// CLASSES
let gato = {
    pata: 4,
    especie: "felino",
    raca: "Sem Raça Definida.",
    miar: function(){
        console.log("Miau!")
    }
}
let snowShoes = Object.create(gato)
snowShoes.raca = "SnowShoes"

console.log("O gato tem " + snowShoes.pata + " patas e a raça dele é " + snowShoes.raca)
snowShoes.miar()

// CONSTRUTOR POR FUNÇÃO - CLASSES.
function criarGatos_Funcao (raca) {
    let gato = Object.create({});
    gato.raca = raca
    return gato
}
let siames = criarGatos_Funcao("siames");
console.log("O gato tem " + siames.pata + " patas e a raça dele é " + siames.raca);

// CONSTRUTOR POR NEW - CLASSES.
function criarGatos_New (raca) {
    this.raca = raca;
}
let sphynx = new criarGatos_New('Sphynx');
console.log(sphynx.raca)

// CONSTRUTOR COM MÉTODO - CLASSES.
function Maratonista (sexo) {
    this.sexo = sexo;
}
Maratonista.prototype.correr = function () {
    console.log("Correr!"); 
}
let corredor = new Maratonista("homem")

corredor.correr();
console.log(corredor.sexo)

// CONSTRTUTOR NA CLASSE (ATUALIZAÇÃO PARA ES6).
class Smartphone {
    constructor(marca) {
        this.marca = marca;
    }
}
let apple = new Smartphone("Apple")
console.log(apple.marca)

// OVERRIDE NAS PROPRIEDADES DO PROTOTYPE.
Smartphone.prototype.marca = "Sem marca";
console.log(apple.marca);
console.log(Smartphone.prototype.marca);

// MÉTODOS E PROPRIEDADES EM UMA CLASS.
class urso {
    constructor (raca) {
        this.raca = raca;
    }
    comer() {
        console.log('Comer banana');
    }
}

urso.prototype.patas = 4;

let panda = new urso('panda', 'preto e branco');

console.log(panda.patas)

// SYMBOLS.
let pesoMedio = Symbol();
urso.prototype[pesoMedio] = 95;

console.log(urso.prototype[pesoMedio] + "kg"); // acessando o symbol - apenas via prototype.

// GETTERS AND SETTERS.
class garrafa {
    constructor(tipo) {
        this.tipo = tipo;
    }
    get verTipo() {
        return 'O tipo desta garrafa é de ' + this.tipo;
    }
    set novoTipo(value) {
        this.tipo = value;
    }
}

let plastica = new garrafa ('plástico.')
console.log(plastica.verTipo)

garrafa.novoTipo = "vidro.";
console.log(garrafa.verTipo)

// HERANÇA.
class mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coelho = new mamifero(4);
console.log(coelho);

class animaisSelvagens extends mamifero { // extends é utilizado para dar herança a uma classe, herdando suas propriedades.
    constructor (patas, especie, cor) {
        super(patas, patas) // super é utilizado para acessas as propriedades da classe pai.
        this.especie = especie;
        this.cor = cor;
    }
}

let coiote = new animaisSelvagens(4, "coiote", "cinza")
console.table(coiote)

// INSTANCE OF.
console.log(new animaisSelvagens instanceof mamifero) // utilizado para identificar quem é o pai do objeto.
console.log(new mamifero instanceof animaisSelvagens)