

let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num1 / num2;

const mayor = num1 > num2;
const menor = num1 < num2;
const igual = num1 === num2;
const distinto = num1 !== num2;


let resultado = "";
resultado += `${num1} más ${num2} es igual a ${suma}<br>`;
resultado += `${num1} menos ${num2} es igual a ${resta}<br>`;
resultado += `${num1} por ${num2} es igual a ${multiplicacion}<br>`;
resultado += `${num1} entre ${num2} es igual a ${division}<br>`;

resultado += `Es ${num1} mayor que ${num2}? ${mayor}<br>`;
resultado += `Es ${num1} menor que ${num2}? ${menor}<br>`;
resultado += `Es ${num1} igual que ${num2}? ${igual}<br>`;
resultado += `Es ${num1} distinto que ${num2}? ${distinto}<br>`;

document.getElementById("resultado").innerHTML = resultado;