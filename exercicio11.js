let numeros=[];
let contador = 0
let num=Number(prompt("Quantos números deseja inserir no vetor?"));
for (let i=0;i<num;i++) {
    let valor = Number(prompt(`Digite o número ${i + 1}:`));
    if (!Number.isInteger(valor) || valor <= 0) {
        alert("Erro! Digite um número inteiro e positivo.");
        i--;
        continue;
    }
    numeros.push(valor);
}
for (let i=1;i<numeros.length;i++){
    if (numeros[i]>numeros[i-1]){
        contador++
    }
}
console.log(contador)