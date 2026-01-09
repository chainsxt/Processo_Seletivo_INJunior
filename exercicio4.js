let valor = Number(prompt("Digite um valor em reais (BRL):"));
cotaeuro = 6.10;
cotadolar= 5.70;
let euro = (reais/cotaeuro);
let dolar = (reais/cotadolar);
console.log(`Valor em reais: ${valor.toFixed(2)}`);
console.log(`Valor em euro: ${euro.toFixed(2)}`);
console.log(`Valor em dolar: ${dolar.toFixed(2)}`);
alert(
        `Valor em reais: R$ ${reais.toFixed(2)}\n` +
        `Valor em euro: € ${euro.toFixed(2)}\n` +
        `Valor em dólar: US$ ${dolar.toFixed(2)}`
    );
