let time = [];
function adicionarJogador(nome,idade,posicao,pontuacao){
    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };
    time.push(jogador);
    console.log("Jogador adicionado com sucesso!");
}
function buscarPorPosicao(posicao) {
    let encontrados = time
        .filter(function(jogador) {
            return jogador.posicao.toLowerCase()===posicao.toLowerCase();
        })
        .map(function(jogador) {
            return jogador.nome;
        });
    if (encontrados.length===0) {
        console.log("Nenhum jogador encontrado nessa posição.");
    } else {
        console.log("Jogadores na posição " +posicao+ ":");
        encontrados.forEach(function(nome) {
            console.log(nome);
        });
    }
}
function listarTime() {
    if (time.length===0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    time.forEach(function(jogador, num) {
        console.log((num + 1)+ " - " +jogador.nome);
    });
}
function calcularPontuacaoMedia() {
    if (time.length===0) {
        console.log("Não há jogadores no time.");
        return;
    }
    let soma=0;
    time.forEach(function(jogador){
        soma+= jogador.pontuacao;
    });
    let media=(soma/time.length);
    console.log("Pontuação média do time: " +media);
}
let opcao;
do {
   opcao = Number(prompt("MENU\n 1 - Adicionar jogador\n 2 - Buscar por posição\n 3 - Listar time\n 4 - Calcular pontuação média\n 5 - Sair"));
switch(opcao) {
    case 1:
        let nome = prompt("Nome do jogador:");
        let idade = Number(prompt("Idade:"));
        let posicao = prompt("Posição:");
        let pontuacao = Number(prompt("Pontuação:"));
        adicionarJogador(nome, idade, posicao, pontuacao);
            break;
    case 2:
        let buscaPosicao = prompt("Digite a posição:");
        buscarPorPosicao(buscaPosicao);
        break;
    case 3:
        listarTime();
        break;
    case 4:
        calcularPontuacaoMedia();
        break;
    case 5:
        console.log("Programa encerrado.");
        break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 5);