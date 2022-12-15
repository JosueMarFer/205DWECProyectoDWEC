function funcionSolicitarNumero(mensaje, numMin = -Infinity, numMax = Infinity) {
  let numero = prompt(mensaje);
  while (
    numero == null ||
    isNaN(numero) ||
    numero.length < 0 ||
    numero == undefined ||
    numero < numMin ||
    numero > numMax
  ) {
    if (numero == null) {
      alert("Funcion cancelada...");
      return null;
      break;
    } else if (numero < numMin || numero > numMax) {
      alert("El numero no se encuentra en el rango (" + numMin + "-" + numMax + ")");
      numero = prompt(mensaje);
    } else {
      alert("No es un numero");
      numero = prompt(mensaje);
    }
  }
  numero = parseInt(numero);
  return numero;
}

function funcionSolicitarPalabra(mensaje, tamMin = -Infinity, tamMax = Infinity) {
  let palabra = prompt(mensaje);
  while (
    !isNaN(palabra) ||
    palabra == null ||
    palabra == "" ||
    !comprobarCaracter(palabra) ||
    palabra.length < tamMin ||
    palabra.length > tamMax
  ) {
    if (palabra == null) {
      alert("Funcion cancelada...");
      return null;
      break;
    } else {
      if (palabra.length < tamMin || palabra.length > tamMax) {
        alert("La plabra excede o es menor que el tamaño necesario (" + tamMin + "-" + tamMax + ")");
        palabra = prompt(mensaje);
      } else {
        alert("No es una palabra o contiene caracteres no permitidos");
        palabra = prompt(mensaje);
      }
    }
  }
  return palabra;
}

function comprobarCaracter(palabra) {
  validateChar = true;
  if (palabra != null) {
    for (let index = 0; index < palabra.length; index++) {
      if (
        (palabra.charCodeAt(index) >= 65 && palabra.charCodeAt(index) <= 90) ||
        (palabra.charCodeAt(index) >= 97 && palabra.charCodeAt(index) <= 122)
      ) {
      } else {
        validateChar = false;
      }
    }
  }
  return validateChar;
}

function funcionSolicitarCadena(mensaje, tamMin = -Infinity, tamMax = Infinity) {
  let cadena = prompt(mensaje);
  while (!isNaN(cadena) || cadena == null || cadena == "" || cadena.length < tamMin || cadena.length > tamMax) {
    if (cadena == null) {
      alert("Funcion cancelada...");
      return null;
      break;
    } else {
      if (cadena.length < tamMin || cadena.length > tamMax) {
        alert("La plabra excede o es menor que el tamaño necesario (" + tamMin + "-" + tamMax + ")");
        cadena = prompt(mensaje);
      } else {
        alert("No es una cadena o contiene caracteres no permitidos");
        cadena = prompt(mensaje);
      }
    }
  }
  return cadena;
}

function funcionEliminarAcentos(cadena) {
  let cadenaRemplazada;
  if (cadena != null) {
    do {
      cadenaRemplazada = cadena;
      cadena = cadena.replace("á", "a");
      cadena = cadena.replace("à", "a");
      cadena = cadena.replace("ä", "a");
      cadena = cadena.replace("é", "e");
      cadena = cadena.replace("è", "e");
      cadena = cadena.replace("ë", "e");
      cadena = cadena.replace("í", "i");
      cadena = cadena.replace("ì", "i");
      cadena = cadena.replace("ï", "i");
      cadena = cadena.replace("ó", "o");
      cadena = cadena.replace("ò", "o");
      cadena = cadena.replace("ö", "o");
      cadena = cadena.replace("ú", "u");
      cadena = cadena.replace("ù", "u");
      cadena = cadena.replace("ü", "u");
    } while (cadena != cadenaRemplazada);
  }
  return cadenaRemplazada;
}

function funcionEliminarEspeciales(cadena) {
  let cadenaLimpia;
  for (let index = 0; index < cadena.length; index++) {
    if (
      (cadena.charCodeAt(index) >= 65 && cadena.charCodeAt(index) <= 90) ||
      (cadena.charCodeAt(index) >= 97 && cadena.charCodeAt(index) <= 122)
    ) {
      if (cadenaLimpia == null || cadenaLimpia == undefined) {
        cadenaLimpia = cadena[index];
      } else {
        cadenaLimpia += cadena[index];
      }
    }
  }
  return cadenaLimpia;
}
