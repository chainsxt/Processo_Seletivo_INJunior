let a = Number(prompt("Digite a:"));
let b = Number(prompt("Digite b:"));
let c = Number(prompt("Digite c:"));
if (a === 0) { 
    console.log("Não é uma equação do segundo grau (a não pode ser zero).");
 }
else {
    let delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        alert("Não existem raízes reais.");
    }
    else if (delta === 0) {
        let raiz = ((-b) / (2 * a));
        alert(`A raiz dupla é: ${raiz}`);
    }
    else {
        let raiz1=((-b)+(Math.sqrt(delta)))/(2*a);
        let raiz2=((-b)-(Math.sqrt(delta)))/(2*a);
        alert(
            `A raiz x1 é: ${raiz1}\n` +
            `A raiz x2 é: ${raiz2}`
        );
    }
}