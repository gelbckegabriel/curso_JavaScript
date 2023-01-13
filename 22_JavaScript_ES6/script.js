// LET AND CONST CHANGES - A CRIAÇÃO DE UMA NOVA VARIÁVEL 'LET' EM UM ESCOPO NÃO INTERFERE A VARIÁVEL DE OUTRO ESCOPO.
let a = 5;
let b = 15;

if(b > 10) {
    let a = 10;
    console.log(a);
};
console.log(a);

// ARROW FUNCTIONS - FUNCIONA DE FORMA DIFERENTE DE UMA FUNÇÃO E O THIS DELA É RELACIONADO AO ELEMENTO PAI DE QUEM ESTÁ EXECUTANDO.
const sum = function sum(a,b) {
    return a + b;
}

const arrowSum = (a,b) => a + b ;

const arrowTest = () => console.log('Test');

const user = {
    name: 'Gelbcke',
    sayUserName() {
        var self = this;
        setTimeout(function () {
            console.log(self);
            console.log('Username: ' + self.name);
        }, 500);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log('Username: ' + this.name);
        }, 800);
    }
}

console.log(sum(10, 10));
console.log(arrowSum(10, 10));

arrowTest();

user.sayUserName();
user. sayUserNameArrow();

// FILTER METHOD (ARRAY) - APLICA FILTROS E CONVERTE UM NOVO ARRAY/RESULTADO CONFORME A CONDIÇÃO ESTABELECIDA.
const array = [2, 5, 3, 6, 1, 8, 10, 4];

const highNumbersArray = array.filter((n) => {
    if(n >= 5) {
        return n;
    }
});
console.log(highNumbersArray);

const users = [
    { name: 'Gelbcke', available: false },
    { name: 'Jubileu', available: true },
    { name: 'Judiscreia', available: false },
    { name: 'Judileine', available: true }
]
const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);
console.log(availableUsers);
console.log(notAvailableUsers);

// MAP METHOD (ARRAY) = PERCORRE TODOS OS ELEMENTOS DO ARRAY E É UTILIZADO PARA MODIFICAR DADOS.
const products = [
    { name: 'T-SHIRT', price: 69.99, category: 'Clothing' },
    { name: 'WATCH', price: 199.00, category: 'Wearables' },
    { name: 'PANTS', price: 99.99, category: 'Clothing' },
    { name: 'PLAYSTATION 5', price: 499.99, category: 'Video-Games' }
]
products.map((product) => {
    if(product.category === 'Clothing') {
        product.onSale = true;
    }
});

console.log(products);

// TEMPLATE LITERALS - PODENDO COLOCAR AS VARIÁVEIS ENTRE O TEXTO.
let name = 'Gabriel Gelbcke';
console.log(`Username: ${name}`);

// DESTRUCTURING - UTILIZADO EM ARRAYS E OBJETOS PARA TRANSFORMAS OS ITENS DE UM DESSES DADOS EM VARIÁVEIS.
const fruits = ['apple', 'orange', 'grape', 'banana'];
const [f1, f2, f3, f4] = fruits;
console.log(f3);

const productDetails = {
    name: 'KeyBoard',
    price: 19.99,
    category: 'Periferals',
    color: 'Black'
}
const {name: productName, price, category: ProductCategory, color} = productDetails;
console.log(`Product's name: ${productName} | Price: ${price} | Color: ${color} |`);

// SPREAD OPERATOR - UTILIZADO EM ARRAYS E OBJETOS PARA CONSTITUIR NOVOS VALORES DOS DADOS, UNINDO ARRAYS OU ADICIONAR VALORES DE UM OBJETO A OUTRO.
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2];
console.log(a3);
const a4 = [0, ...a1, 4];
console.log(a4);

const carName = {name: '530I'};
const carBrand = {brand: 'BMW'};
const otherInfos = {km: 0, price: 57.000};
const car = {...carName, ...carBrand, ...otherInfos};
console.log(car);

// CLASSES.
class Product {
    constructor(name, price) {
        this.name = "Product's name: " + name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }

}

const shirt = new Product("Social Shirt", 49.99);
console.log(shirt.name + ' - ' + shirt.price);
console.log(shirt.productWithDiscount(10));


// HERITAGE - UTILIZA EXTEND PARA DAR UMA HERANÇA A UMA CLASSE E AS PROPRIEDADES QUE USAMOS DELA DEVEM SER ENVIADAS VIA 'SUPER'.
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super (name, price);
        this.colors = colors;
    }

    showColors() {
        console.log('The colors are: ')
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}
const hat = new ProductWithAttributes("Hat", 29.99, ["black", 'blue', 'red']);
console.log(hat.name);
console.log("HAT'S PRICE WITH DISCOUNT: " + hat.productWithDiscount(15));
console.log(hat.showColors());