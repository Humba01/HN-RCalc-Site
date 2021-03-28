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

  regradeTresSimples(valor1="", valor2="", valor3="") {
    let resultado = 0;

    if(valor1 == ("" || 0) || valor2 == ("" || 0) || valor3 == ("" || 0)) {
      return resultado = 0;
    }

    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    valor3 = parseFloat(valor3);

    resultado = valor1 * valor2 / valor3;

    if (isNaN(resultado) == true) {
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

  regraDeTresComposta(numeroVariaveis="", numerosNormais=[""], autoInputNumerosNaturais=(true||false), usarMaisGrandezas=(true||false), numeroDeGrandezas=0) {
    let somaVariaveis = 0;

    let resultado = [[], somaVariaveis];

    let vars = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        n: 0,
        m: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
        a1: 0,
        b1: 0,
        c1: 0,
        d1: 0,
        e1: 0,
        f1: 0,
        g1: 0,
        h1: 0,
        i1: 0,
        j1: 0,
        k1: 0,
        l1: 0,
        n1: 0,
        m1: 0,
        o1: 0,
        p1: 0,
        q1: 0,
        r1: 0,
        s1: 0,
        t1: 0,
        u1: 0,
        v1: 0,
        w1: 0,
        x1: 0,
        y1: 0,
        z1: 0,
        a2: 0,
        b2: 0,
        c2: 0,
        d2: 0,
        e2: 0,
        f2: 0,
        g2: 0,
        h2: 0,
        i2: 0,
        j2: 0,
        k2: 0,
        l2: 0,
        n2: 0,
        m2: 0,
        o2: 0,
        p2: 0,
        q2: 0,
        r2: 0,
        s2: 0,
        t2: 0,
        u2: 0,
        v2: 0,
        w2: 0,
        x2: 0,
        y2: 0,
        z2: 0,
        a3: 0,
        b3: 0,
        c3: 0,
        d3: 0,
        e3: 0,
        f3: 0,
        g3: 0,
        h3: 0,
        i3: 0,
        j3: 0,
        k3: 0,
        l3: 0,
        n3: 0,
        m3: 0,
        o3: 0,
        p3: 0,
        q3: 0,
        r3: 0,
        s3: 0,
        t3: 0,
        u3: 0,
        v3: 0
    };

    function empurraUmValorALista(array=[0]) {
      numerosNormais.push(Math.random() * 100);
    }
    
    function empurraDoisValoresALista(array=[0]) {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    function empurraTresValoresALista(array=[0]) {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    function empurraQuatroValoresALista(array=[0]) {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }
    
    function empurraCincoValoresALista(array=[0]) {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    function empurraSeisValoresALista(array=[0]) {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    function empurraSeteValoresALista(array=[0]) {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    
    numeroVariaveis = parseFloat(numeroVariaveis);
    
    for(let i = 0; i < numerosNormais.length; i++) {
      numerosNormais[i] = parseFloat(numerosNormais[i]);
    }

    if(numeroVariaveis >= 1 && autoInputNumerosNaturais == true) {
      switch(numeroVariaveis) {
        case 1:
          if(numerosNormais.length < 1) {
            empurraTresValoresALista(numerosNormais);
          }
          if(numerosNormais.length < 2) {
            empurraDoisValoresALista(numerosNormais);
          }
          if(numerosNormais.length < 3) {
            empurraUmValorALista(numerosNormais);
          }
          break;
        case 2:
          if(numerosNormais.length < 4) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 5) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 6) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 3:
          if(numerosNormais.length < 7) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 8) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 9) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 4:
          if(numerosNormais.length < 10) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 11) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 12) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 5:
          if(numerosNormais.length < 13) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 14) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 15) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 6:
          if(numerosNormais.length < 16) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 17) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 18) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 7:
          if(numerosNormais.length < 19) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 20) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 21) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 8:
          if (numerosNormais.length < 22) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if (numerosNormais.length < 23) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if (numerosNormais.length < 24) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 9:
          if(numerosNormais.length < 25) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 26) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 27) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 10:
          if(numerosNormais.length < 28) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 29) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 30) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 11:
          if(numerosNormais.length < 31) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 32) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 33) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 12:
          if(numerosNormais.length < 34) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 35) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 36) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 13:
          if (numerosNormais.length < 37) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if (numerosNormais.length < 38) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if (numerosNormais.length < 39) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 14:
          if(numerosNormais.length < 40) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 41) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 42) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 15:
          if(numerosNormais.length < 43) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 44) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 45) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 16:
          if(numerosNormais.length < 46) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 47) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 48) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 17:
          if(numerosNormais.length < 49) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 50) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 51) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 18:
          if(numerosNormais.length < 52) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 53) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 54) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
        case 19:
          if(numerosNormais.length < 55) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 56) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 57) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 20:
          if(numerosNormais.length < 58) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 59) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 60) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 21:
          if(numerosNormais.length < 61) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 62) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 63) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 22:
          if(numerosNormais.length < 64) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 65) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 66) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 23:
          if(numerosNormais.length < 67) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 68) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 69) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 24:
          if(numerosNormais.length < 70) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 71) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 72) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 25:
          if(numerosNormais.length < 73) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 74) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 75) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 26:
          if(numerosNormais.length < 76) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 77) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 78) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 27:
          if(numerosNormais.length < 79) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 80) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 81) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 28:
          if(numerosNormais.length < 82) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 83) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 84) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 29:
          if(numerosNormais.length < 85) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 86) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 87) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 30:
          if(numerosNormais.length < 88) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 89) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 90) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 31:
          if(numerosNormais.length < 91) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 92) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 93) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 32:
          if(numerosNormais.length < 94) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 95) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 96) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 33:
          if(numerosNormais.length < 97) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 98) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 99) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 34:
          if(numerosNormais.length < 100) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 101) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 102) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 35:
          if (numerosNormais.length < 103) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if (numerosNormais.length < 104) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if (numerosNormais.length < 105) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 36:
          if(numerosNormais.length < 106) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 107) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 108) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 37:
          if(numerosNormais.length < 109) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 110) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 111) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 38:
          if(numerosNormais.length < 112) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 113) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 114) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 39:
          if(numerosNormais.length < 115) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 116) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 117) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 40:
          if(numerosNormais.length < 118) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 119) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 120) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 41:
          if(numerosNormais.length < 121) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 122) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 123) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 42:
          if(numerosNormais.length < 124) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 125) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 126) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 43:
          if(numerosNormais.length < 127) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 128) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 129) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 44:
          if(numerosNormais.length < 130) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 131) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 132) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 45:
          if(numerosNormais.length < 133) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 134) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 135) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 46:
          if(numerosNormais.length < 136) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 137) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 138) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 47:
          if(numerosNormais.length < 139) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 140) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 141) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 48:
          if(numerosNormais.length < 142) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 143) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 144) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 49:
          if(numerosNormais.length < 145) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 146) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 147) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 50:
          if(numerosNormais.length < 148) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 149) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 150) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 51:
          if(numerosNormais.length < 151) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 152) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 153) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 52:
          if(numerosNormais.length < 154) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 155) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 156) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 53:
          if(numerosNormais.length < 157) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 158) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 159) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 54:
          if(numerosNormais.length < 160) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 161) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 162) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 55:
          if(numerosNormais.length < 163) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 164) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 166) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 56:
          if(numerosNormais.length < 167) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 168) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 169) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 57:
          if(numerosNormais.length < 170) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 171) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 172) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 58:
          if(numerosNormais.length < 173) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 174) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 175) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 59:
          if(numerosNormais.length < 176) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 177) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 178) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 60:
          if(numerosNormais.length < 179) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 180) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 181) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 61:
          if(numerosNormais.length < 182) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 183) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 184) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 62:
          if(numerosNormais.length < 185) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 186) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 187) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 63:
          if(numerosNormais.length < 188) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 189) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 190) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 64:
          if(numerosNormais.length < 191) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 192) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 193) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 65:
          if(numerosNormais.length < 194) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 195) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 196) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 66:
          if(numerosNormais.length < 197) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 198) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 199) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 67:
          if(numerosNormais.length < 200) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 201) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 202) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 68:
          if(numerosNormais.length < 203) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 204) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 205) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 69:
          if(numerosNormais.length < 206) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 207) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 208) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 70:
          if(numerosNormais.length < 209) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 210) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 211) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 71:
          if(numerosNormais.length < 212) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 213) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 214) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 72:
          if(numerosNormais.length < 215) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 216) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 217) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 73:
          if(numerosNormais.length < 218) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 219) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 220) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 74:
          if(numerosNormais.length < 221) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 222) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 223) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 75:
          if(numerosNormais.length < 224) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 225) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 226) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 76:
          if(numerosNormais.length < 227) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 228) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 229) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 77:
          if(numerosNormais.length < 230) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 231) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 232) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 78:
          if(numerosNormais.length < 233) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 234) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 235) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 79:
          if(numerosNormais.length < 236) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 237) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 238) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 80:
          if(numerosNormais.length < 239) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 240) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 241) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 81:
          if(numerosNormais.length < 242) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 243) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 244) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 82:
          if(numerosNormais.length < 245) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 246) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 247) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 83:
          if(numerosNormais.length < 248) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 249) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 250) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 84:
          if(numerosNormais.length < 251) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 252) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 253) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 85:
          if(numerosNormais.length < 254) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 255) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 256) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 86:
          if(numerosNormais.length < 257) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 258) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 259) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 87:
          if(numerosNormais.length < 260) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 261) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 262) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 88:
          if(numerosNormais.length < 263) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 264) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 265) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 89:
          if(numerosNormais.length < 266) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 267) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 268) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 90:
          if(numerosNormais.length < 269) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 270) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 271) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 91:
          if(numerosNormais.length < 272) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 273) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 274) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 92:
          if(numerosNormais.length < 275) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 276) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 277) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 93:
          if(numerosNormais.length < 278) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 279) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 280) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 94:
          if(numerosNormais.length < 281) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 282) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 283) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 95:
          if(numerosNormais.length < 284) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 285) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 286) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 96:
          if(numerosNormais.length < 287) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 288) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 289) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 97:
          if(numerosNormais.length < 290) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 291) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 292) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 98:
          if(numerosNormais.length < 293) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 294) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 295) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 99:
          if(numerosNormais.length < 296) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 297) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 298) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
        case 100:
          if(numerosNormais.length < 299) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraTresValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 300) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraDoisValoresALista(numerosNormais);
            }
          }
          if(numerosNormais.length < 301) {
            for(let i = 0; i < numeroVariaveis; i++) {
              empurraUmValorALista(numerosNormais);
            }
          }
          break;
      }
    }

    for (let i = 0; i < numeroVariaveis; i++) {

      // mexer aqui ==> acabar aqui depois de finalizar todos os módulos
      if(numeroVariaveis >= 1 && autoInputNumerosNaturais == true) {}
      if(numeroVariaveis >= 1 && usarMaisGrandezas == true && numeroDeGrandezas == 3) {}
      if(numeroVariaveis >= 1 && usarMaisGrandezas == true && numeroDeGrandezas == 3 && autoInputNumerosNaturais == true) {}
      if(numeroVariaveis >= 1 && usarMaisGrandezas == true && numeroDeGrandezas == 4) {}
      if(numeroVariaveis >= 1 && usarMaisGrandezas == true && numeroDeGrandezas == 4 && autoInputNumerosNaturais == true) {}

      switch (i) {
        // Padrão de Sincronia 1
        case 0:
            if (numerosNormais.length < 3 && autoInputNumerosNaturais == false) {
              if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.a = numerosNormais[i] * numerosNormais[i + 1] / numerosNormais[i + 2];
            
            if(isNaN(vars.a) == true) {
              return resultado[0].push(0);
            }

            switch (vars.a) {
              case null:
                vars.a = 0;
                break;
              case Infinity:
                vars.a = 0;
                break;
              case -Infinity:
                vars.a = 0;
                break;
            }

            somaVariaveis = somaVariaveis + vars.a;
            resultado[0].push(vars.a);  
            resultado[1] = somaVariaveis;
            break;
        // Padrão de Sincronia 2
        case 1:
            if (numerosNormais.length < 6 && autoInputNumerosNaturais == false) {
              if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.b = numerosNormais[i + 2] * numerosNormais[i + 3] / numerosNormais[i + 4];
            
            if(isNaN(vars.b) == true) {
              return resultado[0].push(0);
            }

            switch (vars.b) {
              case null:
                vars.b = 0;
                break;
              case Infinity:
                vars.b = 0;
                break;
              case -Infinity:
                vars.b = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.b;
            resultado[0].push(vars.b);
            resultado[1] = somaVariaveis;
            break;
        case 2:
            if (numerosNormais.length < 9 && autoInputNumerosNaturais == false) {
              if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.c = numerosNormais[i + 4] * numerosNormais[i + 5] / numerosNormais[i + 6];
            
            if(isNaN(vars.c) == true) {
              return resultado[0].push(0);
            }

            switch (vars.c) {
              case null:
                vars.c = 0;
                break;
              case Infinity:
                vars.c = 0;
                break;
              case -Infinity:
                vars.c = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.c;
            resultado[0].push(vars.c);
            resultado[1] = somaVariaveis;
            break;
        case 3:
            if (numerosNormais.length < 12 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.d = numerosNormais[i + 6] * numerosNormais[i + 7] / numerosNormais[i + 8];
            
            if(isNaN(vars.d) == true) {
              return resultado[0].push(0);
            }

            switch (vars.d) {
              case null:
                vars.d = 0;
                break;
              case Infinity:
                vars.d = 0;
                break;
              case -Infinity:
                vars.d = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.d;
            resultado[0].push(vars.d);
            resultado[1] = somaVariaveis;
            break;
        case 4:
            if (numerosNormais.length < 15 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.e = numerosNormais[i + 8] * numerosNormais[i + 9] / numerosNormais[i + 10];
            
            if(isNaN(vars.e) == true) {
              return resultado[0].push(0);
            }

            switch (vars.e) {
              case null:
                vars.e = 0;
                break;
              case Infinity:
                vars.e = 0;
                break;
              case -Infinity:
                vars.e = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.e;
            resultado[0].push(vars.e);
            resultado[1] = somaVariaveis;
            break;
        case 5:
            if (numerosNormais.length < 18 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.f = numerosNormais[i + 10] * numerosNormais[i + 11] / numerosNormais[i + 12];
            
            if(isNaN(vars.f) == true) {
              return resultado[0].push(0);
            }

            switch (vars.f) {
              case null:
                vars.f = 0;
                break;
              case Infinity:
                vars.f = 0;
                break;
              case -Infinity:
                vars.f = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.f;
            resultado[0].push(vars.f);
            resultado[1] = somaVariaveis;
            break;
        case 6:
            if (numerosNormais.length < 21 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.g = numerosNormais[i + 12] * numerosNormais[i + 13] / numerosNormais[i + 14];
            
            if(isNaN(vars.g) == true) {
              return resultado[0].push(0);
            }

            switch (vars.g) {
              case null:
                vars.g = 0;
                break;
              case Infinity:
                vars.g = 0;
                break;
              case -Infinity:
                vars.g = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.g;
            resultado[0].push(vars.g);
            resultado[1] = somaVariaveis;
            break;
        case 7:
            if (numerosNormais.length < 24 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.h = numerosNormais[i + 14] * numerosNormais[i + 15] / numerosNormais[i + 16];
            
            if(isNaN(vars.h) == true) {
              return resultado[0].push(0);
            }

            switch (vars.h) {
              case null:
                vars.h = 0;
                break;
              case Infinity:
                vars.h = 0;
                break;
              case -Infinity:
                vars.h = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.h;
            resultado[0].push(vars.h);
            resultado[1] = somaVariaveis;
            break;
        case 8:
            if (numerosNormais.length < 27 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.i = numerosNormais[i + 16] * numerosNormais[i + 17] / numerosNormais[i + 18];
            
            if(isNaN(vars.i) == true) {
              return resultado[0].push(0);
            }

            switch (vars.i) {
              case null:
                vars.i = 0;
                break;
              case Infinity:
                vars.i = 0;
                break;
              case -Infinity:
                vars.i = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.i;
            resultado[0].push(vars.i);
            resultado[1] = somaVariaveis;
            break;
        case 9:
            if (numerosNormais.length < 30 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.j = numerosNormais[i + 18] * numerosNormais[i + 19] / numerosNormais[i + 20];
            
            if(isNaN(vars.j) == true) {
              return resultado[0].push(0);
            }

            switch (vars.j) {
              case null:
                vars.j = 0;
                break;
              case Infinity:
                vars.j = 0;
                break;
              case -Infinity:
                vars.j = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.j;
            resultado[0].push(vars.j);
            resultado[1] = somaVariaveis;
            break;
        case 10:
            if (numerosNormais.length < 33 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.k = numerosNormais[i + 20] * numerosNormais[i + 21] / numerosNormais[i + 22];
            
            if(isNaN(vars.k) == true) {
              return resultado[0].push(0);
            }

            switch (vars.k) {
              case null:
                vars.k = 0;
                break;
              case Infinity:
                vars.k = 0;
                break;
              case -Infinity:
                vars.k = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.k;
            resultado[0].push(vars.k);
            resultado[1] = somaVariaveis;
            break;
        case 11:
            if (numerosNormais.length < 36 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.l = numerosNormais[i + 22] * numerosNormais[i + 23] / numerosNormais[i + 24];
            
            if(isNaN(vars.l) == true) {
              return resultado[0].push(0);
            }

            switch (vars.l) {
              case null:
                vars.l = 0;
                break;
              case Infinity:
                vars.l = 0;
                break;
              case -Infinity:
                vars.l = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.l;
            resultado[0].push(vars.l);
            resultado[1] = somaVariaveis;
            break;
        case 12:
            if (numerosNormais.length < 39 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.m = numerosNormais[i + 24] * numerosNormais[i + 25] / numerosNormais[i + 26];
            
            if(isNaN(vars.m) == true) {
              return resultado[0].push(0);
            }

            switch (vars.m) {
              case null:
                vars.m = 0;
                break;
              case Infinity:
                vars.m = 0;
                break;
              case -Infinity:
                vars.m = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.m;
            resultado[0].push(vars.m);
            resultado[1] = somaVariaveis;
            break;
        case 13:
            if (numerosNormais.length < 42 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.n = numerosNormais[i + 26] * numerosNormais[i + 27] / numerosNormais[i + 28];
            
            if(isNaN(vars.n) == true) {
              return resultado[0].push(0);
            }

            switch (vars.n) {
              case null:
                vars.n = 0;
                break;
              case Infinity:
                vars.n = 0;
                break;
              case -Infinity:
                vars.n = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.n;
            resultado[0].push(vars.n);
            resultado[1] = somaVariaveis;
            break;
        case 14:
            if (numerosNormais.length < 45 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.o = numerosNormais[i + 28] * numerosNormais[i + 29] / numerosNormais[i + 30];
            
            if(isNaN(vars.o) == true) {
              return resultado[0].push(0);
            }

            switch (vars.o) {
              case null:
                vars.o = 0;
                break;
              case Infinity:
                vars.o = 0;
                break;
              case -Infinity:
                vars.o = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.o;
            resultado[0].push(vars.o);
            resultado[1] = somaVariaveis;
            break;
        case 15:
            if (numerosNormais.length < 48 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.p = numerosNormais[i + 30] * numerosNormais[i + 31] / numerosNormais[i + 32];
            
            if(isNaN(vars.p) == true) {
              return resultado[0].push(0);
            }

            switch (vars.p) {
              case null:
                vars.p = 0;
                break;
              case Infinity:
                vars.p = 0;
                break;
              case -Infinity:
                vars.p = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.p;
            resultado[0].push(vars.p);
            resultado[1] = somaVariaveis;
            break;
        case 16:
            if (numerosNormais.length < 51 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.q = numerosNormais[i + 32] * numerosNormais[i + 33] / numerosNormais[i + 34];
            
            if(isNaN(vars.q) == true) {
              return resultado[0].push(0);
            }

            switch (vars.q) {
              case null:
                vars.q = 0;
                break;
              case Infinity:
                vars.q = 0;
                break;
              case -Infinity:
                vars.q = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.q;
            resultado[0].push(vars.q);
            resultado[1] = somaVariaveis;
            break;
        case 17:
            if (numerosNormais.length < 54 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.r = numerosNormais[i + 34] * numerosNormais[i + 35] / numerosNormais[i + 36];
            
            if(isNaN(vars.r) == true) {
              return resultado[0].push(0);
            }

            switch (vars.r) {
              case null:
                vars.r = 0;
                break;
              case Infinity:
                vars.r = 0;
                break;
              case -Infinity:
                vars.r = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.r;
            resultado[0].push(vars.r);
            resultado[1] = somaVariaveis;
            break;
        case 18:
            if (numerosNormais.length < 57 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.s = numerosNormais[i + 36] * numerosNormais[i + 37] / numerosNormais[i + 38];
            
            if(isNaN(vars.s) == true) {
              return resultado[0].push(0);
            }

            switch (vars.s) {
              case null:
                vars.s = 0;
                break;
              case Infinity:
                vars.s = 0;
                break;
              case -Infinity:
                vars.s = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.s;
            resultado[0].push(vars.s);
            resultado[1] = somaVariaveis;
            break;
        case 19:
            if (numerosNormais.length < 60 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.t = numerosNormais[i + 38] * numerosNormais[i + 39] / numerosNormais[i + 40];
            
            if(isNaN(vars.t) == true) {
              return resultado[0].push(0);
            }

            switch (vars.t) {
              case null:
                vars.t = 0;
                break;
              case Infinity:
                vars.t = 0;
                break;
              case -Infinity:
                vars.t = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.t;
            resultado[0].push(vars.t);
            resultado[1] = somaVariaveis;
            break;
        case 20:
            if (numerosNormais.length < 63 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.u = numerosNormais[i + 40] * numerosNormais[i + 41] / numerosNormais[i + 42];
            
            if(isNaN(vars.u) == true) {
              return resultado[0].push(0);
            }

            switch (vars.u) {
              case null:
                vars.u = 0;
                break;
              case Infinity:
                vars.u = 0;
                break;
              case -Infinity:
                vars.u = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.u;
            resultado[0].push(vars.u);
            resultado[1] = somaVariaveis;
            break;
        case 21:
            if (numerosNormais.length < 66 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.v = numerosNormais[i + 42] * numerosNormais[i + 43] / numerosNormais[i + 44];
            
            if(isNaN(vars.v) == true) {
              return resultado[0].push(0);
            }

            switch (vars.v) {
              case null:
                vars.v = 0;
                break;
              case Infinity:
                vars.v = 0;
                break;
              case -Infinity:
                vars.v = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.v;
            resultado[0].push(vars.v);
            resultado[1] = somaVariaveis;
            break;
        case 22:
            if (numerosNormais.length < 69 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.w = numerosNormais[i + 44] * numerosNormais[i + 45] / numerosNormais[i + 46];
            
            if(isNaN(vars.w) == true) {
              return resultado[0].push(0);
            }

            switch (vars.w) {
              case null:
                vars.w = 0;
                break;
              case Infinity:
                vars.w = 0;
                break;
              case -Infinity:
                vars.w = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.w;
            resultado[0].push(vars.w);
            resultado[1] = somaVariaveis;
            break;
        case 23:
            if (numerosNormais.length < 72 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.valor = numerosNormais[i + 46] * numerosNormais[i + 47] / numerosNormais[i + 48];
            
            if(isNaN(vars.valor) == true) {
              return resultado[0].push(0);
            }

            switch (vars.valor) {
              case null:
                vars.valor = 0;
                break;
              case Infinity:
                vars.valor = 0;
                break;
              case -Infinity:
                vars.valor = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.valor;
            resultado[0].push(vars.valor);
            resultado[1] = somaVariaveis;
            break;
        case 24:
            if (numerosNormais.length < 75 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.y = numerosNormais[i + 48] * numerosNormais[i + 49] / numerosNormais[i + 50];
            
            if(isNaN(vars.y) == true) {
              return resultado[0].push(0);
            }

            switch (vars.y) {
              case null:
                vars.y = 0;
                break;
              case Infinity:
                vars.y = 0;
                break;
              case -Infinity:
                vars.y = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.y;
            resultado[0].push(vars.y);
            resultado[1] = somaVariaveis;
            break;
        case 25:
            if (numerosNormais.length < 78 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.z = numerosNormais[i + 50] * numerosNormais[i + 51] / numerosNormais[i + 52];
            
            if(isNaN(vars.z) == true) {
              return resultado[0].push(0);
            }

            switch (vars.z) {
              case null:
                vars.z = 0;
                break;
              case Infinity:
                vars.z = 0;
                break;
              case -Infinity:
                vars.z = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.z;
            resultado[0].push(vars.z);
            resultado[1] = somaVariaveis;
            break;
        case 26:
            if (numerosNormais.length < 81 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.a1 = numerosNormais[i + 52] * numerosNormais[i + 53] / numerosNormais[i + 54];
            
            if(isNaN(vars.a1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.a1) {
              case null:
                vars.a1 = 0;
                break;
              case Infinity:
                vars.a1 = 0;
                break;
              case -Infinity:
                vars.a1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.a1;
            resultado[0].push(vars.a1);
            resultado[1] = somaVariaveis;
            break;
        case 27:
            if (numerosNormais.length < 84 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.b1 = numerosNormais[i + 54] * numerosNormais[i + 55] / numerosNormais[i + 56];
            
            if(isNaN(vars.b1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.b1) {
              case null:
                vars.b1 = 0;
                break;
              case Infinity:
                vars.b1 = 0;
                break;
              case -Infinity:
                vars.b1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.b1;
            resultado[0].push(vars.b1);
            resultado[1] = somaVariaveis;
            break;
        case 28:
            if (numerosNormais.length < 87 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.c1 = numerosNormais[i + 56] * numerosNormais[i + 57] / numerosNormais[i + 58];
            
            if(isNaN(vars.c1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.c1) {
              case null:
                vars.c1 = 0;
                break;
              case Infinity:
                vars.c1 = 0;
                break;
              case -Infinity:
                vars.c1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.c1;
            resultado[0].push(vars.c1);
            resultado[1] = somaVariaveis;
            break;
        case 29:
            if (numerosNormais.length < 90 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.d1 = numerosNormais[i + 58] * numerosNormais[i + 59] / numerosNormais[i + 60];
            
            if(isNaN(vars.d1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.d1) {
              case null:
                vars.d1 = 0;
                break;
              case Infinity:
                vars.d1 = 0;
                break;
              case -Infinity:
                vars.d1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.d1;
            resultado[0].push(vars.d1);
            resultado[1] = somaVariaveis;
            break;
        case 30:
            if (numerosNormais.length < 93 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.e1 = numerosNormais[i + 60] * numerosNormais[i + 61] / numerosNormais[i + 62];
            
            if(isNaN(vars.e1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.e1) {
              case null:
                vars.e1 = 0;
                break;
              case Infinity:
                vars.e1 = 0;
                break;
              case -Infinity:
                vars.e1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.e1;
            resultado[0].push(vars.e1);
            resultado[1] = somaVariaveis;
            break;
        case 31:
            if (numerosNormais.length < 96 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.f1 = numerosNormais[i + 62] * numerosNormais[i + 63] / numerosNormais[i + 64];
            
            if(isNaN(vars.f1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.f1) {
              case null:
                vars.f1 = 0;
                break;
              case Infinity:
                vars.f1 = 0;
                break;
              case -Infinity:
                vars.f1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.f1;
            resultado[0].push(vars.f1);
            resultado[1] = somaVariaveis;
            break;
        case 32:
            if (numerosNormais.length < 99 && autoInputNumerosNaturais == false) 
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;}{
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.g1 = numerosNormais[i + 64] * numerosNormais[i + 65] / numerosNormais[i + 66];
            
            if(isNaN(vars.g1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.g1) {
              case null:
                vars.g1 = 0;
                break;
              case Infinity:
                vars.g1 = 0;
                break;
              case -Infinity:
                vars.g1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.g1;
            resultado[0].push(vars.g1);
            resultado[1] = somaVariaveis;
            break;
        case 33:
            if (numerosNormais.length < 102 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.h1 = numerosNormais[i + 66] * numerosNormais[i + 67] / numerosNormais[i + 68];
            
            if(isNaN(vars.h1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.h1) {
              case null:
                vars.h1 = 0;
                break;
              case Infinity:
                vars.h1 = 0;
                break;
              case -Infinity:
                vars.h1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.h1;
            resultado[0].push(vars.h1);
            resultado[1] = somaVariaveis;
            break;
        case 34:
            if (numerosNormais.length < 105 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.i1 = numerosNormais[i + 68] * numerosNormais[i + 69] / numerosNormais[i + 70];
            
            if(isNaN(vars.i1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.i1) {
              case null:
                vars.i1 = 0;
                break;
              case Infinity:
                vars.i1 = 0;
                break;
              case -Infinity:
                vars.i1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.i1;
            resultado[0].push(vars.i1);
            resultado[1] = somaVariaveis;
            break;
        case 35:
            if (numerosNormais.length < 108 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.j1 = numerosNormais[i + 70] * numerosNormais[i + 71] / numerosNormais[i + 72];
            
            if(isNaN(vars.j1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.j1) {
              case null:
                vars.j1 = 0;
                break;
              case Infinity:
                vars.j1 = 0;
                break;
              case -Infinity:
                vars.j1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.j1;
            resultado[0].push(vars.j1);
            resultado[1] = somaVariaveis;
            break;
        case 36:
            if (numerosNormais.length < 111 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.k1 = numerosNormais[i + 72] * numerosNormais[i + 73] / numerosNormais[i + 74];
            
            if(isNaN(vars.k1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.k1) {
              case null:
                vars.k1 = 0;
                break;
              case Infinity:
                vars.k1 = 0;
                break;
              case -Infinity:
                vars.k1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.k1;
            resultado[0].push(vars.k1);
            resultado[1] = somaVariaveis;
            break;
        case 37:
            if (numerosNormais.length < 114 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.l1 = numerosNormais[i + 74] * numerosNormais[i + 75] / numerosNormais[i + 76];
            
            if(isNaN(vars.l1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.l1) {
              case null:
                vars.l1 = 0;
                break;
              case Infinity:
                vars.l1 = 0;
                break;
              case -Infinity:
                vars.l1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.l1;
            resultado[0].push(vars.l1);
            resultado[1] = somaVariaveis;
            break;
        case 38:
            if (numerosNormais.length < 117 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.m1 = numerosNormais[i + 76] * numerosNormais[i + 77] / numerosNormais[i + 78];
            
            if(isNaN(vars.m1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.m1) {
              case null:
                vars.m1 = 0;
                break;
              case Infinity:
                vars.m1 = 0;
                break;
              case -Infinity:
                vars.m1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.m1;
            resultado[0].push(vars.m1);
            resultado[1] = somaVariaveis;
            break;
        case 39:
            if (numerosNormais.length < 120 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.n1 = numerosNormais[i + 78] * numerosNormais[i + 79] / numerosNormais[i + 80];
            
            if(isNaN(vars.n1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.n1) {
              case null:
                vars.n1 = 0;
                break;
              case Infinity:
                vars.n1 = 0;
                break;
              case -Infinity:
                vars.n1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.n1;
            resultado[0].push(vars.n1);
            resultado[1] = somaVariaveis;
            break;
        case 40:
            if (numerosNormais.length < 123 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.o1 = numerosNormais[i + 80] * numerosNormais[i + 81] / numerosNormais[i + 82];
            
            if(isNaN(vars.o1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.o1) {
              case null:
                vars.o1 = 0;
                break;
              case Infinity:
                vars.o1 = 0;
                break;
              case -Infinity:
                vars.o1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.o1;
            resultado[0].push(vars.o1);
            resultado[1] = somaVariaveis;
            break;
        case 41:
            if (numerosNormais.length < 126 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.p1 = numerosNormais[i + 82] * numerosNormais[i + 83] / numerosNormais[i + 84];
            
            if(isNaN(vars.p1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.p1) {
              case null:
                vars.p1 = 0;
                break;
              case Infinity:
                vars.p1 = 0;
                break;
              case -Infinity:
                vars.p1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.p1;
            resultado[0].push(vars.p1);
            resultado[1] = somaVariaveis;
            break;
        case 42:
            if (numerosNormais.length < 129 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.q1 = numerosNormais[i + 84] * numerosNormais[i + 85] / numerosNormais[i + 86];
            
            if(isNaN(vars.q1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.q1) {
              case null:
                vars.q1 = 0;
                break;
              case Infinity:
                vars.q1 = 0;
                break;
              case -Infinity:
                vars.q1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.q1;
            resultado[0].push(vars.q1);
            resultado[1] = somaVariaveis;
            break;
        case 43:
            if (numerosNormais.length < 132 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.r1 = numerosNormais[i + 86] * numerosNormais[i + 87] / numerosNormais[i + 88];
            
            if(isNaN(vars.r1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.r1) {
              case null:
                vars.r1 = 0;
                break;
              case Infinity:
                vars.r1 = 0;
                break;
              case -Infinity:
                vars.r1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.r1;
            resultado[0].push(vars.r1);
            resultado[1] = somaVariaveis;
            break;
        case 44:
            if (numerosNormais.length < 135 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.s1 = numerosNormais[i + 88] * numerosNormais[i + 89] / numerosNormais[i + 90];
            
            if(isNaN(vars.s1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.s1) {
              case null:
                vars.s1 = 0;
                break;
              case Infinity:
                vars.s1 = 0;
                break;
              case -Infinity:
                vars.s1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.s1;
            resultado[0].push(vars.s1);
            resultado[1] = somaVariaveis;
            break;
        case 45:
            if (numerosNormais.length < 138 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.t1 = numerosNormais[i + 90] * numerosNormais[i + 91] / numerosNormais[i + 92];
            
            if(isNaN(vars.t1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.t1) {
              case null:
                vars.t1 = 0;
                break;
              case Infinity:
                vars.t1 = 0;
                break;
              case -Infinity:
                vars.t1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.t1;
            resultado[0].push(vars.t1);
            resultado[1] = somaVariaveis;
            break;
        case 46:
            if (numerosNormais.length < 141 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.u1 = numerosNormais[i + 92] * numerosNormais[i + 93] / numerosNormais[i + 94];
            
            if(isNaN(vars.u1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.u1) {
              case null:
                vars.u1 = 0;
                break;
              case Infinity:
                vars.u1 = 0;
                break;
              case -Infinity:
                vars.u1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.u1;
            resultado[0].push(vars.u1);
            resultado[1] = somaVariaveis;
            break;
        case 47:
            if (numerosNormais.length < 144 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.v1 = numerosNormais[i + 94] * numerosNormais[i + 95] / numerosNormais[i + 96];
            
            if(isNaN(vars.v1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.v1) {
              case null:
                vars.v1 = 0;
                break;
              case Infinity:
                vars.v1 = 0;
                break;
              case -Infinity:
                vars.v1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.v1;
            resultado[0].push(vars.v1);
            resultado[1] = somaVariaveis;
            break;
        case 48:
            if (numerosNormais.length < 147 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.w1 = numerosNormais[i + 96] * numerosNormais[i + 97] / numerosNormais[i + 98];
            
            if(isNaN(vars.w1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.w1) {
              case null:
                vars.w1 = 0;
                break;
              case Infinity:
                vars.w1 = 0;
                break;
              case -Infinity:
                vars.w1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.w1;
            resultado[0].push(vars.w1);
            resultado[1] = somaVariaveis;
            break;
        case 49:
            if (numerosNormais.length < 150 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.valor1 = numerosNormais[i + 98] * numerosNormais[i + 99] / numerosNormais[i + 100];
            
            if(isNaN(vars.valor1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.valor1) {
              case null:
                vars.valor1 = 0;
                break;
              case Infinity:
                vars.valor1 = 0;
                break;
              case -Infinity:
                vars.valor1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.valor1;
            resultado[0].push(vars.valor1);
            resultado[1] = somaVariaveis;
            break;
        case 50:
            if (numerosNormais.length < 153 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.y1 = numerosNormais[i + 100] * numerosNormais[i + 101] / numerosNormais[i + 102];
            
            if(isNaN(vars.y1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.y1) {
              case null:
                vars.y1 = 0;
                break;
              case Infinity:
                vars.y1 = 0;
                break;
              case -Infinity:
                vars.y1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.y1;
            resultado[0].push(vars.y1);
            resultado[1] = somaVariaveis;
            break;
        case 51:
            if (numerosNormais.length < 156 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.z1 = numerosNormais[i + 102] * numerosNormais[i + 103] / numerosNormais[i + 104];
            
            if(isNaN(vars.z1) == true) {
              return resultado[0].push(0);
            }

            switch (vars.z1) {
              case null:
                vars.z1 = 0;
                break;
              case Infinity:
                vars.z1 = 0;
                break;
              case -Infinity:
                vars.z1 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.z1;
            resultado[0].push(vars.z1);
            resultado[1] = somaVariaveis;
            break;
        case 52:
            if (numerosNormais.length < 159 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.a2 = numerosNormais[i + 104] * numerosNormais[i + 105] / numerosNormais[i + 106];
            
            if(isNaN(vars.a2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.a2) {
              case null:
                vars.a2 = 0;
                break;
              case Infinity:
                vars.a2 = 0;
                break;
              case -Infinity:
                vars.a2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.a2;
            resultado[0].push(vars.a2);
            resultado[1] = somaVariaveis;
            break;
        // Padrão de Sincronia 3
        case 53:
            if (numerosNormais.length < 161 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.b2 = numerosNormais[i + 105] * numerosNormais[i + 106] / numerosNormais[i + 107];
            
            if(isNaN(vars.b2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.b2) {
              case null:
                vars.b2 = 0;
                break;
              case Infinity:
                vars.b2 = 0;
                break;
              case -Infinity:
                vars.b2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.b2;
            resultado[0].push(vars.b2);
            resultado[1] = somaVariaveis;
            break;
        case 54:
            if (numerosNormais.length < 164 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.c2 = numerosNormais[i + 107] * numerosNormais[i + 108] / numerosNormais[i + 109];
            
            if(isNaN(vars.c2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.c2) {
              case null:
                vars.c2 = 0;
                break;
              case Infinity:
                vars.c2 = 0;
                break;
              case -Infinity:
                vars.c2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.c2;
            resultado[0].push(vars.c2);
            resultado[1] = somaVariaveis;
            break;
        case 55:
            if (numerosNormais.length < 167 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.d2 = numerosNormais[i + 109] * numerosNormais[i + 110] / numerosNormais[i + 111];
            
            if(isNaN(vars.d2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.d2) {
              case null:
                vars.d2 = 0;
                break;
              case Infinity:
                vars.d2 = 0;
                break;
              case -Infinity:
                vars.d2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.d2;
            resultado[0].push(vars.d2);
            resultado[1] = somaVariaveis;
            break;
        case 56:
            if (numerosNormais.length < 170 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.e2 = numerosNormais[i + 111] * numerosNormais[i + 112] / numerosNormais[i + 113];
            
            if(isNaN(vars.e2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.e2) {
              case null:
                vars.e2 = 0;
                break;
              case Infinity:
                vars.e2 = 0;
                break;
              case -Infinity:
                vars.e2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.e2;
            resultado[0].push(vars.e2);
            resultado[1] = somaVariaveis;
            break;
        case 57:
            if (numerosNormais.length < 173 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.f2 = numerosNormais[i + 113] * numerosNormais[i + 114] / numerosNormais[i + 115];
            
            if(isNaN(vars.f2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.f2) {
              case null:
                vars.f2 = 0;
                break;
              case Infinity:
                vars.f2 = 0;
                break;
              case -Infinity:
                vars.f2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.f2;
            resultado[0].push(vars.f2);
            resultado[1] = somaVariaveis;
            break;
        case 58:
            if (numerosNormais.length < 176 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.g2 = numerosNormais[i + 115] * numerosNormais[i + 116] / numerosNormais[i + 117];
            
            if(isNaN(vars.g2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.g2) {
              case null:
                vars.g2 = 0;
                break;
              case Infinity:
                vars.g2 = 0;
                break;
              case -Infinity:
                vars.g2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.g2;
            resultado[0].push(vars.g2);
            resultado[1] = somaVariaveis;
            break;
        case 59:
            if (numerosNormais.length < 179 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.h2 = numerosNormais[i + 117] * numerosNormais[i + 118] / numerosNormais[i + 119];
            
            if(isNaN(vars.h2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.h2) {
              case null:
                vars.h2 = 0;
                break;
              case Infinity:
                vars.h2 = 0;
                break;
              case -Infinity:
                vars.h2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.h2;
            resultado[0].push(vars.h2);
            resultado[1] = somaVariaveis;
            break;
        case 60:
            if (numerosNormais.length < 181 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.i2 = numerosNormais[i + 118] * numerosNormais[i + 119] / numerosNormais[i + 120];
            
            if(isNaN(vars.i2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.i2) {
              case null:
                vars.i2 = 0;
                break;
              case Infinity:
                vars.i2 = 0;
                break;
              case -Infinity:
                vars.i2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.i2;
            resultado[0].push(vars.i2);
            resultado[1] = somaVariaveis;
            break;
        case 61:
            if (numerosNormais.length < 185 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.j2 = numerosNormais[i + 121] * numerosNormais[i + 122] / numerosNormais[i + 123];
            
            if(isNaN(vars.j2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.j2) {
              case null:
                vars.j2 = 0;
                break;
              case Infinity:
                vars.j2 = 0;
                break;
              case -Infinity:
                vars.j2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.j2;
            resultado[0].push(vars.j2);
            resultado[1] = somaVariaveis;
            break;
        case 62:
            if (numerosNormais.length < 188 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.k2 = numerosNormais[i + 123] * numerosNormais[i + 124] / numerosNormais[i + 125];
            
            if(isNaN(vars.k2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.k2) {
              case null:
                vars.k2 = 0;
                break;
              case Infinity:
                vars.k2 = 0;
                break;
              case -Infinity:
                vars.k2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.k2;
            resultado[0].push(vars.k2);
            resultado[1] = somaVariaveis;
            break;
        case 63:
            if (numerosNormais.length < 191 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.l2 = numerosNormais[i + 125] * numerosNormais[i + 126] / numerosNormais[i + 127];
            
            if(isNaN(vars.l2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.l2) {
              case null:
                vars.l2 = 0;
                break;
              case Infinity:
                vars.l2 = 0;
                break;
              case -Infinity:
                vars.l2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.l2;
            resultado[0].push(vars.l2);
            resultado[1] = somaVariaveis;
            break;
        case 64:
            if (numerosNormais.length < 194 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.m2 = numerosNormais[i + 127] * numerosNormais[i + 128] / numerosNormais[i + 129];
            
            if(isNaN(vars.m2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.m2) {
              case null:
                vars.m2 = 0;
                break;
              case Infinity:
                vars.m2 = 0;
                break;
              case -Infinity:
                vars.m2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.m2;
            resultado[0].push(vars.m2);
            resultado[1] = somaVariaveis;
            break;
        case 65:
            if (numerosNormais.length < 197 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.n2 = numerosNormais[i + 129] * numerosNormais[i + 130] / numerosNormais[i + 131];
            
            if(isNaN(vars.n2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.n2) {
              case null:
                vars.n2 = 0;
                break;
              case Infinity:
                vars.n2 = 0;
                break;
              case -Infinity:
                vars.n2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.n2;
            resultado[0].push(vars.n2);
            resultado[1] = somaVariaveis;
            break;
        case 66:
            if (numerosNormais.length < 200 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.o2 = numerosNormais[i + 131] * numerosNormais[i + 132] / numerosNormais[i + 133];
            
            if(isNaN(vars.o2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.o2) {
              case null:
                vars.o2 = 0;
                break;
              case Infinity:
                vars.o2 = 0;
                break;
              case -Infinity:
                vars.o2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.o2;
            resultado[0].push(vars.o2);
            resultado[1] = somaVariaveis;
            break;
        case 67:
            if (numerosNormais.length < 203 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.p2 = numerosNormais[i + 133] * numerosNormais[i + 134] / numerosNormais[i + 135];
            
            if(isNaN(vars.p2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.p2) {
              case null:
                vars.p2 = 0;
                break;
              case Infinity:
                vars.p2 = 0;
                break;
              case -Infinity:
                vars.p2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.p2;
            resultado[0].push(vars.p2);
            resultado[1] = somaVariaveis;
            break;
        case 68:
            if (numerosNormais.length < 206 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.q2 = numerosNormais[i + 135] * numerosNormais[i + 136] / numerosNormais[i + 137];
            
            if(isNaN(vars.q2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.q2) {
              case null:
                vars.q2 = 0;
                break;
              case Infinity:
                vars.q2 = 0;
                break;
              case -Infinity:
                vars.q2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.q2;
            resultado[0].push(vars.q2);
            resultado[1] = somaVariaveis;
            break;
        case 69:
            if (numerosNormais.length < 209 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.r2 = numerosNormais[i + 137] * numerosNormais[i + 138] / numerosNormais[i + 139];
            
            if(isNaN(vars.r2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.r2) {
              case null:
                vars.r2 = 0;
                break;
              case Infinity:
                vars.r2 = 0;
                break;
              case -Infinity:
                vars.r2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.r2;
            resultado[0].push(vars.r2);
            resultado[1] = somaVariaveis;
            break;
        case 70:
            if (numerosNormais.length < 212 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.s2 = numerosNormais[i + 139] * numerosNormais[i + 140] / numerosNormais[i + 141];
            
            if(isNaN(vars.s2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.s2) {
              case null:
                vars.s2 = 0;
                break;
              case Infinity:
                vars.s2 = 0;
                break;
              case -Infinity:
                vars.s2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.s2;
            resultado[0].push(vars.s2);
            resultado[1] = somaVariaveis;
            break;
        case 71:
            if (numerosNormais.length < 215 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.t2 = numerosNormais[i + 141] * numerosNormais[i + 142] / numerosNormais[i + 143];
            
            if(isNaN(vars.t2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.t2) {
              case null:
                vars.t2 = 0;
                break;
              case Infinity:
                vars.t2 = 0;
                break;
              case -Infinity:
                vars.t2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.t2;
            resultado[0].push(vars.t2);
            resultado[1] = somaVariaveis;
            break;
        case 72:
            if (numerosNormais.length < 218 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.u2 = numerosNormais[i + 143] * numerosNormais[i + 144] / numerosNormais[i + 145];
            
            if(isNaN(vars.u2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.u2) {
              case null:
                vars.u2 = 0;
                break;
              case Infinity:
                vars.u2 = 0;
                break;
              case -Infinity:
                vars.u2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.u2;
            resultado[0].push(vars.u2);
            resultado[1] = somaVariaveis;
            break;
        case 73:
            if (numerosNormais.length < 221 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.v2 = numerosNormais[i + 145] * numerosNormais[i + 146] / numerosNormais[i + 147];
            
            if(isNaN(vars.v2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.v2) {
              case null:
                vars.v2 = 0;
                break;
              case Infinity:
                vars.v2 = 0;
                break;
              case -Infinity:
                vars.v2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.v2;
            resultado[0].push(vars.v2);
            resultado[1] = somaVariaveis;
            break;
        case 74:
            if (numerosNormais.length < 224 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.w2 = numerosNormais[i + 147] * numerosNormais[i + 148] / numerosNormais[i + 149];
            
            if(isNaN(vars.w2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.w2) {
              case null:
                vars.w2 = 0;
                break;
              case Infinity:
                vars.w2 = 0;
                break;
              case -Infinity:
                vars.w2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.w2;
            resultado[0].push(vars.w2);
            resultado[1] = somaVariaveis;
            break;
        case 75:
            if (numerosNormais.length < 227 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.valor2 = numerosNormais[i + 149] * numerosNormais[i + 150] / numerosNormais[i + 151];
            
            if(isNaN(vars.valor2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.valor2) {
              case null:
                vars.valor2 = 0;
                break;
              case Infinity:
                vars.valor2 = 0;
                break;
              case -Infinity:
                vars.valor2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.valor2;
            resultado[0].push(vars.valor2);
            resultado[1] = somaVariaveis;
            break;
        case 76:
            if (numerosNormais.length < 230 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.y2 = numerosNormais[i + 151] * numerosNormais[i + 152] / numerosNormais[i + 153];
            
            if(isNaN(vars.y2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.y2) {
              case null:
                vars.y2 = 0;
                break;
              case Infinity:
                vars.y2 = 0;
                break;
              case -Infinity:
                vars.y2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.y2;
            resultado[0].push(vars.y2);
            resultado[1] = somaVariaveis;
            break;
        case 77:
            if (numerosNormais.length < 233 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.z2 = numerosNormais[i + 153] * numerosNormais[i + 154] / numerosNormais[i + 155];
            
            if(isNaN(vars.z2) == true) {
              return resultado[0].push(0);
            }

            switch (vars.z2) {
              case null:
                vars.z2 = 0;
                break;
              case Infinity:
                vars.z2 = 0;
                break;
              case -Infinity:
                vars.z2 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.z2;
            resultado[0].push(vars.z2);
            resultado[1] = somaVariaveis;
            break;
        case 78:
            if (numerosNormais.length < 236 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.a3 = numerosNormais[i + 155] * numerosNormais[i + 156] / numerosNormais[i + 157];
            
            if(isNaN(vars.a3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.a3) {
              case null:
                vars.a3 = 0;
                break;
              case Infinity:
                vars.a3 = 0;
                break;
              case -Infinity:
                vars.a3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.a3;
            resultado[0].push(vars.a3);
            resultado[1] = somaVariaveis;
            break;
        case 79:
            if (numerosNormais.length < 239 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.b3 = numerosNormais[i + 157] * numerosNormais[i + 158] / numerosNormais[i + 159];
            
            if(isNaN(vars.b3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.b3) {
              case null:
                vars.b3 = 0;
                break;
              case Infinity:
                vars.b3 = 0;
                break;
              case -Infinity:
                vars.b3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.b3;
            resultado[0].push(vars.b3);
            resultado[1] = somaVariaveis;
            break;
        case 80:
            if (numerosNormais.length < 241 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.c3 = numerosNormais[i + 158] * numerosNormais[i + 159] / numerosNormais[i + 160];
            
            if(isNaN(vars.c3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.c3) {
              case null:
                vars.c3 = 0;
                break;
              case Infinity:
                vars.c3 = 0;
                break;
              case -Infinity:
                vars.c3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.c3;
            resultado[0].push(vars.c3);
            resultado[1] = somaVariaveis;
            break;
        case 81:
            if (numerosNormais.length < 244 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.d3 = numerosNormais[i + 160] * numerosNormais[i + 161] / numerosNormais[i + 162];
            
            if(isNaN(vars.d3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.d3) {
              case null:
                vars.d3 = 0;
                break;
              case Infinity:
                vars.d3 = 0;
                break;
              case -Infinity:
                vars.d3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.d3;
            resultado[0].push(vars.d3);
            resultado[1] = somaVariaveis;
            break;
        case 82:
            if (numerosNormais.length < 247 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.e3 = numerosNormais[i + 162] * numerosNormais[i + 163] / numerosNormais[i + 164];
            
            if(isNaN(vars.e3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.e3) {
              case null:
                vars.e3 = 0;
                break;
              case Infinity:
                vars.e3 = 0;
                break;
              case -Infinity:
                vars.e3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.e3;
            resultado[0].push(vars.e3);
            resultado[1] = somaVariaveis;
            break;
        case 83:
            if (numerosNormais.length < 250 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.f3 = numerosNormais[i + 164] * numerosNormais[i + 165] / numerosNormais[i + 166];
            
            if(isNaN(vars.f3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.f3) {
              case null:
                vars.f3 = 0;
                break;
              case Infinity:
                vars.f3 = 0;
                break;
              case -Infinity:
                vars.f3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.f3;
            resultado[0].push(vars.f3);
            resultado[1] = somaVariaveis;
            break;
        case 84:
            if (numerosNormais.length < 253 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.g3 = numerosNormais[i + 166] * numerosNormais[i + 167] / numerosNormais[i + 169];
            
            if(isNaN(vars.g3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.g3) {
              case null:
                vars.g3 = 0;
                break;
              case Infinity:
                vars.g3 = 0;
                break;
              case -Infinity:
                vars.g3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.g3;
            resultado[0].push(vars.g3);
            resultado[1] = somaVariaveis;
            break;
        case 85:
            if (numerosNormais.length < 256 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.h3 = numerosNormais[i + 168] * numerosNormais[i + 169] / numerosNormais[i + 170];
            
            if(isNaN(vars.h3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.h3) {
              case null:
                vars.h3 = 0;
                break;
              case Infinity:
                vars.h3 = 0;
                break;
              case -Infinity:
                vars.h3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.h3;
            resultado[0].push(vars.h3);
            resultado[1] = somaVariaveis;
            break;
        case 86:
            if (numerosNormais.length < 259 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.i3 = numerosNormais[i + 170] * numerosNormais[i + 171] / numerosNormais[i + 172];
            
            if(isNaN(vars.i3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.i3) {
              case null:
                vars.i3 = 0;
                break;
              case Infinity:
                vars.i3 = 0;
                break;
              case -Infinity:
                vars.i3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.i3;
            resultado[0].push(vars.i3);
            resultado[1] = somaVariaveis;
            break;
        case 87:
            if (numerosNormais.length < 261 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.j3 = numerosNormais[i + 171] * numerosNormais[i + 172] / numerosNormais[i + 173];
            
            if(isNaN(vars.j3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.j3) {
              case null:
                vars.j3 = 0;
                break;
              case Infinity:
                vars.j3 = 0;
                break;
              case -Infinity:
                vars.j3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.j3;
            resultado[0].push(vars.j3);
            resultado[1] = somaVariaveis;
            break;
        case 88:
            if (numerosNormais.length < 264 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.k3 = numerosNormais[i + 173] * numerosNormais[i + 174] / numerosNormais[i + 175];
            
            if(isNaN(vars.k3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.k3) {
              case null:
                vars.k3 = 0;
                break;
              case Infinity:
                vars.k3 = 0;
                break;
              case -Infinity:
                vars.k3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.k3;
            resultado[0].push(vars.k3);
            resultado[1] = somaVariaveis;
            break;
        case 89:
            if (numerosNormais.length < 267 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.l3 = numerosNormais[i + 175] * numerosNormais[i + 176] / numerosNormais[i + 177];
            
            if(isNaN(vars.l3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.l3) {
              case null:
                vars.l3 = 0;
                break;
              case Infinity:
                vars.l3 = 0;
                break;
              case -Infinity:
                vars.l3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.l3;
            resultado[0].push(vars.l3);
            resultado[1] = somaVariaveis;
            break;
        case 90:
            if (numerosNormais.length < 270 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.m3 = numerosNormais[i + 177] * numerosNormais[i + 178] / numerosNormais[i + 179];
            
            if(isNaN(vars.m3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.m3) {
              case null:
                vars.m3 = 0;
                break;
              case Infinity:
                vars.m3 = 0;
                break;
              case -Infinity:
                vars.m3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.m3;
            resultado[0].push(vars.m3);
            resultado[1] = somaVariaveis;
            break;
        case 91:
            if (numerosNormais.length < 273 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.n3 = numerosNormais[i + 179] * numerosNormais[i + 180] / numerosNormais[i + 181];
            
            if(isNaN(vars.n3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.n3) {
              case null:
                vars.n3 = 0;
                break;
              case Infinity:
                vars.n3 = 0;
                break;
              case -Infinity:
                vars.n3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.n3;
            resultado[0].push(vars.n3);
            resultado[1] = somaVariaveis;
            break;
        case 92:
            if (numerosNormais.length < 276 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.o3 = numerosNormais[i + 181] * numerosNormais[i + 182] / numerosNormais[i + 183];
            
            if(isNaN(vars.o3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.o3) {
              case null:
                vars.o3 = 0;
                break;
              case Infinity:
                vars.o3 = 0;
                break;
              case -Infinity:
                vars.o3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.o3;
            resultado[0].push(vars.o3);
            resultado[1] = somaVariaveis;
            break;
        case 93:
            if (numerosNormais.length < 279 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.p3 = numerosNormais[i + 183] * numerosNormais[i + 184] / numerosNormais[i + 185];
            
            if(isNaN(vars.p3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.p3) {
              case null:
                vars.p3 = 0;
                break;
              case Infinity:
                vars.p3 = 0;
                break;
              case -Infinity:
                vars.p3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.p3;
            resultado[0].push(vars.p3);
            resultado[1] = somaVariaveis;
            break;
        case 94:
            if (numerosNormais.length < 281 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.q3 = numerosNormais[i + 184] * numerosNormais[i + 185] / numerosNormais[i + 186];
            
            if(isNaN(vars.q3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.q3) {
              case null:
                vars.q3 = 0;
                break;
              case Infinity:
                vars.q3 = 0;
                break;
              case -Infinity:
                vars.q3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.q3;
            resultado[0].push(vars.q3);
            resultado[1] = somaVariaveis;
            break;
        case 95:
            if (numerosNormais.length < 284 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.r3 = numerosNormais[i + 186] * numerosNormais[i + 187] / numerosNormais[i + 188];
            
            if(isNaN(vars.r3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.r3) {
              case null:
                vars.r3 = 0;
                break;
              case Infinity:
                vars.r3 = 0;
                break;
              case -Infinity:
                vars.r3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.r3;
            resultado[0].push(vars.r3);
            resultado[1] = somaVariaveis;
            break;
        case 96:
            if (numerosNormais.length < 287 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.s3 = numerosNormais[i + 188] * numerosNormais[i + 189] / numerosNormais[i + 190];
            
            if(isNaN(vars.s3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.s3) {
              case null:
                vars.s3 = 0;
                break;
              case Infinity:
                vars.s3 = 0;
                break;
              case -Infinity:
                vars.s3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.s3;
            resultado[0].push(vars.s3);
            resultado[1] = somaVariaveis;
            break;
        case 97:
            if (numerosNormais.length < 290 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.t3 = numerosNormais[i + 190] * numerosNormais[i + 191] / numerosNormais[i + 192];
            
            if(isNaN(vars.t3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.t3) {
              case null:
                vars.t3 = 0;
                break;
              case Infinity:
                vars.t3 = 0;
                break;
              case -Infinity:
                vars.t3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.t3;
            resultado[0].push(vars.t3);
            resultado[1] = somaVariaveis;
            break;
        case 98:
            if (numerosNormais.length < 293 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.u3 = numerosNormais[i + 192] * numerosNormais[i + 193] / numerosNormais[i + 194];
            
            if(isNaN(vars.u3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.u3) {
              case null:
                vars.u3 = 0;
                break;
              case Infinity:
                vars.u3 = 0;
                break;
              case -Infinity:
                vars.u3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.u3;
            resultado[0].push(vars.u3);
            resultado[1] = somaVariaveis;
            break;
        case 99:
            if (numerosNormais.length < 296 && autoInputNumerosNaturais == false)
            if(numerosNormais[i] == 0 || isNaN(numerosNormais[i]) == true) {return resultado[1] = 0;} {
              console.error("Números Normais Insuficientes!, Tente Novamente.");
              return resultado[1] = 0; 
            }

            vars.v3 = numerosNormais[i + 194] * numerosNormais[i + 195] / numerosNormais[i + 196];
            
            if(isNaN(vars.v3) == true) {
              return resultado[0].push(0);
            }

            switch (vars.v3) {
              case null:
                vars.v3 = 0;
                break;
              case Infinity:
                vars.v3 = 0;
                break;
              case -Infinity:
                vars.v3 = 0;
                break;
            }
            somaVariaveis = somaVariaveis + vars.v3;
            resultado[0].push(vars.v3);
            resultado[1] = somaVariaveis;
            break;
        default:
            console.error("Houve um ou mais erros ao realizar o calculo!");
            break;
      }
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

}