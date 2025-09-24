
const diasPorMes = [31,28,31,30,31,30,31,31,30,31,30,31];
const nombresMeses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

for (let i = 0; i < diasPorMes.length; i++) {
    if (diasPorMes[i] === 30) {
        document.getElementById("meses30").innerHTML += `<li>${nombresMeses[i]}</li>`;
    }
    if (diasPorMes[i] === 31) {
        document.getElementById("meses31").innerHTML += `<li>${nombresMeses[i]}</li>`;
    }
    if (diasPorMes[i] < 31) {
        document.getElementById("mesesMenos31").innerHTML += `<li>${nombresMeses[i]}</li>`;
    }
}
