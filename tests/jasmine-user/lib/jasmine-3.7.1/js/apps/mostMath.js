let mostMath = {
  logn: (x=0, y=0) => {
    // 2 elevado a 5 = 32 => log na base 2 de 32 = 5
    let resposta = 1;
    while(x ** resposta != y) {resposta++}
    return resposta;
  }
}

let teste = mostMath.logn(2, 400);

console.log(teste);