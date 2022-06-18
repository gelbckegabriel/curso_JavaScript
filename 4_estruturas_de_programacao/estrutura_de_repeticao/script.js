// ESTRUTURA COMUM - "WHILE".
let a = 1;
while (a < 10) {
    console.log(a);
    a = a + 1;
}

// ESTRUTURA POUCO UTILIZA - "DO WHILE".
let b = 0;
do {
    console.log(b);
    b = b + 1;
} while(b<5);

// ESTRUTURA MAIS SIMPLIFICADA - "FOR".
for(let num=2; num<100; num=num*2) {
    console.log("O seu número é " + num);
}

// UTILIZA-SE "BREAK" PARA SAIR DE UM LOOP.
for(let c = 0; c < 20; c = c + 1) {
    if(c < 5){
        console.log(c);
    }       else if (c >= 5) {
                console.log("Você saiu do loop!");
                break;
            }
}

// UTILIZA-SE "CONTINUE" PARA PULAR UMA LINHA DE COMANDO.
let d = 0;
while (d < 10) {
    d = d + 1;
    if (d == 8) {
        continue;
    }
    console.log("Valor: " + d);      
}

/*
v
v
v
*/