// EXERCICIO 36 - CRIAR UMA CLASSE QUE SIMULA UMA CONTA NO BANCO (ADD. PROPRIEDADE SALDO + METODOS DE DEPOSITO E SAQUE).
class contaBancaria {
        constructor(saldo) {
        this.saldo = saldo;
    }

    sacar(value) {
        console.log(`O valor sacado foi de R$${value}. SALDO REMANESCENTE: R$ ${this.saldo -= value}`);
    }

    depositar(value) {
        console.log(`O valor de depósito foi de R$${value}. SALDO TOTAL: R$ ${this.saldo += value}`);
    }

}

let contaGelbcke = new contaBancaria(1000);

contaGelbcke.depositar(150)
console.log()
contaGelbcke.sacar(679)

// EXERCICIO 37 - SIMULAR UM CARRINHO VIRTUAL E-COMMERCE COM UMA CLASSE. ADD PROPRIEDADES ITENS, QNTD. TOTAL E VALOR TOTAL. ADD METODOS P/ ADICIONAR E REMOVER ITENS.
class carrinhoVirtual {
    constructor(itens, qntd, valorTotal) {
        this.itens = itens;
        this.qntd = qntd;
        this.valorTotal = valorTotal;
    }

    adicionar(item) {
        
        let contador = 0;
        
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qntd += item.qntd;
                contador = 1;
            }
        }

        if (contador == 0) {
            this.itens.push(item);
        }

        this.qntd += item.qntd;
        this.valorTotal += item.preco * item.qntd 

    }
    
    remover(item) {

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
              
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) {return obj.id == item.id});

                this.qntd -= item.qntd;
                this.valorTotal -= item.preco * item.qntd;

                this.itens.splice(index, 1);

            }
        }
    }
}

let carrinho = new carrinhoVirtual([
    {
        id: 01,
        nome: 'camisa',
        qntd: 1,
        preco: 30
    },
    {
        id: 02,
        nome: 'shorts',
        qntd: 3,
        preco: 137.70
    },
    {
        id: 03,
        nome: 'cueca',
        qntd: 5,
        preco: 100
    },
    {
        id: 04,
        nome: 'jaqueta',
        qntd: 1,
        preco: 200
    },
    {
        id: 05,
        nome: 'tênis',
        qntd: 2,
        preco: 399.99
    }
], 12, 867,69)

console.log(carrinho)

carrinho.adicionar({id:1, nome:'camisa', qntd:3, preco:30})

console.log(carrinho)

carrinho.adicionar({id:6, nome:'boné', qntd:2, preco:20})

console.log(carrinho)

carrinho.remover({id:3, nome:'cueca', qntd:4, preco:20})

console.log(carrinho)

// EXERCICIO 38 - CRIAR UM OBJ SIMULANDO ENDEREÇO DE CLIENTE. PROPRIEDADES: RUA, BAIRRO, CIDADE E ESTADO. NO CONTRUTOR O ENDEREÇO JÁ DEVE ESTAR DEFINIDO POR COMPLETO, CRIAR MÉTODOS PARA ATUALIZAR TODAS AS PROPRIEDADES.
class enderecoCliente {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua
    }
    set novoBairro(novoBairro) {
        this.bairro = novoBairro
    }
    set novaCidade(novaCidade) {
        this.cidade = novaCidade
    }
    set novoEstado(novoEstado) {
        this.estado = novoEstado
    }
}

let josefinaSantos = new enderecoCliente("Rua da Cidadania", "Vila Alegre", "Curitiba", "PR")

console.log(josefinaSantos);

josefinaSantos.novaRua = "Rua da Olaria";
josefinaSantos.novoBairro = "Vila dos Maringuenses";
josefinaSantos.novaCidade = "Maringá";

console.log(josefinaSantos)

// EXERCICIO 39 - CLASSE SIMULANDO UM CARRO. PROPRIEDADES: MARCA, COR, GASOLINA RESTANTE. METODO DE DIRIGIR O CARRO QUE VÁ DIMINUINDO A GASOLINA GRADATIVAMENTE + UM DE ABASTECIMENTO PARA AUMENTAR A GASOLINA QUANDO NECESSÁRIO.
class carro {
    constructor(marca, cor, restGasolina, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.restGasolina = restGasolina;
        this.consumo = consumo;
    }

