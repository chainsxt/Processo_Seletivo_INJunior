let repeat;
    do{
        num=Number(prompt("Digite um número inteiro e positivo"));
        if (!Number.isInteger(num) || num<=0){
            alert("Erro! Digite um número inteiro e positivo");
        continue;
    }
    let fatorial=1 
    for (let i=1;i<=num;i++){
        fatorial*=i;
    }
    console.log(`Fatorial de ${num} é ${fatorial}`);
        repeat=prompt("Desenha realizar outro fatorial?");
    }while(repeat === "S" || repeat === "s");
