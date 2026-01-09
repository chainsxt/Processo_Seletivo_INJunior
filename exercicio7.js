let frase = prompt("Digite uma frase para verificação de palíndromo:");
let fraseMin = frase.toLowerCase()
let fraseSemEspaco = fraseMin.split(" ").join("")
let fraseInvertida = fraseSemEspaco.split("").reverse().join("")
if (fraseSemEspaco === fraseInvertida){
    console.log("É palíndromo.");
}else{
    console.log("Não é palíndromo.")
}


