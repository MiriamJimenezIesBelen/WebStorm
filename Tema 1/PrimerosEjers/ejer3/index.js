
let nota1 = parseFloat(prompt("Nota 1"));
let nota2 = parseFloat(prompt("Nota 2"));
let nota3 = parseFloat(prompt("Nota 3"));
let nota4 = parseFloat(prompt("Nota 4"));

const media = (nota1 + nota2 + nota3 + nota4) / 4 ;
let notaFinal = "";

if (media < 5) {
    notaFinal = "insuficiente";
} else if (media === 5) {
    notaFinal = "suficiente";
} else if (media <= 7) {
    notaFinal = "bien";
} else {
    notaFinal = "sobresaliente";
}

let resultado = ""
    resultado += `Con una media de ${media} da ${notaFinal} `;

document.getElementById("resultado").innerHTML = resultado;