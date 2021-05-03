class Modules {
  
  soma(valores=[""]) {
    let total = 0;
    for (let v = 0; v < valores.length; v++) {
      if (valores[v] == "") {
          total = total + 0;
      }
      else {
          total = total + parseFloat(valores[v]);
      }
    }

    if (isNaN(total) == true) {
      total = 0;
    }

    switch (total) {
      case null:
        total = 0;
        break;
      case Infinity:
        total = 0;
        break;
      case -Infinity:
        total = 0;
        break;
    }

    return total;
  }

  subtracao(valoresASubtrair=[""], valoresSubtracao=[""]) {
    let total = 0;
    let totalSubtracao = 0;
    for (let r = 0; r < valoresSubtracao.length; r++) {
        if (valoresSubtracao[r] == "") {
            total = total + 0;
        }
        else {
            totalSubtracao = totalSubtracao + parseFloat(valoresSubtracao[r]);
        }
    }
    for (let v = 0; v < valoresASubtrair.length; v++) {
        if (valoresASubtrair[v] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresASubtrair[v]);
        }
    }

    let resultado = totalSubtracao - total;

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  multiplicacao(valoresAMultiplicar=[""]) {
    let total = 1;
    for (let v = 0; v < valoresAMultiplicar.length; v++) {
      if (valoresAMultiplicar[v] == "") {
        total = total * 1;
      }
      else {
        total = total * parseFloat(valoresAMultiplicar[v]);
      }
    }

    if (isNaN(total) == true) {
      total = 1;
    }

    switch (total) {
      case null:
        total = 0;
        break;
      case Infinity:
        total = 0;
        break;
      case -Infinity:
        total = 0;
        break;
    }

    return total;
  }

  divisao(valoresADividir=[""], valoresDivisao=[""]) {
    let total = 0;
    let totalDivisao = 0;
    for (let r = 0; r < valoresDivisao.length; r++) {
        if (valoresDivisao[r] == "") {
            totalDivisao = totalDivisao + 0;
        }
        else {
            totalDivisao = totalDivisao + parseFloat(valoresDivisao[r]);
        }
    }
    for (let v = 0; v < valoresADividir.length; v++) {
        if (valoresADividir[v] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresADividir[v]);
        }
    }
    let resultado;

    if(total == 0) {
      resultado = totalDivisao;
    }else {
      resultado = totalDivisao / total;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  potencia(valorBase="", valoresAPotencializar=[""]) {
    let total = 0;
    let resultado = 0;
    for (let v = 0; v < valoresAPotencializar.length; v++) {
        if (valoresAPotencializar[v] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresAPotencializar[v]);
        }
    }
    resultado = Math.pow(parseFloat(valorBase), total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  potenciaDePotencia(valorBase="", potNvl1=[""], potNvl2=[""], potNvl3=[""], potNvl4=[""], potNvl5=[""]) {
    let valoresPotenciacao = [potNvl1, potNvl2, potNvl3, potNvl4, potNvl5]  
    for(let i = 0; i < valoresPotenciacao.length; i++) {
        if(valorBase == "") {valorBase = 1;}
        if(valoresPotenciacao[i][0] == "") {valoresPotenciacao[i][0] = 1;}
        valoresPotenciacao[i][0] = parseFloat(valoresPotenciacao[i][0]);
    }

    let resultado = Math.pow(Math.pow(Math.pow(Math.pow(Math.pow(parseFloat(valorBase), valoresPotenciacao[0][0]), valoresPotenciacao[1][0]), valoresPotenciacao[2][0]), valoresPotenciacao[3][0]), valoresPotenciacao[4][0]);    

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  raizQuadrada(valoresARadiciar=[""]) {
    let total = 0;
    for (let r = 0; r < valoresARadiciar.length; r++) {
        if (valoresARadiciar[r] == "") {
          total = total + 0;
        } 
        else {
          total = total + parseFloat(valoresARadiciar[r]);
        }
    }
    let resultado = Math.sqrt(total);

    if(total < 0) {
      resultado = null;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  raizCubica(valoresARadiciarCubicamente=[""]) {
    let total = 0;
    for (let r = 0; r < valoresARadiciarCubicamente.length; r++) {
        if (valoresARadiciarCubicamente[r] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresARadiciarCubicamente[r]);
        }
    }
    let resultado = Math.cbrt(total);

    if(total < 0) {
        resultado = null;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  raizBiquadrada(valoresARadiciar2=[""]) {
    let total = 0;
    for (let r = 0; r < valoresARadiciar2.length; r++) {
        if (valoresARadiciar2[r] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresARadiciar2[r]);
        }
    }
    let resultado = Math.sqrt(Math.sqrt(total));

    if(total < 0) {
        resultado = null;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  raizBicubica(valoresARadiciarCubicamente2=[""]) {
    let total = 0;
    for (let r = 0; r < valoresARadiciarCubicamente2.length; r++) {
        if (valoresARadiciarCubicamente2[r] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresARadiciarCubicamente2[r]);
        }
    }
    let resultado = Math.cbrt(Math.cbrt(total));

    if(total < 0) {
        resultado = null;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return total;
  }

  seno(valoresParaRealizarSeno=[""]) {
    let total = 0;

    let resultado = 0;
    
    for (let g = 0; g < valoresParaRealizarSeno.length; g++) {
        if(valoresParaRealizarSeno[g] == "") {
          return resultado = 0;
        }

        if (valoresParaRealizarSeno[g] != "") {
            total = total + parseFloat(valoresParaRealizarSeno[g]);
        }
    }

    resultado = Math.sin(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  cosseno(valoresParaRealizarCosseno=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCosseno.length; g++) {
      if (valoresParaRealizarCosseno[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCosseno[g] != "") {
        total = total + parseFloat(valoresParaRealizarCosseno[g]);
      }
    }

    resultado = Math.cos(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  tangente(valoresParaRealizarTangente=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarTangente.length; g++) {
      if (valoresParaRealizarTangente[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarTangente[g] != "") {
        total = total + parseFloat(valoresParaRealizarTangente[g]);
      }
    }

    resultado = Math.tan(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  secante(valoresParaRealizarSecante=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarSecante.length; g++) {
      if (valoresParaRealizarSecante[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarSecante[g] != "") {
        total = total + parseFloat(valoresParaRealizarSecante[g]);
      }
    }

    resultado = 1 / Math.cos(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;    
  }

  cossecante(valoresParaRealizarCossecante=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCossecante.length; g++) {
      if (valoresParaRealizarCossecante[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCossecante[g] != "") {
        total = total + parseFloat(valoresParaRealizarCossecante[g]);
      }
    }

    resultado = 1 / Math.sin(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  cotangente(valoresParaRealizarCotangente=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCotangente.length; g++) {
      if (valoresParaRealizarCotangente[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCotangente[g] != "") {
        total = total + parseFloat(valoresParaRealizarCotangente[g]);
      }
    }

    resultado = 1 / Math.tan(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  senoHiper(valoresParaRealizarSenoHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarSenoHiper.length; g++) {
      if (valoresParaRealizarSenoHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarSenoHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarSenoHiper[g]);
      }
    }

    resultado = Math.sinh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;

  }

  cossenoHiper(valoresParaRealizarCossenoHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCossenoHiper.length; g++) {
      if (valoresParaRealizarCossenoHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCossenoHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarCossenoHiper[g]);
      }
    }

    resultado = Math.cosh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;    
  }

  tangenteHiper(valoresParaRealizarTangenteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarTangenteHiper.length; g++) {
      if (valoresParaRealizarTangenteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarTangenteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarTangenteHiper[g]);
      }    
    }

    resultado = Math.tanh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;
  }

  secanteHiper(valoresParaRealizarSecanteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarSecanteHiper.length; g++) {
      if (valoresParaRealizarSecanteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarSecanteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarSecanteHiper[g]);
      }
    }

    resultado = 1 / Math.cosh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;
  }

  cossecanteHiper(valoresParaRealizarCossecanteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCossecanteHiper.length; g++) {
      if (valoresParaRealizarCossecanteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCossecanteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarCossecanteHiper[g]);
      }
    }

    resultado = 1 / Math.sinh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;
  }

  cotangenteHiper(valoresParaRealizarCotangenteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCotangenteHiper.length; g++) {
      if (valoresParaRealizarCotangenteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCotangenteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarCotangenteHiper[g]);
      }
    }

    resultado = 1 / Math.tanh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  arcoSeno(valoresParaRealizarArcoSeno=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoSeno.length; g++) {
      if (valoresParaRealizarArcoSeno[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoSeno[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoSeno[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = Math.asin(total);

    if(isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCosseno(valoresParaRealizarArcoCosseno=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCosseno.length; g++) {
      if (valoresParaRealizarArcoCosseno[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCosseno[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCosseno[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = Math.acos(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    
    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoTangente(valoresParaRealizarArcoTangente=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoTangente.length; g++) {
      if (valoresParaRealizarArcoTangente[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoTangente[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoTangente[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    resultado = Math.atan(total);
    
    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoSecante(valoresParaRealizarArcoSecante=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoSecante.length; g++) {
      if (valoresParaRealizarArcoSecante[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoSecante[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoSecante[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.acos(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCossecante(valoresParaRealizarArcoCossecante=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCossecante.length; g++) {
      if (valoresParaRealizarArcoCossecante[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCossecante[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCossecante[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.asin(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCotangente(valoresParaRealizarArcoCotangente=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCotangente.length; g++) {
      if (valoresParaRealizarArcoCotangente[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCotangente[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCotangente[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.atan(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoSenoHiper(valoresParaRealizarArcoSenoHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoSenoHiper.length; g++) {
      if (valoresParaRealizarArcoSenoHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoSenoHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoSenoHiper[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = Math.asinh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCossenoHiper(valoresParaRealizarArcoCossenoHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCossenoHiper.length; g++) {
      if (valoresParaRealizarArcoCossenoHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCossenoHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCossenoHiper[g]);
      }
    }

          // Limite Mávalorimo para valores numéricos = 10 ** 16.
      if(total > 1 && total < 10 ** 1) {
        total = total / 10 ** 1;
      }

      if(total > 10 ** 1 && total < 10 ** 2) {
        total = total / 10 ** 2;
      }

      if(total > 10 ** 2 && total < 10 ** 3) {
        total = total / 10 ** 3;
      }

      if(total > 10 ** 3 && total < 10 ** 4) {
        total = total / 10 ** 4;
      }

      if(total > 10 ** 4 && total < 10 ** 5) {
        total = total / 10 ** 5;
      }

      if(total > 10 ** 5 && total < 10 ** 6) {
        total = total / 10 ** 6;
      }

      if(total > 10 ** 6 && total < 10 ** 7) {
        total = total / 10 ** 7;
      }

      if(total > 10 ** 7 && total < 10 ** 8) {
        total = total / 10 ** 8;
      }

      if(total > 10 ** 8 && total < 10 ** 9) {
        total = total / 10 ** 9;
      }

      if(total > 10 ** 9 && total < 10 ** 10) {
        total = total / 10 ** 10;
      }

      if(total > 10 ** 10 && total < 10 ** 11) {
        total = total / 10 ** 11;
      }

      if(total > 10 ** 11 && total < 10 ** 12) {
        total = total / 10 ** 12;
      }

      if(total > 10 ** 12 && total < 10 ** 13) {
        total = total / 10 ** 13;
      }

      if(total > 10 ** 13 && total < 10 ** 14) {
        total = total / 10 ** 14;
      }

      if(total > 10 ** 14 && total < 10 ** 15) {
        total = total / 10 ** 15;
      }

      if(total > 10 ** 15 && total < 10 ** 16) {
        total = total / 10 ** 16;
      }

    resultado = Math.acosh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoTangenteHiper(valoresParaRealizarArcoTangenteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoTangenteHiper.length; g++) {
      if (valoresParaRealizarArcoTangenteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoTangenteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoTangenteHiper[g]);
      }
    }
        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = Math.atanh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoSecanteHiper(valoresParaRealizarArcoSecanteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoSecanteHiper.length; g++) {
      if (valoresParaRealizarArcoSecanteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoSecanteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoSecanteHiper[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.acosh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCossecanteHiper(valoresParaRealizarArcoCossecanteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCossecanteHiper.length; g++) {
      if (valoresParaRealizarArcoCossecanteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCossecanteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCossecanteHiper[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.asinh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCotangenteHiper(valoresParaRealizarArcoCotangenteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCotangenteHiper.length; g++) {
      if (valoresParaRealizarArcoCotangenteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCotangenteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCotangenteHiper[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }
    
    resultado = 1 / Math.atanh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }
    
    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  convBasesTechno(valor=[""], input=0, output=0) {
    let resultado = 0;
    let valorf = 0;
  
    for(let i = 0; i < valor.length; i++) {
      valorf = valorf + parseFloat(valor[i]);
    }

    let formulas = [
      [valorf * 8, valorf / 8],
      [(valorf * 8) * 1024, (valorf / 8) / 1024],
      [(valorf * 8) * 1024 ** 2, (valorf / 8) / 1024 ** 2],
      [(valorf * 8) * 1024 ** 3, (valorf / 8) / 1024 ** 3],
      [(valorf * 8) * 1024 ** 4, (valorf / 8) / 1024 ** 4],
      [(valorf * 8) * 1024 ** 5, (valorf / 8) / 1024 ** 5],
      [(valorf * 8) * 1024 ** 6, (valorf / 8) / 1024 ** 6],
      [(valorf * 8) * 1024 ** 7, (valorf / 8) / 1024 ** 7],
      [(valorf * 8) * 1024 ** 8, (valorf / 8) / 1024 ** 8],
      [(valorf * 8) * 1024 ** 9, (valorf / 8) / 1024 ** 9],
      [(valorf * 8) * 1024 ** 10, (valorf / 8) / 1024 ** 10],
      [(valorf * 8) * 1024 ** 11, (valorf / 8) / 1024 ** 11],
      [(valorf * 8) * 1024 ** 12, (valorf / 8) / 1024 ** 12],
      [valorf * 1024, valorf / 1024],
      [valorf * 1024 ** 2, valorf / 1024 ** 2],
      [valorf * 1024 ** 3, valorf / 1024 ** 3],
      [valorf * 1024 ** 4, valorf / 1024 ** 4],
      [valorf * 1024 ** 5, valorf / 1024 ** 5],
      [valorf * 1024 ** 6, valorf / 1024 ** 6],
      [valorf * 1024 ** 7, valorf / 1024 ** 7],
      [valorf * 1024 ** 8, valorf / 1024 ** 8],
      [valorf * 1024 ** 9, valorf / 1024 ** 9],
      [valorf * 1024 ** 10, valorf / 1024 ** 10],
      [valorf * 1024 ** 11, valorf / 1024 ** 11],
      [valorf * 1024 ** 12, valorf / 1024 ** 12],
    ]
    
    let chaves = ['t01_bits', 't02_bytes', 't03_kilobytes', 't04_megabytes', 't05_gigabytes', 't06_terabytes', 't07_petabytes', 't08_exabytes', 't09_yottabytes', 't10_zettabytes', 't11_brontobytes', 't12_geopbytes', 't13_saganbytes', 't14_jotabytes'];
    
    let combinacao = [[], []];

    switch(input) {
      case 1:
        input = chaves[0];
        break;
      case 2:
        input = chaves[1];
        break;
      case 3:
        input = chaves[2];
        break;
      case 4:
        input = chaves[3];
        break;
      case 5:
        input = chaves[4];
        break;
      case 6:
        input = chaves[5];
        break;
      case 7:
        input = chaves[6];
        break;
      case 8:
        input = chaves[7];
        break;
      case 9:
        input = chaves[8];
        break;
      case 10:
        input = chaves[9];
        break;
      case 11:
        input = chaves[10];
        break;
      case 12:
        input = chaves[11];
        break;
      case 13:
        input = chaves[12];
        break;
      case 14:
        input = chaves[13];
        break;
    }

    switch(output) {
      case 1:
        output = chaves[0];
        break;
      case 2:
        output = chaves[1];
        break;
      case 3:
        output = chaves[2];
        break;
      case 4:
        output = chaves[3];
        break;
      case 5:
        output = chaves[4];
        break;
      case 6:
        output = chaves[5];
        break;
      case 7:
        output = chaves[6];
        break;
      case 8:
        output = chaves[7];
        break;
      case 9:
        output = chaves[8];
        break;
      case 10:
        output = chaves[9];
        break;
      case 11:
        output = chaves[10];
        break;
      case 12:
        output = chaves[11];
        break;
      case 13:
        output = chaves[12];
        break;
      case 14:
        output = chaves[13];
        break;
    }

    combinacao = [[input], [output]];

    switch(combinacao[0][0]) {
      case 't01_bits':
        switch(combinacao[1][0]) {
          case 't02_bytes':
            resultado = formulas[0][1];
            break;
          case 't03_kilobytes':
            resultado = formulas[1][1];
            break;
          case 't04_megabytes':
            resultado = formulas[2][1];
            break;
          case 't05_gigabytes':
            resultado = formulas[3][1];
            break;
          case 't06_terabytes':
            resultado = formulas[4][1];
            break;
          case 't07_petabytes':
            resultado = formulas[5][1];
            break;
          case 't08_exabytes':
            resultado = formulas[6][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[7][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[8][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[9][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[10][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[11][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[12][1];
            break;
        }
        break;
      case 't02_bytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[0][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[13][1];
            break;
          case 't04_megabytes':
            resultado = formulas[14][1];
            break;
          case 't05_gigabytes':
            resultado = formulas[15][1];
            break;
          case 't06_terabytes':
            resultado = formulas[16][1];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't03_kilobytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[1][0];
            break;
          case 't02_bytes':
            resultado = formulas[13][0];
            break;
          case 't04_megabytes':
            resultado = formulas[14][1];
            break;
          case 't05_gigabytes':
            resultado = formulas[15][1];
            break;
          case 't06_terabytes':
            resultado = formulas[16][1];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't04_megabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[2][0];
            break;
          case 't02_bytes':
            resultado = formulas[14][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[13][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[15][1];
            break;
          case 't06_terabytes':
            resultado = formulas[16][1];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't05_gigabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[3][0];
            break;
          case 't02_bytes':
            resultado = formulas[15][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[14][0];
            break;
          case 't04_megabytes':
            resultado = formulas[13][0];
            break;
          case 't06_terabytes':
            resultado = formulas[16][1];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't06_terabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[4][0];
            break;
          case 't02_bytes':
            resultado = formulas[16][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[15][0];
            break;
          case 't04_megabytes':
            resultado = formulas[14][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[13][0];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't07_petabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[5][0];
            break;
          case 't02_bytes':
            resultado = formulas[17][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[16][0];
            break;
          case 't04_megabytes':
            resultado = formulas[15][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[14][0];
            break;
          case 't06_terabytes':
            resultado = formulas[13][0];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't08_exabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[6][0];
            break;
          case 't02_bytes':
            resultado = formulas[18][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[17][0];
            break;
          case 't04_megabytes':
            resultado = formulas[16][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[15][0];
            break;
          case 't06_terabytes':
            resultado = formulas[14][0];
            break;
          case 't07_petabytes':
            resultado = formulas[13][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't09_yottabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[7][0];
            break;
          case 't02_bytes':
            resultado = formulas[19][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[18][0];
            break;
          case 't04_megabytes':
            resultado = formulas[17][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[16][0];
            break;
          case 't06_terabytes':
            resultado = formulas[15][0];
            break;
          case 't07_petabytes':
            resultado = formulas[14][0];
            break;
          case 't08_exabytes':
            resultado = formulas[13][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't10_zettabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[8][0];
            break;
          case 't02_bytes':
            resultado = formulas[20][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[19][0];
            break;
          case 't04_megabytes':
            resultado = formulas[18][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[17][0];
            break;
          case 't06_terabytes':
            resultado = formulas[16][0];
            break;
          case 't07_petabytes':
            resultado = formulas[15][0];
            break;
          case 't08_exabytes':
            resultado = formulas[14][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[13][0];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't11_brontobytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[9][0];
            break;
          case 't02_bytes':
            resultado = formulas[21][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[20][0];
            break;
          case 't04_megabytes':
            resultado = formulas[19][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[18][0];
            break;
          case 't06_terabytes':
            resultado = formulas[17][0];
            break;
          case 't07_petabytes':
            resultado = formulas[16][0];
            break;
          case 't08_exabytes':
            resultado = formulas[15][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[14][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[13][0];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't12_geopbytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[10][0];
            break;
          case 't02_bytes':
            resultado = formulas[22][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[21][0];
            break;
          case 't04_megabytes':
            resultado = formulas[20][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[19][0];
            break;
          case 't06_terabytes':
            resultado = formulas[18][0];
            break;
          case 't07_petabytes':
            resultado = formulas[17][0];
            break;
          case 't08_exabytes':
            resultado = formulas[16][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[15][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[14][0];
            break;
          case 't11_brontobytes':
            resultado = formulas[13][0];
            break;
          case 't13_saganbytes':
            resultado = formulas[13][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't13_saganbytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[11][0];
            break;
          case 't02_bytes':
            resultado = formulas[23][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[22][0];
            break;
          case 't04_megabytes':
            resultado = formulas[21][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[20][0];
            break;
          case 't06_terabytes':
            resultado = formulas[19][0];
            break;
          case 't07_petabytes':
            resultado = formulas[18][0];
            break;
          case 't08_exabytes':
            resultado = formulas[17][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[16][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[15][0];
            break;
          case 't11_brontobytes':
            resultado = formulas[14][0];
            break;
          case 't12_geopbytes':
            resultado = formulas[13][0];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't14_jotabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[12][0];
            break;
          case 't02_bytes':
            resultado = formulas[24][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[23][0];
            break;
          case 't04_megabytes':
            resultado = formulas[22][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[21][0];
            break;
          case 't06_terabytes':
            resultado = formulas[20][0];
            break;
          case 't07_petabytes':
            resultado = formulas[19][0];
            break;
          case 't08_exabytes':
            resultado = formulas[18][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[17][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[16][0];
            break;
          case 't11_brontobytes':
            resultado = formulas[15][0];
            break;
          case 't12_geopbytes':
            resultado = formulas[14][0];
            break;
          case 't13_saganbytes':
            resultado = formulas[13][0];
            break;
        }
        break;
    }

    if (isNaN(resultado) == true) {
      resultado = 0;
    }

    if(resultado < 0) {
      resultado = 0;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  // Conversores de Bases
  convBasesTechnoNumericos(valor=typeof(""||0), input=0, output=0) {

    function formulaBinarioDecimal(valor = '') {
      let resultado = 0, numBinarioDesm = [], verificacao = /[2-9]/g;

      if (verificacao.exec(valor) == "2" || verificacao.exec(valor) == "3" || verificacao.exec(valor) == "4" || verificacao.exec(valor) == "5" || verificacao.exec(valor) == "6" || verificacao.exec(valor) == "7" || verificacao.exec(valor) == "8" || verificacao.exec(valor) == "9") {
        return console.error("O valor inserido não condiz com um valor de base binária!");
      }

      for (let a = 0, srt = 0, fnl = 1; a < valor.length; a++, srt++, fnl++) { numBinarioDesm.push(valor.slice(srt, fnl)); }

      for (let a = 0, b = numBinarioDesm.length - 1; a < numBinarioDesm.length, b > -1; a++, b--) {
        numBinarioDesm[a] = numBinarioDesm[a] * 2 ** b;
        resultado = resultado + numBinarioDesm[a];
      }

      return resultado;
    }

    function formulaBinarioOctadecimal(valor = '') {
      let resultado = 0, numBinarioDesm = [], verificacao = /[2-9]/g, verificacaoResultado = /[8-9]/g;

      if (verificacao.exec(valor) == "2" || verificacao.exec(valor) == "3" || verificacao.exec(valor) == "4" || verificacao.exec(valor) == "5" || verificacao.exec(valor) == "6" || verificacao.exec(valor) == "7" || verificacao.exec(valor) == "8" || verificacao.exec(valor) == "9") {
        return console.error("O valor inserido não condiz com um valor de base binária!");
      }

      for (let a = 0, srt = 0, fnl = 1; a < valor.length; a++, srt++, fnl++) { numBinarioDesm.push(valor.slice(srt, fnl)); }

      for (let a = 0, b = numBinarioDesm.length - 1; a < numBinarioDesm.length, b > -1; a++, b--) {
        numBinarioDesm[a] = numBinarioDesm[a] * 2 ** b;
        resultado = resultado + numBinarioDesm[a];
      }

      let analise = verificacaoResultado.exec(resultado.toString());
      
      if (analise == null) { resultado = resultado; }

      if (analise == '8') { resultado = resultado + 1; }

      if (analise == '9') { resultado = resultado + 2; }

      return resultado;
    }

    function formulaBinarioHexadecimal(valor = '') {
      let resultado = '', verificacao = /[2-9]/g;

      if (verificacao.exec(valor) == "2" || verificacao.exec(valor) == "3" || verificacao.exec(valor) == "4" || verificacao.exec(valor) == "5" || verificacao.exec(valor) == "6" || verificacao.exec(valor) == "7" || verificacao.exec(valor) == "8" || verificacao.exec(valor) == "9") {
        return console.error("O valor inserido não condiz com um valor de base binária!");
      }

      if (valor == '0') { resultado = resultado + '0'; }
      if (valor == '1') { resultado = resultado + '1'; }
      if (valor == '00') { resultado = resultado + '0'; }
      if (valor == '01') { resultado = resultado + '1'; }
      if (valor == '10') { resultado = resultado + '2'; }
      if (valor == '11') { resultado = resultado + '3'; }
      if (valor == '100') { resultado = resultado + '4'; }
      if (valor == '101') { resultado = resultado + '5'; }
      if (valor == '110') { resultado = resultado + '6'; }
      if (valor == '111') { resultado = resultado + '7'; }

      if (valor == '0000') { resultado = resultado + '0'; }
      if (valor == '0001') { resultado = resultado + '1'; }
      if (valor == '0010') { resultado = resultado + '2'; }
      if (valor == '0011') { resultado = resultado + '3'; }
      if (valor == '0100') { resultado = resultado + '4'; }
      if (valor == '0101') { resultado = resultado + '5'; }
      if (valor == '0110') { resultado = resultado + '6'; }
      if (valor == '0111') { resultado = resultado + '7'; }
      if (valor == '1000') { resultado = resultado + '8'; }
      if (valor == '1001') { resultado = resultado + '9'; }
      if (valor == '1010') { resultado = resultado + 'A'; }
      if (valor == '1011') { resultado = resultado + 'B'; }
      if (valor == '1100') { resultado = resultado + 'C'; }
      if (valor == '1101') { resultado = resultado + 'D'; }
      if (valor == '1110') { resultado = resultado + 'E'; }
      if (valor == '1111') { resultado = resultado + 'F'; }

      return resultado;
    }

    function formulaDecimalBinario(valor = 0) {
      let resultado = '', numBinarioCons = [];

      while (valor > 0) {
        let resto = valor % 2; valor = valor / 2;

        if (resto == 0) { numBinarioCons.push('0'); }
        if (resto == 1) { numBinarioCons.push('1'); valor = parseInt(valor); }
      }

      for (let a = numBinarioCons.length; a > 0; a--) {
        resultado = resultado + numBinarioCons[a - 1];
      }

      return resultado;
    }

    function formulaDecimalOctadecimal(valor = 0) {
      let resultado = '', numBinarioCons = [];

      while (valor > 0) {
        let resto = valor % 8; valor = valor / 8;

        if (resto == 0) { numBinarioCons.push('0'); }
        if (resto == 1) { numBinarioCons.push('1'); valor = parseInt(valor); }
        if (resto == 2) { numBinarioCons.push('2'); valor = parseInt(valor); }
        if (resto == 3) { numBinarioCons.push('3'); valor = parseInt(valor); }
        if (resto == 4) { numBinarioCons.push('4'); valor = parseInt(valor); }
        if (resto == 5) { numBinarioCons.push('5'); valor = parseInt(valor); }
        if (resto == 6) { numBinarioCons.push('6'); valor = parseInt(valor); }
        if (resto == 7) { numBinarioCons.push('7'); valor = parseInt(valor); }
      }

      for (let a = numBinarioCons.length; a > 0; a--) {
        resultado = resultado + numBinarioCons[a - 1];
      }

      return resultado;
    }

    function formulaDecimalHexadecimal(valor = 0) {
      let resultado = '', numBinarioCons = [];

      while (valor > 0) {
        let resto = valor % 16; valor = valor / 16;

        if (resto == 0) { numBinarioCons.push('0'); }
        if (resto == 1) { numBinarioCons.push('1'); valor = parseInt(valor); }
        if (resto == 2) { numBinarioCons.push('2'); valor = parseInt(valor); }
        if (resto == 3) { numBinarioCons.push('3'); valor = parseInt(valor); }
        if (resto == 4) { numBinarioCons.push('4'); valor = parseInt(valor); }
        if (resto == 5) { numBinarioCons.push('5'); valor = parseInt(valor); }
        if (resto == 6) { numBinarioCons.push('6'); valor = parseInt(valor); }
        if (resto == 7) { numBinarioCons.push('7'); valor = parseInt(valor); }
        if (resto == 8) { numBinarioCons.push('8'); valor = parseInt(valor); }
        if (resto == 9) { numBinarioCons.push('9'); valor = parseInt(valor); }
        if (resto == 10) { numBinarioCons.push('A'); valor = parseInt(valor); }
        if (resto == 11) { numBinarioCons.push('B'); valor = parseInt(valor); }
        if (resto == 12) { numBinarioCons.push('C'); valor = parseInt(valor); }
        if (resto == 13) { numBinarioCons.push('D'); valor = parseInt(valor); }
        if (resto == 14) { numBinarioCons.push('E'); valor = parseInt(valor); }
        if (resto == 15) { numBinarioCons.push('F'); valor = parseInt(valor); }
      }

      for (let a = numBinarioCons.length; a > 0; a--) {
        resultado = resultado + numBinarioCons[a - 1];
      }

      return resultado;
    }

    function formulaOctadecimalBinario(valor = 0) {
      let resultado = '', numBinarioCons = [], verificacao = /[8-9]$/g;

      let teste = verificacao.exec(valor);

      if (teste == "8" || teste == "9") { return console.error('O valor inserido não condiz com um número de base octadecimal!'); }

      for (let a = 0; a < valor.toString().length; a++) {
        numBinarioCons.push(valor.toString().slice(a, a + 1));

        if (numBinarioCons[a] == '0') { resultado = resultado + '000'; }
        if (numBinarioCons[a] == '1') { resultado = resultado + '001'; }
        if (numBinarioCons[a] == '2') { resultado = resultado + '010'; }
        if (numBinarioCons[a] == '3') { resultado = resultado + '011'; }
        if (numBinarioCons[a] == '4') { resultado = resultado + '100'; }
        if (numBinarioCons[a] == '5') { resultado = resultado + '101'; }
        if (numBinarioCons[a] == '6') { resultado = resultado + '110'; }
        if (numBinarioCons[a] == '7') { resultado = resultado + '111'; }

      }

      resultado = resultado.match(/[1]+([0-1]+)?/g).toString();

      return resultado;
    }

    function formulaOctadecimalDecimal(valor = 0) {
      let resultado = 0, numBinarioDesm = [], verificacao = /[8-9]$/g;

      let teste = verificacao.exec(valor);

      if (teste == "8" || teste == "9") { return console.error('O valor inserido não condiz com um número de base octadecimal!'); }

      for (let a = 0; a < valor.toString().length; a++) {
        numBinarioDesm.push(valor.toString().slice(a, a + 1));
      }

      for (let a = 0, b = numBinarioDesm.length - 1; a < numBinarioDesm.length, b > -1; a++, b--) {
        numBinarioDesm[a] = numBinarioDesm[a] * 8 ** b;
        resultado = resultado + numBinarioDesm[a];
      }

      return resultado;
    }

    function formulaOctadecimalHexadecimal(valor = 0) {
      let resultado = '', numBinarioCons = [], passoIntermediario = [], passoIntermediarioResultado = '', passoFinal = [], verificacao = /[8-9]$/g;

      let teste = verificacao.exec(valor);

      if (teste == "8" || teste == "9") { return console.error('O valor inserido não condiz com um número de base octadecimal!'); }

      for (let a = 0; a < valor.toString().length; a++) {

        numBinarioCons.push(valor.toString().slice(a, a + 1));

        if (numBinarioCons[a] == '0') { passoIntermediario.push('000'); }
        if (numBinarioCons[a] == '1') { passoIntermediario.push('001'); }
        if (numBinarioCons[a] == '2') { passoIntermediario.push('010'); }
        if (numBinarioCons[a] == '3') { passoIntermediario.push('011'); }
        if (numBinarioCons[a] == '4') { passoIntermediario.push('100'); }
        if (numBinarioCons[a] == '5') { passoIntermediario.push('101'); }
        if (numBinarioCons[a] == '6') { passoIntermediario.push('110'); }
        if (numBinarioCons[a] == '7') { passoIntermediario.push('111'); }

        passoIntermediarioResultado = passoIntermediarioResultado + passoIntermediario[a];
      }

      passoIntermediarioResultado = passoIntermediarioResultado.match(/[1]+([0-1]+)?/g).toString();

      let divHex = passoIntermediarioResultado.length / 4;
      divHex = Math.round(divHex);

      if(passoIntermediarioResultado.length == 1) { divHex = 1; }
      
      for (let a = 0, b = 0, c = 4; a < divHex; a++, b = b + 4, c = c + 4) {
        passoFinal.push(passoIntermediarioResultado.slice(b, c));
      }

      for (let a = 0; a < passoFinal.length; a++) {

        if (passoFinal[a] == '0') { resultado = resultado + '0'; }
        if (passoFinal[a] == '00') { resultado = resultado + '0'; }
        if (passoFinal[a] == '000') { resultado = resultado + '0'; }
        if (passoFinal[a] == '0000') { resultado = resultado + '0'; }

        if (passoFinal[a] == '1') { resultado = resultado + '1'; }
        if (passoFinal[a] == '01') { resultado = resultado + '1'; }
        if (passoFinal[a] == '001') { resultado = resultado + '1'; }
        if (passoFinal[a] == '0001') { resultado = resultado + '1'; }

        if (passoFinal[a] == '10') { resultado = resultado + '2'; }
        if (passoFinal[a] == '010') { resultado = resultado + '2'; }
        if (passoFinal[a] == '0010') { resultado = resultado + '2'; }

        if (passoFinal[a] == '11') { resultado = resultado + '3'; }
        if (passoFinal[a] == '011') { resultado = resultado + '3'; }
        if (passoFinal[a] == '0011') { resultado = resultado + '3'; }

        if (passoFinal[a] == '100') { resultado = resultado + '4'; }
        if (passoFinal[a] == '0100') { resultado = resultado + '4'; }

        if (passoFinal[a] == '101') { resultado = resultado + '5'; }
        if (passoFinal[a] == '0101') { resultado = resultado + '5'; }

        if (passoFinal[a] == '110') { resultado = resultado + '6'; }
        if (passoFinal[a] == '0110') { resultado = resultado + '6'; }

        if (passoFinal[a] == '111') { resultado = resultado + '7'; }
        if (passoFinal[a] == '0111') { resultado = resultado + '7'; }

        if (passoFinal[a] == '1000') { resultado = resultado + '8'; }

        if (passoFinal[a] == '1001') { resultado = resultado + '9'; }

        if (passoFinal[a] == '1010') { resultado = resultado + 'A'; }

        if (passoFinal[a] == '1011') { resultado = resultado + 'B'; }

        if (passoFinal[a] == '1100') { resultado = resultado + 'C'; }

        if (passoFinal[a] == '1101') { resultado = resultado + 'D'; }

        if (passoFinal[a] == '1110') { resultado = resultado + 'E'; }

        if (passoFinal[a] == '1111') { resultado = resultado + 'F'; }

      }

      return resultado;
    }

    function formulaHexadecimalBinario(valor = '') {
      let resultado = '', numHexDesm = [], verificacaoHex = /[g-zG-Z]/g;

      if (valor.match(verificacaoHex) == 'g' || valor.match(verificacaoHex) == 'h' || valor.match(verificacaoHex) == 'i' || valor.match(verificacaoHex) == 'j' || valor.match(verificacaoHex) == 'k' || valor.match(verificacaoHex) == 'l' || valor.match(verificacaoHex) == 'm' || valor.match(verificacaoHex) == 'n' || valor.match(verificacaoHex) == 'o' || valor.match(verificacaoHex) == 'p' || valor.match(verificacaoHex) == 'q' || valor.match(verificacaoHex) == 'r' || valor.match(verificacaoHex) == 's' || valor.match(verificacaoHex) == 't' || valor.match(verificacaoHex) == 'u' || valor.match(verificacaoHex) == 'v' || valor.match(verificacaoHex) == 'w' || valor.match(verificacaoHex) == 'x' || valor.match(verificacaoHex) == 'y' || valor.match(verificacaoHex) == 'z' || valor.match(verificacaoHex) == 'G' || valor.match(verificacaoHex) == 'H' || valor.match(verificacaoHex) == 'I' || valor.match(verificacaoHex) == 'J' || valor.match(verificacaoHex) == 'K' || valor.match(verificacaoHex) == 'L' || valor.match(verificacaoHex) == 'M' || valor.match(verificacaoHex) == 'N' || valor.match(verificacaoHex) == 'O' || valor.match(verificacaoHex) == 'P' || valor.match(verificacaoHex) == 'Q' || valor.match(verificacaoHex) == 'R' || valor.match(verificacaoHex) == 'S' || valor.match(verificacaoHex) == 'T' || valor.match(verificacaoHex) == 'U' || valor.match(verificacaoHex) == 'V' || valor.match(verificacaoHex) == 'W' || valor.match(verificacaoHex) == 'X' || valor.match(verificacaoHex) == 'Y' || valor.match(verificacaoHex) == 'Z') {
        return console.error("O valor inserido não condiz com um valor da base hexadecimal!");
      }

      for (let a = 0; a < valor.length; a++) { numHexDesm.push(valor.slice(a, a + 1)); }

      for (let a = 0; a < numHexDesm.length; a++) {

        if (numHexDesm[a] == '0') { resultado = resultado + '0000'; }
        if (numHexDesm[a] == '1') { resultado = resultado + '0001'; }
        if (numHexDesm[a] == '2') { resultado = resultado + '0010'; }
        if (numHexDesm[a] == '3') { resultado = resultado + '0011'; }
        if (numHexDesm[a] == '4') { resultado = resultado + '0100'; }
        if (numHexDesm[a] == '5') { resultado = resultado + '0101'; }
        if (numHexDesm[a] == '6') { resultado = resultado + '0110'; }
        if (numHexDesm[a] == '7') { resultado = resultado + '0111'; }
        if (numHexDesm[a] == '8') { resultado = resultado + '1000'; }
        if (numHexDesm[a] == '9') { resultado = resultado + '1001'; }

        if (numHexDesm[a] == 'a') { resultado = resultado + '1010'; }
        if (numHexDesm[a] == 'A') { resultado = resultado + '1010'; }

        if (numHexDesm[a] == 'b') { resultado = resultado + '1011'; }
        if (numHexDesm[a] == 'B') { resultado = resultado + '1011'; }

        if (numHexDesm[a] == 'c') { resultado = resultado + '1100'; }
        if (numHexDesm[a] == 'C') { resultado = resultado + '1100'; }

        if (numHexDesm[a] == 'd') { resultado = resultado + '1101'; }
        if (numHexDesm[a] == 'D') { resultado = resultado + '1101'; }

        if (numHexDesm[a] == 'e') { resultado = resultado + '1110'; }
        if (numHexDesm[a] == 'E') { resultado = resultado + '1110'; }

        if (numHexDesm[a] == 'f') { resultado = resultado + '1111'; }
        if (numHexDesm[a] == 'F') { resultado = resultado + '1111'; }
      }

      resultado = resultado.match(/[1]+([0-1]+)?/g).toString();

      return resultado;
    }

    function formulaHexadecimalDecimal(valor = '') {
      let resultado = 0, numHexDesm = [], verificacaoHex = /[g-zG-Z]/g;

      if (valor.match(verificacaoHex) == 'g' || valor.match(verificacaoHex) == 'h' || valor.match(verificacaoHex) == 'i' || valor.match(verificacaoHex) == 'j' || valor.match(verificacaoHex) == 'k' || valor.match(verificacaoHex) == 'l' || valor.match(verificacaoHex) == 'm' || valor.match(verificacaoHex) == 'n' || valor.match(verificacaoHex) == 'o' || valor.match(verificacaoHex) == 'p' || valor.match(verificacaoHex) == 'q' || valor.match(verificacaoHex) == 'r' || valor.match(verificacaoHex) == 's' || valor.match(verificacaoHex) == 't' || valor.match(verificacaoHex) == 'u' || valor.match(verificacaoHex) == 'v' || valor.match(verificacaoHex) == 'w' || valor.match(verificacaoHex) == 'x' || valor.match(verificacaoHex) == 'y' || valor.match(verificacaoHex) == 'z' || valor.match(verificacaoHex) == 'G' || valor.match(verificacaoHex) == 'H' || valor.match(verificacaoHex) == 'I' || valor.match(verificacaoHex) == 'J' || valor.match(verificacaoHex) == 'K' || valor.match(verificacaoHex) == 'L' || valor.match(verificacaoHex) == 'M' || valor.match(verificacaoHex) == 'N' || valor.match(verificacaoHex) == 'O' || valor.match(verificacaoHex) == 'P' || valor.match(verificacaoHex) == 'Q' || valor.match(verificacaoHex) == 'R' || valor.match(verificacaoHex) == 'S' || valor.match(verificacaoHex) == 'T' || valor.match(verificacaoHex) == 'U' || valor.match(verificacaoHex) == 'V' || valor.match(verificacaoHex) == 'W' || valor.match(verificacaoHex) == 'X' || valor.match(verificacaoHex) == 'Y' || valor.match(verificacaoHex) == 'Z') {
        return console.error("O valor inserido não condiz com um valor da base hexadecimal!");
      }

      for (let a = 0; a < valor.length; a++) { numHexDesm.push(valor.slice(a, a + 1)); }

      for (let a = 0, b = numHexDesm.length - 1; a < numHexDesm.length, b > -1; a++, b--) {

        if (numHexDesm[a] == 'a') { numHexDesm[a] = 10; }
        if (numHexDesm[a] == 'A') { numHexDesm[a] = 10; }

        if (numHexDesm[a] == 'b') { numHexDesm[a] = 11; }
        if (numHexDesm[a] == 'B') { numHexDesm[a] = 11; }

        if (numHexDesm[a] == 'c') { numHexDesm[a] = 12; }
        if (numHexDesm[a] == 'C') { numHexDesm[a] = 12; }

        if (numHexDesm[a] == 'd') { numHexDesm[a] = 13; }
        if (numHexDesm[a] == 'D') { numHexDesm[a] = 13; }

        if (numHexDesm[a] == 'e') { numHexDesm[a] = 14; }
        if (numHexDesm[a] == 'E') { numHexDesm[a] = 14; }

        if (numHexDesm[a] == 'f') { numHexDesm[a] = 15; }
        if (numHexDesm[a] == 'F') { numHexDesm[a] = 15; }

        numHexDesm[a] = parseInt(numHexDesm[a]) * 16 ** b;
        resultado = resultado + numHexDesm[a];
      }

      return resultado;
    }

    function formulaHexadecimalOctadecimal(valor = '') {
      let resultado = '', numHexDesm = [], numOctCons = [], verificacaoHex = /[g-zG-Z]/g;

      if (valor.match(verificacaoHex) == 'g' || valor.match(verificacaoHex) == 'h' || valor.match(verificacaoHex) == 'i' || valor.match(verificacaoHex) == 'j' || valor.match(verificacaoHex) == 'k' || valor.match(verificacaoHex) == 'l' || valor.match(verificacaoHex) == 'm' || valor.match(verificacaoHex) == 'n' || valor.match(verificacaoHex) == 'o' || valor.match(verificacaoHex) == 'p' || valor.match(verificacaoHex) == 'q' || valor.match(verificacaoHex) == 'r' || valor.match(verificacaoHex) == 's' || valor.match(verificacaoHex) == 't' || valor.match(verificacaoHex) == 'u' || valor.match(verificacaoHex) == 'v' || valor.match(verificacaoHex) == 'w' || valor.match(verificacaoHex) == 'x' || valor.match(verificacaoHex) == 'y' || valor.match(verificacaoHex) == 'z' || valor.match(verificacaoHex) == 'G' || valor.match(verificacaoHex) == 'H' || valor.match(verificacaoHex) == 'I' || valor.match(verificacaoHex) == 'J' || valor.match(verificacaoHex) == 'K' || valor.match(verificacaoHex) == 'L' || valor.match(verificacaoHex) == 'M' || valor.match(verificacaoHex) == 'N' || valor.match(verificacaoHex) == 'O' || valor.match(verificacaoHex) == 'P' || valor.match(verificacaoHex) == 'Q' || valor.match(verificacaoHex) == 'R' || valor.match(verificacaoHex) == 'S' || valor.match(verificacaoHex) == 'T' || valor.match(verificacaoHex) == 'U' || valor.match(verificacaoHex) == 'V' || valor.match(verificacaoHex) == 'W' || valor.match(verificacaoHex) == 'X' || valor.match(verificacaoHex) == 'Y' || valor.match(verificacaoHex) == 'Z') {
        return console.error("O valor inserido não condiz com um valor da base hexadecimal!");
      }

      for (let a = 0; a < valor.length; a++) { numHexDesm.push(valor.slice(a, a + 1)); }

      for (let a = 0, b = numHexDesm.length - 1; a < numHexDesm.length, b > -1; a++, b--) {

        if (numHexDesm[a] == 'a') { numHexDesm[a] = 10; }
        if (numHexDesm[a] == 'A') { numHexDesm[a] = 10; }

        if (numHexDesm[a] == 'b') { numHexDesm[a] = 11; }
        if (numHexDesm[a] == 'B') { numHexDesm[a] = 11; }

        if (numHexDesm[a] == 'c') { numHexDesm[a] = 12; }
        if (numHexDesm[a] == 'C') { numHexDesm[a] = 12; }

        if (numHexDesm[a] == 'd') { numHexDesm[a] = 13; }
        if (numHexDesm[a] == 'D') { numHexDesm[a] = 13; }

        if (numHexDesm[a] == 'e') { numHexDesm[a] = 14; }
        if (numHexDesm[a] == 'E') { numHexDesm[a] = 14; }

        if (numHexDesm[a] == 'f') { numHexDesm[a] = 15; }
        if (numHexDesm[a] == 'F') { numHexDesm[a] = 15; }

        numHexDesm[a] = parseInt(numHexDesm[a]) * 16 ** b;

        while (numHexDesm[a] > 0) {
          let resto = numHexDesm[a] % 8; numHexDesm[a] = numHexDesm[a] / 8;

          if (resto == 0) { numOctCons.push('0'); }
          if (resto == 1) { numOctCons.push('1'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 2) { numOctCons.push('2'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 3) { numOctCons.push('3'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 4) { numOctCons.push('4'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 5) { numOctCons.push('5'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 6) { numOctCons.push('6'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 7) { numOctCons.push('7'); numHexDesm[a] = parseInt(numHexDesm[a]); }
        }

        for (let a = numOctCons.length; a > 0; a--) {
          resultado = resultado + numOctCons[a - 1];
        }
      }
      resultado = parseInt(resultado);

      return resultado;
    }


    let chaves = ['t01_binário', 't02_decimal', 't03_octadecimal', 't04_hexadecimal'];

    switch(input) {
      case 1:
        input = chaves[0];
        break;
      case 2:
        input = chaves[1];
        break;
      case 3:
        input = chaves[2];
        break;
      case 4:
        input = chaves[3];
        break;
    }

    switch(output) {
      case 1:
        output = chaves[0];
        break;
      case 2:
        output = chaves[1];
        break;
      case 3:
        output = chaves[2];
        break;
      case 4:
        output = chaves[3];
        break;
    }

    let combinacao = [[input], [output]];

    switch(combinacao[0][0]) {
      case 't01_binário':
        switch(combinacao[1][0]) {
          case 't02_decimal':
            return formulaBinarioDecimal(valor);
          case 't03_octadecimal':
            return formulaBinarioOctadecimal(valor);
          case 't04_hexadecimal':
            return formulaBinarioHexadecimal(valor);
        }
        break;
      case 't02_decimal':
        switch(combinacao[1][0]) {
          case 't01_binário':
            return formulaDecimalBinario(valor);
          case 't03_octadecimal':
            return formulaDecimalOctadecimal(valor);
          case 't04_hexadecimal':
            return formulaDecimalHexadecimal(valor);
        }
        break;
      case 't03_octadecimal':
        switch(combinacao[1][0]) {
          case 't01_binário':
            return formulaOctadecimalBinario(valor);
          case 't02_decimal':
            return formulaOctadecimalDecimal(valor);
          case 't04_hexadecimal':
            return formulaOctadecimalHexadecimal(valor);
        }
        break;
      case 't04_hexadecimal':
        switch(combinacao[1][0]) {
          case 't01_binário':
            return formulaHexadecimalBinario(valor);
          case 't02_decimal':
            return formulaHexadecimalDecimal(valor);
          case 't03_octadecimal':
            return formulaHexadecimalOctadecimal(valor);
        }
        break;
    }
  }

}