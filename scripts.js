let valorActual = "";
let historialOperacion = "";
let resultadoMostrado = false;

function agregarCaracter(caracter) {
  if (resultadoMostrado) {
    valorActual = "";
    resultadoMostrado = false;
  }
  valorActual += caracter;
  actualizarPantalla();
}

function actualizarPantalla() {
  document.getElementById("pantalla").value = valorActual || "0";
}

function limpiarPantalla() {
  valorActual = "";
  historialOperacion = "";
  actualizarPantalla();
}

function borrarUltimo() {
  valorActual = valorActual.slice(0, -1);
  actualizarPantalla();
}

function calcular() {
  try {
    valorActual = eval(historialOperacion + valorActual).toString();
    resultadoMostrado = true;
    actualizarPantalla();
  } catch (error) {
    alert("Operación no válida");
    limpiarPantalla();
  }
}

function agregarFuncion(funcion) {
  try {
    let valorNumerico = parseFloat(valorActual) || 0;
    switch (funcion) {
      case "sin":
        valorActual = Math.sin(valorNumerico).toString();
        break;
      case "cos":
        valorActual = Math.cos(valorNumerico).toString();
        break;
      case "tan":
        valorActual = Math.tan(valorNumerico).toString();
        break;
      case "log":
        valorActual = Math.log10(valorNumerico).toString();
        break;
      case "ln":
        valorActual = Math.log(valorNumerico).toString();
        break;
      case "√":
        valorActual = Math.sqrt(valorNumerico).toString();
        break;
      case "x!":
        valorActual = factorial(valorNumerico).toString();
        break;
      default:
        break;
    }
    resultadoMostrado = true;
    actualizarPantalla();
  } catch (error) {
    alert("Operación científica no válida");
    limpiarPantalla();
  }
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

let enRadianes = true;
function cambiarModoAngulo() {
  enRadianes = !enRadianes;
  document.getElementById("modo-angulo").innerText = enRadianes ? "Rad" : "Deg";
}

function convertirAngulo(angulo) {
  return enRadianes ? angulo : (angulo * Math.PI) / 180;
}

function agregarExponente() {
  valorActual += "**";
  actualizarPantalla();
}
