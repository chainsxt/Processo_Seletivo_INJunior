let fila=[];
while (true){
    let menu="FILA DE ATENDIMENTO.\n";
    if (fila.length===0){
        menu+="Nenhum cliente na fila"
    }
    else{
        for(let i=0;i<fila.length;i++){
            menu+=(i+1)+"º " + fila[i] +"\n";
        }
        menu+="\n"
    }
menu+="1 - Novo Cliente\n"
menu+="2 - Atender Cliente\n"
menu+="3 - Sair"
let option = Number(prompt(menu))

if (option===1){
    let nome = prompt("Digite o nome do cliente:");
    if (nome !== "" && nome !== null) {
            fila.push(nome);
}
} else if (option===2) {
        if (fila.length === 0) {
            alert("Não há clientes na fila.");
        } else {
            let atendido = fila.shift();
            alert("Cliente atendido: " + atendido);
        }
} else if (option===3){
    alert("Programa encerrado.");
    break;
} else {
    alert("Opção inválida.")
}
}