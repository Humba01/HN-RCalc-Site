class Modules {
  
  soma(valores=[0]) {
    let total = 0;
    for (let v = 0; v < valores.length; v++) {
      if (valores[v] == "") {
          total = total + 0;
      }
      else {
          total = total + parseFloat(valores[v]);
      }
    }
    return total;
  }

}