    dirigir(km) {
        
        let litrosConsumidos = km / this.consumo;

        this.restGasolina -= litrosConsumidos

    }
    abastecer(quantidade){
        this.restGasolina += quantidade;
    }

}

let carroDosSonhos = new carro ("BMW 330E", "Azul Portimao", 100, 14)

console.log(carroDosSonhos);

carroDosSonhos.dirigir(1350)

console.log(carroDosSonhos);

carroDosSonhos.abastecer(50);

console.log(carroDosSonhos);

// EXERCICIO 40 - CRIAR CLASSE CONTA BANCARIA. PROPRIEDADES: SALDO NA CONTA, SALDO NA POUPANÇA E JUROS DA POUPANÇA. METODOS DEPÓSITO E SAQUE + TRANSFERIR DINHEIRO DA POUPANÇA PARA A CONTA CORRENTE. CRIAR CONTA ESPECIAL QUE HERDA DA CONTA NORMAL, NA CONTA HERDADA OS JUROS SÃO DOBRADOS DA CONTA NORMAL.
class bancoPoupanca {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }
    depositar(valor){
        console.log(`Foi realizado um depósito no valor de R$${valor}. SALDO TOTAL: R$ ${this.saldoCorrente += valor}`)
    }
    sacar(valor){
        console.log(`Foi realizado um saque no valor de R$${valor}. SALDO REMANESCENTE: R$ ${this.saldoCorrente -= valor}`)
    }
    tranfEntreContasCP_CC(valor){
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;

        console.log(`Foi realizada uma transferência da conta poupança para a conta corrente no valor de R$ ${valor} \n SALDO CONTA CORRENTE: R$ ${this.saldoCorrente} \n SALDO CONTA POUPANÇA: R$ ${this.saldoPoupanca}`)
    }
    tranfEntreContasCC_CP(valor){
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;

        console.log(`Foi realizada uma transferência da conta corrente para a conta poupança no valor de R$ ${valor} \n SALDO CONTA CORRENTE: R$ ${this.saldoCorrente} \n SALDO CONTA POUPANÇA: R$ ${this.saldoPoupanca}`)
    }
    jurosdeAniversário(){
        let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100;
        this.saldoPoupanca += juros
    }
}

class contaEspecial extends bancoPoupanca {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        super (saldoCorrente, saldoPoupanca, jurosPoupanca*2)
    }
}

let gabrielGelbcke = new bancoPoupanca(750, 25000, 0.8333)

console.log(gabrielGelbcke)

// DEPOSITAR
gabrielGelbcke.depositar(250)

console.log(gabrielGelbcke)

// SACAR
gabrielGelbcke.sacar(200)

console.log(gabrielGelbcke)

// TRANSFERÊNCIA ENTRE CONTAS (POUPANÇA PARA CORRENTE)
gabrielGelbcke.tranfEntreContasCP_CC(6000)

console.log(gabrielGelbcke)

// TRANSFERÊNCIA ENTRE CONTAS (CORRENTE PARA POUPANÇA)
gabrielGelbcke.tranfEntreContasCC_CP(1000)

console.log(gabrielGelbcke)

// JUROS ANIVERSÁRIO - CONTA POUPANÇA
gabrielGelbcke.jurosdeAniversário();

console.log(gabrielGelbcke)

// CRIAÇÃO DE CONTA ESPECIAL
let gabrielGelbckeEspecial = new contaEspecial(1300, 50000, 0.8333);

console.log(gabrielGelbckeEspecial)

// SACAR DA CONTA ESPECIAL
gabrielGelbckeEspecial.sacar(1179)

console.log(gabrielGelbckeEspecial)

// JUROS DE ANIVERSARIO DA CONTA ESPECIAL

gabrielGelbckeEspecial.jurosdeAniversário();

console.log(gabrielGelbckeEspecial);