function encontrarElementoUnico(numeros){
    for (let i=0;i<numeros.length;i++) {
        let contador = 0;
        for (let j=0;j<numeros.length;j++) {
            if (numeros[i] === numeros[j]) {
                contador++;
            }
        }
        if (contador === 1) {
            return numeros[i];
        }
    }
}
let numeros = [];
let qtd = Number(prompt("Quantos números deseja inserir?"));
for (let i=0;i<qtd;i++) {
    numeros.push(Number(prompt(`Digite o número ${i + 1}:`)));
}
let elemento = encontrarElementoUnico(numeros);
console.log("Elemento único:", elemento);