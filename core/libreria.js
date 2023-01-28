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
        alert("La plabra excede o es menor que el tamanyo necesario (" + tamMin + "-" + tamMax + ")");
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
        alert("La plabra excede o es menor que el tamanyo necesario (" + tamMin + "-" + tamMax + ")");
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

function funcionEsBisiesto(anyo) {
  if ((anyo % 400 == 0) || ((anyo % 4 == 0) && (anyo % 100 != 0))) {
    return true;
  } else {
    return false;
  }
}

function funcionFechaCorrecta(dia, mes, anyo) {
  switch (mes) {
    case 1:
      if (dia > 31) {
        return false;
      } else {
        return true;
      }
      break;
    case 2:
      if (funcionEsBisiesto(anyo)) {
        if (dia > 29) {
          return false;
        } else {
          return true;
        }
      } else {
        if (dia > 28) {
          return false;
        } else {
          return true;
        }
      }
      break;
    case 3:
      if (dia > 31) {
        return false;
      } else {
        return true;
      }
      break;
    case 4:
      if (dia > 30) {
        return false;
      } else {
        return true;
      }
      break;
    case 5:
      if (dia > 31) {
        return false;
      } else {
        return true;
      }
      break;
    case 6:
      if (dia > 30) {
        return false;
      } else {
        return true;
      }
      break;
    case 7:
      if (dia > 31) {
        return false;
      } else {
        return true;
      }
      break;
    case 8:
      if (dia > 31) {
        return false;
      } else {
        return true;
      }
      break;
    case 9:
      if (dia > 30) {
        return false;
      } else {
        return true;
      }
      break;
    case 10:
      if (dia > 31) {
        return false;
      } else {
        return true;
      }
      break;
    case 11:
      if (dia > 30) {
        return false;
      } else {
        return true;
      }
      break;
    case 12:
      if (dia > 31) {
        return false;
      } else {
        return true;
      }
      break;
  }
}

function funcionDiaSemana(dia) {
  switch (dia) {
    case 1:
      return "Lunes";
      break;
    case 2:
      return "Martes";
      break;
    case 3:
      return "Miercoles";
      break;
    case 4:
      return "Jueves";
      break;
    case 5:
      return "Viernes";
      break;
    case 6:
      return "Sabado";
      break;
    case 0:
      return "Domingo";
      break;
  }
}

function funcionMesCastellano(mes) {
  switch (mes) {
    case 0:
      return "Enero";
      break;
    case 1:
      return "Febrero";
      break;
    case 2:
      return "Marzo";
      break;
    case 3:
      return "Abril";
      break;
    case 4:
      return "Mayo";
      break;
    case 5:
      return "Junio";
      break;
    case 6:
      return "Julio";
      break;
    case 7:
      return "Agosto";
      break;
    case 8:
      return "Septiembre";
      break;
    case 9:
      return "Octubre";
      break;
    case 10:
      return "Noviembre";
      break;
    case 11:
      return "Diciembre";
      break;
  }
}

function funcionDiasMes(mes, anyo) {
  switch (mes) {
    case 0:
      return 31;
      break;
    case 1:
      if (funcionEsBisiesto(anyo)) {
        return 29;
      } else {
        return 28;
      }
      break;
    case 2:
      return 31;
      break;
    case 3:
      return 30;
      break;
    case 4:
      return 31;
      break;
    case 5:
      return 30;
      break;
    case 6:
      return 31;
      break;
    case 7:
      return 31;
      break;
    case 8:
      return 30;
      break;
    case 9:
      return 31;
      break;
    case 10:
      return 30;
      break;
    case 11:
      return 31;
      break;
  }
}