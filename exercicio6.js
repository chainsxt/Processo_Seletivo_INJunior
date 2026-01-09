try {
    let n = Number(prompt("Quantos números da sequência de Fibonacci deseja ver?"));
    if (isNaN(n) || n < 0) {
        throw new Error("Digite um número inteiro positivo.");
    }
    function fibonacci(n){
        if (n === 0) return 0;
        if (n === 1) return 1;
        return fibonacci(n-1) + fibonacci(n-2);
    }
    let sequencia = [];
    for (let i = 0; i < n; i++) {
        sequencia.push(fibonacci(i));
    }
    console.log(sequencia.join(", "));
}
catch (erro) {
    console.log("Erro: " + erro.message);
}