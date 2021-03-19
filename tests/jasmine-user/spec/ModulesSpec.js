describe("Módulos da Calculadora", () => {

  describe("01_01-Soma", () => {

    it("Realiza a soma de valores positivos", () => {
      let modulos = new Modules();
      let values = ["4", "6"];
      expect(modulos.soma(values)).toEqual(10);
    });

    it("Realiza a soma de valores negativos", () => {
      let modulos = new Modules();
      let values = ["-4", "-6"];
      expect(modulos.soma(values)).toEqual(-10);
    });

    it("Realiza a soma de valores negativos e positivos", () => {
      let modulos = new Modules();
      let values = ["-4", "6"];
      expect(modulos.soma(values)).toEqual(2);
    });

    it("Realiza a soma de valores nulos", () => {
      let modulos = new Modules();
      let values = ["4", "0"];
      expect(modulos.soma(values)).toEqual(4);
    });

  });

  describe("01_02-Subtração", () => {});

  describe("01_03-Multiplicação", () => {});

  describe("01_04-Divisão", () => {});

  describe("01_05-Potência", () => {});

  describe("01_06-Potência de Potência", () => {});

  describe("01_07-Raiz Quadrada", () => {});

  describe("01_08-Raiz Cúbica", () => {});

  describe("01_09-Raiz Biquadrada", () => {});

  describe("01_10-Raiz Bicúbica", () => {});

  describe("02_01-Seno", () => {});

  describe("02_02-Cosseno", () => {});

  describe("02_03-Tangente", () => {});

  describe("02_04-Secante", () => {});

  describe("02_05-Cossecante", () => {});

  describe("02_06-Cotangente", () => {});

  describe("02_07-Seno Hiperbólico", () => {});

  describe("02_08-Cosseno Hiperbólico", () => {});

  describe("02_09-Tangente Hiperbólica", () => {});

  describe("02_10-Secante Hiperbólica", () => {});

  describe("02_11-Cossecante Hiperbólica", () => {});

  describe("02_12-Cotangente Hiperbólica", () => {});

  describe("03_01-Arco Seno", () => {});

  describe("03_02-Arco Cosseno", () => {});

  describe("03_03-Arco Tangente", () => {});

  describe("03_04-Arco Secante", () => {});

  describe("03_05-Arco Cossecante", () => {});

  describe("03_06-Arco Cotangente", () => {});

  describe("03_07-Arco Seno Hiperbólico", () => {});

  describe("03_08-Arco Cosseno Hiperbólico", () => {});

  describe("03_09-Arco Tangente Hiperbólica", () => {});

  describe("03_10-Arco Secante Hiperbólica", () => {});

  describe("03_11-Arco Cossecante Hiperbólica", () => {});

  describe("03_12-Arco Cotangente Hiperbólica", () => {});

  describe("04_01-Logarítmo na Base 2", () => {});

  describe("04_02-Logarítmo na Base 10", () => {});

  describe("04_03-Logarítmo em Qualquer Base", () => {});

  describe("04_04-Logarítmo Natural", () => {});

  describe("04_05-Logarítmo Natural mais Um", () => {});

  describe("04_06-Logarítmo Natural mais Um Valor", () => {});

});