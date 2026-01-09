function verificarIdades(anos,ano){
    let resultado=[];
      for (let i=0;i<anos.length;i++) {
        let idade=ano-anos[i];
        if (idade>=18){
            resultado.push("Maior");
            console.log(`Pessoa ${i + 1}: Maior de idade`);
        }
        else{
            resultado.push("Menor");
            console.log(`Pessoa ${i + 1}: Menor de idade`);
        }
    }
return resultado;
}
let anos=[];
let num=Number(prompt("Quer calcular a idade de quantas pessoas?"));
for (let i=0;i<num;i++){
anos[i]=Number(prompt(`Digite o ano de nascimento da pessoa ${i+1}`));
}
let anoAtual=Number(prompt("Digite o ano atual:"));
let x=verificarIdades(anos,anoAtual);
console.log(x);
