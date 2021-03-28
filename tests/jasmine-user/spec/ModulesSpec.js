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

    it("Realiza a soma de valores positivos decimais", () => {
      let modulos = new Modules();
      let values = ["2.1", "4.3"];
      expect(modulos.soma(values)).toEqual(6.4);
    });

    it("Realiza a soma de valores negativos decimais", () => {
      let modulos = new Modules();
      let values = ["-20.0", "-6.4"];
      expect(modulos.soma(values)).toEqual(-26.4);
    });

    it("Realiza a soma de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let values = ["10.9", "-6.9"];
      expect(modulos.soma(values)).toEqual(4.0);
    });

    it("Realiza a soma de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let values = [""];
      expect(modulos.soma(values)).toEqual(0);
    });

    it("Realiza a soma de valores nulos", () => {
      let modulos = new Modules();
      let values = ["4", "0"];
      expect(modulos.soma(values)).toEqual(4);
    });

  });

  describe("01_02-Subtração", () => {

    it("Realiza a subtração de valores positivos", () => {
      let modulos = new Modules();
      let valuesSub = ["1000"];
      let values = ["50", "50"];
      expect(modulos.subtracao(values, valuesSub)).toEqual(900);
    });

    it("Realiza a subtração de valores negativos", () => {
      let modulos = new Modules();
      let valuesSub = ["1000"];
      let values = ["-50", "-10"];
      expect(modulos.subtracao(values, valuesSub)).toEqual(1060);
    });

    it("Realiza a subtração de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesSub = ["1000"];
      let values = ["50", "-10"];
      expect(modulos.subtracao(values, valuesSub)).toEqual(960);
    });

    it("Realiza a subtração de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesSub = ["1000"];
      let values = ["2.1", "4.3"];
      expect(modulos.subtracao(values, valuesSub)).toEqual(993.6);
    });

    it("Realiza a subtração de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesSub = ["1000"];
      let values = ["-20.0", "-6.4"];
      expect(modulos.subtracao(values, valuesSub)).toEqual(1026.4);
    });

    it("Realiza a subtração de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesSub = ["1000"];
      let values = ["10.9", "-6.9"];
      expect(modulos.subtracao(values, valuesSub)).toEqual(996.0);
    });

    it("Realiza a subtração de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesSub = ["1000"];
      let values = [""];
      expect(modulos.subtracao(values, valuesSub)).toEqual(1000);
    });

    it("Realiza a subtração de valores nulos", () => {
      let modulos = new Modules();
      let valuesSub = ["1000"];
      let values = ["0", "0"];
      expect(modulos.subtracao(values, valuesSub)).toEqual(1000);
    });

  });

  describe("01_03-Multiplicação", () => {
    
    it("Realiza a multiplicação de valores positivos", () => {
      let modulos = new Modules();
      let values = ["4", "6"];
      expect(modulos.multiplicacao(values)).toEqual(24);
    });
    
    it("Realiza a multiplicação de valores negativos", () => {
      let modulos = new Modules();
      let values = ["-2", "-2"];
      expect(modulos.multiplicacao(values)).toEqual(4);
    });
    
    it("Realiza a multiplicação de valores negativos e positivos", () => {
      let modulos = new Modules();
      let values = ["4", "-2"];
      expect(modulos.multiplicacao(values)).toEqual(-8);
    });

    it("Realiza a multiplicação de valores positivos decimais", () => {
      let modulos = new Modules();
      let values = ["2.1", "4.3"];
      expect(modulos.multiplicacao(values)).toEqual(9.03);
    });

    it("Realiza a multiplicação de valores negativos decimais", () => {
      let modulos = new Modules();
      let values = ["-20.0", "-6.4"];
      expect(modulos.multiplicacao(values)).toEqual(128);
    });

    it("Realiza a multiplicação de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let values = ["10.9", "-6.9"];
      expect(modulos.multiplicacao(values)).toEqual(-75.21000000000001);
    });

    it("Realiza a multiplicação de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let values = [""];
      expect(modulos.multiplicacao(values)).toEqual(1);
    });

    it("Realiza a multiplicação de valores nulos", () => {
      let modulos = new Modules();
      let values = ["4", "0"];
      expect(modulos.multiplicacao(values)).toEqual(0);
    });

  });

  describe("01_04-Divisão", () => {
    
    it("Realiza a divisão de valores positivos", () => {
      let modulos = new Modules();
      let valuesDiv = ["1000"];
      let values = ["50", "50"];
      expect(modulos.divisao(values, valuesDiv)).toEqual(10);
    });

    it("Realiza a divisão de valores negativos", () => {
      let modulos = new Modules();
      let valuesDiv = ["1000"];
      let values = ["-40", "-10"];
      expect(modulos.divisao(values, valuesDiv)).toEqual(-20);
    });

    it("Realiza a divisão de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesDiv = ["1000"];
      let values = ["60", "-10"];
      expect(modulos.divisao(values, valuesDiv)).toEqual(20);
    });

    it("Realiza a divisão de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesDiv = ["1000"];
      let values = ["2.1", "4.3"];
      expect(modulos.divisao(values, valuesDiv)).toEqual(156.25);
    });

    it("Realiza a divisão de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesDiv = ["1000"];
      let values = ["-20.0", "-6.4"];
      expect(modulos.divisao(values, valuesDiv)).toEqual(-37.87878787878788);
    });

    it("Realiza a divisão de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesDiv = ["1000"];
      let values = ["10.9", "-6.9"];
      expect(modulos.divisao(values, valuesDiv)).toEqual(250);
    });

    it("Realiza a divisão de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesDiv = ["1000"];
      let values = [""];
      expect(modulos.divisao(values, valuesDiv)).toEqual(1000);
    });

    it("Realiza a divisão de valores nulos", () => {
      let modulos = new Modules();
      let valuesDiv = ["1000"];
      let values = ["0", "0"];
      expect(modulos.divisao(values, valuesDiv)).toEqual(1000);
    });

  });

  describe("01_05-Potência", () => {
        
    it("Realiza a potência de valores positivos", () => {
      let modulos = new Modules();
      let valuesPot = ["2", "2"];
      let values = "2";
      expect(modulos.potencia(values, valuesPot)).toEqual(16);
    });

    it("Realiza a potência de valores negativos", () => {
      let modulos = new Modules();
      let valuesPot = ["-2", "-2"];
      let values = "2";
      expect(modulos.potencia(values, valuesPot)).toEqual(0.0625);
    });

    it("Realiza a potência de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesPot = ["2", "-2"];
      let values = "2";
      expect(modulos.potencia(values, valuesPot)).toEqual(1);
    });

    it("Realiza a potência de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesPot = ["2.1", "4.3"];
      let values = "2";
      expect(modulos.potencia(values, valuesPot)).toEqual(84.44850628946526);
    });

    it("Realiza a potência de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesPot = ["-20.0", "-6.4"];
      let values = "2";
      expect(modulos.potencia(values, valuesPot)).toEqual(1.1292968440878388e-8);
    });

    it("Realiza a potência de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesPot = ["10.9", "-6.9"];
      let values = "2";
      expect(modulos.potencia(values, valuesPot)).toEqual(16);
    });

    it("Realiza a potência de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesPot = [""];
      let values = "2";
      expect(modulos.potencia(values, valuesPot)).toEqual(1);
    });

    it("Realiza a potência de valores nulos", () => {
      let modulos = new Modules();
      let valuesPot = ["0"];
      let values = "2";
      expect(modulos.potencia(values, valuesPot)).toEqual(1);
    });

  });

  describe("01_06-Potência de Potência", () => {
    
    it("Realiza a potência de potência de valores positivos", () => {
      let modulos = new Modules();
      let potNvl1 = ["2"];
      let potNvl2 = ["2"];
      let potNvl3 = ["1"];
      let potNvl4 = ["1"];
      let potNvl5 = ["1"];
      let values = "2";
      expect(modulos.potenciaDePotencia(values, potNvl1, potNvl2, potNvl3, potNvl4, potNvl5)).toEqual(16);
    });
    
    it("Realiza a potência de potência de valores negativos", () => {
      let modulos = new Modules();
      let potNvl1 = ["-2"];
      let potNvl2 = ["-2"];
      let potNvl3 = [""];
      let potNvl4 = [""];
      let potNvl5 = [""];
      let values = "2";
      expect(modulos.potenciaDePotencia(values, potNvl1, potNvl2, potNvl3, potNvl4, potNvl5)).toEqual(16);
    });
    
    it("Realiza a potência de potência de valores positivos e negativos", () => {
      let modulos = new Modules();
      let potNvl1 = ["2"];
      let potNvl2 = ["-2"];
      let potNvl3 = ["1"];
      let potNvl4 = ["-1"];
      let potNvl5 = ["1"];
      let values = "2";
      expect(modulos.potenciaDePotencia(values, potNvl1, potNvl2, potNvl3, potNvl4, potNvl5)).toEqual(16);
    });
    
    it("Realiza a potência de potência de valores positivos decimais", () => {
      let modulos = new Modules();
      let potNvl1 = ["2.1"];
      let potNvl2 = ["2.1"];
      let potNvl3 = ["1.1"];
      let potNvl4 = ["1.1"];
      let potNvl5 = ["1.1"];
      let values = "2";
      expect(modulos.potenciaDePotencia(values, potNvl1, potNvl2, potNvl3, potNvl4, potNvl5)).toEqual(58.47345772667575);
    });
    
    it("Realiza a potência de potência de valores negativos decimais", () => {
      let modulos = new Modules();
      let potNvl1 = ["-2.1"];
      let potNvl2 = ["-2.1"];
      let potNvl3 = [""];
      let potNvl4 = [""];
      let potNvl5 = [""];
      let values = "2";
      expect(modulos.potenciaDePotencia(values, potNvl1, potNvl2, potNvl3, potNvl4, potNvl5)).toEqual(21.258973025544186);
    });
    
    it("Realiza a potência de potência de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let potNvl1 = ["2.1"];
      let potNvl2 = ["-2.1"];
      let potNvl3 = ["1.1"];
      let potNvl4 = ["-1.1"];
      let potNvl5 = ["1.1"];
      let values = "2";
      expect(modulos.potenciaDePotencia(values, potNvl1, potNvl2, potNvl3, potNvl4, potNvl5)).toEqual(58.47345772667576);
    });
    
    it("Realiza a potência de potência de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let potNvl1 = [""];
      let potNvl2 = [""];
      let potNvl3 = [""];
      let potNvl4 = [""];
      let potNvl5 = [""];
      let values = "2";
      expect(modulos.potenciaDePotencia(values, potNvl1, potNvl2, potNvl3, potNvl4, potNvl5)).toEqual(2);
    });
    
    it("Realiza a potência de potência de valores nulos", () => {
      let modulos = new Modules();
      let potNvl1 = ["1"];
      let potNvl2 = ["0"];
      let potNvl3 = ["0"];
      let potNvl4 = ["0"];
      let potNvl5 = ["0"];
      let values = "2";
      expect(modulos.potenciaDePotencia(values, potNvl1, potNvl2, potNvl3, potNvl4, potNvl5)).toEqual(1);
    });

  });

  describe("01_07-Raiz Quadrada", () => {

    it("Realiza a raiz quadrada de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.raizQuadrada(valuesRaiz)).toEqual(2);
    });

    it("Realiza a raiz quadrada de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.raizQuadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz quadrada de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.raizQuadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz quadrada de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.1"];
      expect(modulos.raizQuadrada(valuesRaiz)).toEqual(2.04939015319192);
    });

    it("Realiza a raiz quadrada de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.1"];
      expect(modulos.raizQuadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz quadrada de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "-2.1"];
      expect(modulos.raizQuadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz quadrada de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.raizQuadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz quadrada de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.raizQuadrada(valuesRaiz)).toEqual(0);
    });

  });

  describe("01_08-Raiz Cúbica", () => {

    it("Realiza a raiz cúbica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.raizCubica(valuesRaiz)).toEqual(1.5874010519681996);
    });

    it("Realiza a raiz cúbica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.raizCubica(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz cúbica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.raizCubica(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz cúbica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.5", "2.6"];
      expect(modulos.raizCubica(valuesRaiz)).toEqual(1.721300620726316);
    });

    it("Realiza a raiz cúbica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.3", "-2.3"];
      expect(modulos.raizCubica(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz cúbica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "-2.1"];
      expect(modulos.raizCubica(valuesRaiz)).toEqual(0.46415888336127803);
    });

    it("Realiza a raiz cúbica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.raizCubica(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz cúbica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.raizCubica(valuesRaiz)).toEqual(0);
    });

  });

  describe("01_09-Raiz Biquadrada", () => {

    it("Realiza a raiz biquadrada de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2", "2"];
      expect(modulos.raizBiquadrada(valuesRaiz)).toEqual(1.5650845800732873);
    });

    it("Realiza a raiz biquadrada de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.raizBiquadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz biquadrada de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.raizBiquadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz biquadrada de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.3", "2.5"];
      expect(modulos.raizBiquadrada(valuesRaiz)).toEqual(1.6207359770526288);
    });

    it("Realiza a raiz biquadrada de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.1"];
      expect(modulos.raizBiquadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz biquadrada de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "-2.1"];
      expect(modulos.raizBiquadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz biquadrada de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.raizBiquadrada(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz biquadrada de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.raizBiquadrada(valuesRaiz)).toEqual(0);
    });

  });

  describe("01_10-Raiz Bicúbica", () => {
 
    it("Realiza a raiz bicúbica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.raizBicubica(valuesRaiz)).toEqual(4);
    });

    it("Realiza a raiz bicúbica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.raizBicubica(valuesRaiz)).toEqual(-4);
    });

    it("Realiza a raiz bicúbica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.raizBicubica(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz bicúbica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.4", "2.6"];
      expect(modulos.raizBicubica(valuesRaiz)).toEqual(5);
    });

    it("Realiza a raiz bicúbica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.4"];
      expect(modulos.raizBicubica(valuesRaiz)).toEqual(-4.5);
    });

    it("Realiza a raiz bicúbica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.5", "-2.3"];
      expect(modulos.raizBicubica(valuesRaiz)).toEqual(0.20000000000000018);
    });

    it("Realiza a raiz bicúbica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.raizBicubica(valuesRaiz)).toEqual(0);
    });

    it("Realiza a raiz bicúbica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.raizBicubica(valuesRaiz)).toEqual(0);
    });

  });

  describe("02_01-Seno", () => {
            
    it("Realiza o seno de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.seno(valuesRaiz)).toEqual(-0.7568024953079282);
    });
            
    it("Realiza o seno de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.seno(valuesRaiz)).toEqual(0.7568024953079282);
    });
            
    it("Realiza o seno de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.seno(valuesRaiz)).toEqual(0);
    });

    it("Realiza o seno de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.3", "2.5"];
      expect(modulos.seno(valuesRaiz)).toEqual(-0.9961646088358407);
    });
            
    it("Realiza o seno de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.2"];
      expect(modulos.seno(valuesRaiz)).toEqual(0.9161659367494552);
    });
            
    it("Realiza o seno de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.4", "-2.5"];
      expect(modulos.seno(valuesRaiz)).toEqual(-0.09983341664682824);
    });
            
    it("Realiza o seno de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.seno(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o seno de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.seno(valuesRaiz)).toEqual(0);
    });

  });

  describe("02_02-Cosseno", () => {

    it("Realiza o cosseno de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.cosseno(valuesRaiz)).toEqual(-0.6536436208636119);
    });
            
    it("Realiza o cosseno de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.cosseno(valuesRaiz)).toEqual(-0.6536436208636119);
    });
            
    it("Realiza o cosseno de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.cosseno(valuesRaiz)).toEqual(1);
    });

    it("Realiza o cosseno de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.1"];
      expect(modulos.cosseno(valuesRaiz)).toEqual(-0.4902608213406994);
    });
            
    it("Realiza o cosseno de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.3", "-2.3"];
      expect(modulos.cosseno(valuesRaiz)).toEqual(-0.11215252693505487);
    });
            
    it("Realiza o cosseno de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.4", "-2.4"];
      expect(modulos.cosseno(valuesRaiz)).toEqual(1);
    });
            
    it("Realiza o cosseno de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.cosseno(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o cosseno de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.cosseno(valuesRaiz)).toEqual(1);
    });

  });

  describe("02_03-Tangente", () => {

    it("Realiza a tangente de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.tangente(valuesRaiz)).toEqual(1.1578212823495777);
    });
            
    it("Realiza a tangente de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.tangente(valuesRaiz)).toEqual(-1.1578212823495777);
    });
            
    it("Realiza a tangente de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.tangente(valuesRaiz)).toEqual(0);
    });

    it("Realiza a tangente de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.1"];
      expect(modulos.tangente(valuesRaiz)).toEqual(1.7777797745088417);
    });
            
    it("Realiza a tangente de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.1"];
      expect(modulos.tangente(valuesRaiz)).toEqual(-1.7777797745088417);
    });
            
    it("Realiza a tangente de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "-2.1"];
      expect(modulos.tangente(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza a tangente de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.tangente(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza a tangente de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.tangente(valuesRaiz)).toEqual(0);
    });

  });

  describe("02_04-Secante", () => {

    it("Realiza a secante de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.secante(valuesRaiz)).toEqual(-1.5298856564663974);
    });
            
    it("Realiza a secante de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.secante(valuesRaiz)).toEqual(-1.5298856564663974);
    });
            
    it("Realiza a secante de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.secante(valuesRaiz)).toEqual(1);
    });

    it("Realiza a secante de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.1"];
      expect(modulos.secante(valuesRaiz)).toEqual(-2.039730601489498);
    });
            
    it("Realiza a secante de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.4"];
      expect(modulos.secante(valuesRaiz)).toEqual(-4.743927548368325);
    });
            
    it("Realiza a secante de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "-2.4"];
      expect(modulos.secante(valuesRaiz)).toEqual(1.0467516015380856);
    });
            
    it("Realiza a secante de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.secante(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza a secante de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.secante(valuesRaiz)).toEqual(1);
    });

  });

  describe("02_05-Cossecante", () => {

    it("Realiza a cossecante de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.cossecante(valuesRaiz)).toEqual(-1.3213487088109024);
    });
            
    it("Realiza a cossecante de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.cossecante(valuesRaiz)).toEqual(1.3213487088109024);
    });
            
    it("Realiza a cossecante de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["1", "-2"];
      expect(modulos.cossecante(valuesRaiz)).toEqual(-1.1883951057781212);
    });

    it("Realiza a cossecante de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "2.1"];
      expect(modulos.cossecante(valuesRaiz)).toEqual(-1.0915053265874377);
    });
            
    it("Realiza a cossecante de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.2"];
      expect(modulos.cossecante(valuesRaiz)).toEqual(1.0915053265874377);
    });
            
    it("Realiza a cossecante de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["1.2", "-2.3"];
      expect(modulos.cossecante(valuesRaiz)).toEqual(-1.1220733185272);
    });
            
    it("Realiza a cossecante de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.cossecante(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza a cossecante de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.cossecante(valuesRaiz)).toEqual(0);
    });

  });

  describe("02_06-Cotangente", () => {

    it("Realiza a cotangente de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.cotangente(valuesRaiz)).toEqual(0.8636911544506165);
    });
            
    it("Realiza a cotangente de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.cotangente(valuesRaiz)).toEqual(-0.8636911544506165);
    });
            
    it("Realiza a cotangente de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["1", "-2"];
      expect(modulos.cotangente(valuesRaiz)).toEqual(-0.6420926159343306);
    });

    it("Realiza a cotangente de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "2.1"];
      expect(modulos.cotangente(valuesRaiz)).toEqual(0.43747443121712737);
    });
            
    it("Realiza a cotangente de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.4", "-2.6"];
      expect(modulos.cotangente(valuesRaiz)).toEqual(0.2958129155327455);
    });
            
    it("Realiza a cotangente de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["1.6", "-2.2"];
      expect(modulos.cotangente(valuesRaiz)).toEqual(-1.461695947078102);
    });
            
    it("Realiza a cotangente de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.cotangente(valuesRaiz)).toEqual(0);
    });

    it("Realiza a cotangente de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.cotangente(valuesRaiz)).toEqual(0);
    });

  });

  describe("02_07-Seno Hiperbólico", () => {

    it("Realiza o seno hiperbólico de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.senoHiper(valuesRaiz)).toEqual(27.28991719712775);
    });
            
    it("Realiza o seno hiperbólico de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.senoHiper(valuesRaiz)).toEqual(-27.28991719712775);
    });
            
    it("Realiza o seno hiperbólico de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.senoHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza o seno hiperbólico de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "2.3"];
      expect(modulos.senoHiper(valuesRaiz)).toEqual(45.003011151991785);
    });
            
    it("Realiza o seno hiperbólico de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.5", "-2.4"];
      expect(modulos.senoHiper(valuesRaiz)).toEqual(-67.1411665509323);
    });
            
    it("Realiza o seno hiperbólico de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "-2.4"];
      expect(modulos.senoHiper(valuesRaiz)).toEqual(-0.30452029344714243);
    });
            
    it("Realiza o seno hiperbólico de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.senoHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza o seno hiperbólico de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.senoHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("02_08-Cosseno Hiperbólico", () => {

    it("Realiza o cosseno hiperbólico de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.cossenoHiper(valuesRaiz)).toEqual(27.308232836016487);
    });
            
    it("Realiza o cosseno hiperbólico de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.cossenoHiper(valuesRaiz)).toEqual(27.308232836016487);
    });
            
    it("Realiza o cosseno hiperbólico de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.cossenoHiper(valuesRaiz)).toEqual(1);
    });

    it("Realiza o cosseno hiperbólico de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.4", "2.4"];
      expect(modulos.cossenoHiper(valuesRaiz)).toEqual(60.759323632891935);
    });
            
    it("Realiza o cosseno hiperbólico de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.4"];
      expect(modulos.cossenoHiper(valuesRaiz)).toEqual(45.014120148530026);
    });
            
    it("Realiza o cosseno hiperbólico de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.5", "-2.6"];
      expect(modulos.cossenoHiper(valuesRaiz)).toEqual(1.0050041680558035);
    });
            
    it("Realiza o cosseno hiperbólico de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.cossenoHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o cosseno hiperbólico de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.cossenoHiper(valuesRaiz)).toEqual(1);
    });

  });

  describe("02_09-Tangente Hiperbólica", () => {

    it("Realiza a tangente hiperbólica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.tangenteHiper(valuesRaiz)).toEqual(0.999329299739067);
    });
            
    it("Realiza a tangente hiperbólica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.tangenteHiper(valuesRaiz)).toEqual(-0.999329299739067);
    });
            
    it("Realiza a tangente hiperbólica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.tangenteHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza a tangente hiperbólica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.6", "2.1"];
      expect(modulos.tangenteHiper(valuesRaiz)).toEqual(0.9998345655542966);
    });
            
    it("Realiza a tangente hiperbólica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.5"];
      expect(modulos.tangenteHiper(valuesRaiz)).toEqual(-0.9997979416121845);
    });
            
    it("Realiza a tangente hiperbólica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "-2.3"];
      expect(modulos.tangenteHiper(valuesRaiz)).toEqual(-0.09966799462495547);
    });
            
    it("Realiza a tangente hiperbólica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.tangenteHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza a tangente hiperbólica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.tangenteHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("02_10-Secante Hiperbólica", () => {

    it("Realiza a secante hiperbólica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.secanteHiper(valuesRaiz)).toEqual(0.03661899347368653);
    });
            
    it("Realiza a secante hiperbólica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.secanteHiper(valuesRaiz)).toEqual(0.03661899347368653);
    });
            
    it("Realiza a secante hiperbólica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.secanteHiper(valuesRaiz)).toEqual(1);
    });

    it("Realiza a secante hiperbólica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "2.4"];
      expect(modulos.secanteHiper(valuesRaiz)).toEqual(0.02010164043154202);
    });
            
    it("Realiza a secante hiperbólica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.5", "-2.1"];
      expect(modulos.secanteHiper(valuesRaiz)).toEqual(0.02010164043154202);
    });
            
    it("Realiza a secante hiperbólica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.3", "-2.1"];
      expect(modulos.secanteHiper(valuesRaiz)).toEqual(0.9803279976447253);
    });
            
    it("Realiza a secante hiperbólica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.secanteHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza a secante hiperbólica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.secanteHiper(valuesRaiz)).toEqual(1);
    });

  });

  describe("02_11-Cossecante Hiperbólica", () => {

    it("Realiza a cossecante hiperbólica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.cossecanteHiper(valuesRaiz)).toEqual(0.03664357032586561);
    });
            
    it("Realiza a cossecante hiperbólica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.cossecanteHiper(valuesRaiz)).toEqual(-0.03664357032586561);
    });
            
    it("Realiza a cossecante hiperbólica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.cossecanteHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza a cossecante hiperbólica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "2.3"];
      expect(modulos.cossecanteHiper(valuesRaiz)).toEqual(0.02222073533307873);
    });
            
    it("Realiza a cossecante hiperbólica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.4", "-2.4"];
      expect(modulos.cossecanteHiper(valuesRaiz)).toEqual(-0.016460608954286405);
    });
            
    it("Realiza a cossecante hiperbólica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "-2.2"];
      expect(modulos.cossecanteHiper(valuesRaiz)).toEqual(-9.9833527572961);
    });
            
    it("Realiza a cossecante hiperbólica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.cossecanteHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza a cossecante hiperbólica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.cossecanteHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("02_12-Cotangente Hiperbólica", () => {

    it("Realiza a cotangente hiperbólica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.cotangenteHiper(valuesRaiz)).toEqual(1.0006711504016825);
    });
            
    it("Realiza a cotangente hiperbólica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.cotangenteHiper(valuesRaiz)).toEqual(-1.0006711504016825);
    });
            
    it("Realiza a cotangente hiperbólica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.cotangenteHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza a cotangente hiperbólica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.3", "2.3"];
      expect(modulos.cotangenteHiper(valuesRaiz)).toEqual(1.0002020992236589);
    });
            
    it("Realiza a cotangente hiperbólica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.4", "-2.1"];
      expect(modulos.cotangenteHiper(valuesRaiz)).toEqual(-1.0002468500718924);
    });
            
    it("Realiza a cotangente hiperbólica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "-2.4"];
      expect(modulos.cotangenteHiper(valuesRaiz)).toEqual(-3.4327384303217428);
    });
            
    it("Realiza a cotangente hiperbólica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.cotangenteHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza a cotangente hiperbólica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.cotangenteHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_01-Arco Seno", () => {

    it("Realiza o arco seno de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoSeno(valuesRaiz)).toEqual(0.41151684606748806);
    });
            
    it("Realiza o arco seno de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoSeno(valuesRaiz)).toEqual(-4);
    });
            
    it("Realiza o arco seno de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoSeno(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco seno de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.1"];
      expect(modulos.arcoSeno(valuesRaiz)).toEqual(0.433445320069886);
    });
            
    it("Realiza o arco seno de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.3", "-2.4"];
      expect(modulos.arcoSeno(valuesRaiz)).toEqual(-4.699999999999999);
    });
            
    it("Realiza o arco seno de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.8", "-2.5"];
      expect(modulos.arcoSeno(valuesRaiz)).toEqual(0.3046926540153973);
    });
            
    it("Realiza o arco seno de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoSeno(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco seno de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoSeno(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_02-Arco Cosseno", () => {

    it("Realiza o arco cosseno de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoCosseno(valuesRaiz)).toEqual(1.1592794807274085);
    });
            
    it("Realiza o arco cosseno de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoCosseno(valuesRaiz)).toEqual(-4);
    });
            
    it("Realiza o arco cosseno de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoCosseno(valuesRaiz)).toEqual(1.5707963267948966);
    });

    it("Realiza o arco cosseno de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.1"];
      expect(modulos.arcoCosseno(valuesRaiz)).toEqual(1.1373510067250105);
    });
            
    it("Realiza o arco cosseno de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.3", "-2.5"];
      expect(modulos.arcoCosseno(valuesRaiz)).toEqual(-4.8);
    });
            
    it("Realiza o arco cosseno de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.7", "-2.4"];
      expect(modulos.arcoCosseno(valuesRaiz)).toEqual(1.2661036727794988);
    });
            
    it("Realiza o arco cosseno de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoCosseno(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco cosseno de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoCosseno(valuesRaiz)).toEqual(1.5707963267948966);
    });

  });

  describe("03_03-Arco Tangente", () => {

    it("Realiza o arco tangente de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoTangente(valuesRaiz)).toEqual(0.3805063771123649);
    });
            
    it("Realiza o arco tangente de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoTangente(valuesRaiz)).toEqual(-1.3258176636680326);
    });
            
    it("Realiza o arco tangente de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoTangente(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco tangente de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "2.2"];
      expect(modulos.arcoTangente(valuesRaiz)).toEqual(0.41450687458478597);
    });
            
    it("Realiza o arco tangente de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.3", "-2.1"];
      expect(modulos.arcoTangente(valuesRaiz)).toEqual(-1.3473197256542635);
    });
            
    it("Realiza o arco tangente de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.3", "-2.2"];
      expect(modulos.arcoTangente(valuesRaiz)).toEqual(0.09966865249116168);
    });
            
    it("Realiza o arco tangente de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoTangente(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco tangente de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoTangente(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_04-Arco Secante", () => {

    it("Realiza o arco secante de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoSecante(valuesRaiz)).toEqual(0.8626047615131892);
    });
            
    it("Realiza o arco secante de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoSecante(valuesRaiz)).toEqual(-4);
    });
            
    it("Realiza o arco secante de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoSecante(valuesRaiz)).toEqual(0.6366197723675814);
    });

    it("Realiza o arco secante de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.2"];
      expect(modulos.arcoSecante(valuesRaiz)).toEqual(0.8878601156190261);
    });
            
    it("Realiza o arco secante de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.2", "-2.1"];
      expect(modulos.arcoSecante(valuesRaiz)).toEqual(-4.300000000000001);
    });
            
    it("Realiza o arco secante de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.5", "-2.2"];
      expect(modulos.arcoSecante(valuesRaiz)).toEqual(0.7898247367095007);
    });
            
    it("Realiza o arco secante de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoSecante(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco secante de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoSecante(valuesRaiz)).toEqual(0.6366197723675814);
    });

  });

  describe("03_05-Arco Cossecante", () => {

    it("Realiza o arco cossecante de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoCossecante(valuesRaiz)).toEqual(2.4300341761367448);
    });
            
    it("Realiza o arco cossecante de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoCossecante(valuesRaiz)).toEqual(-4);
    });
            
    it("Realiza o arco cossecante de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoCossecante(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco cossecante de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "2.1"];
      expect(modulos.arcoCossecante(valuesRaiz)).toEqual(2.2497553433683612);
    });
            
    it("Realiza o arco cossecante de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.1"];
      expect(modulos.arcoCossecante(valuesRaiz)).toEqual(-4.2);
    });
            
    it("Realiza o arco cossecante de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "-2.1"];
      expect(modulos.arcoCossecante(valuesRaiz)).toEqual(9.983285866839893);
    });
            
    it("Realiza o arco cossecante de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoCossecante(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco cossecante de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoCossecante(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_06-Arco Cotangente", () => {

    it("Realiza o arco cotangente de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoCotangente(valuesRaiz)).toEqual(2.6280768474602896);
    });
            
    it("Realiza o arco cotangente de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoCotangente(valuesRaiz)).toEqual(-0.7542515290023976);
    });
            
    it("Realiza o arco cotangente de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoCotangente(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco cotangente de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "2.1"];
      expect(modulos.arcoCotangente(valuesRaiz)).toEqual(2.462459446722802);
    });
            
    it("Realiza o arco cotangente de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.3", "-2.1"];
      expect(modulos.arcoCotangente(valuesRaiz)).toEqual(-0.7422143244539794);
    });
            
    it("Realiza o arco cotangente de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "-2.1"];
      expect(modulos.arcoCotangente(valuesRaiz)).toEqual(10.033244907055131);
    });
            
    it("Realiza o arco cotangente de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoCotangente(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco cotangente de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoCotangente(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_07-Arco Seno Hiperbólico", () => {

    it("Realiza o arco seno hiperbólico de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoSenoHiper(valuesRaiz)).toEqual(0.39003531977071526);
    });
            
    it("Realiza o arco seno hiperbólico de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoSenoHiper(valuesRaiz)).toEqual(-2.0947125472611012);
    });
            
    it("Realiza o arco seno hiperbólico de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoSenoHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco seno hiperbólico de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.2"];
      expect(modulos.arcoSenoHiper(valuesRaiz)).toEqual(0.41774349944156297);
    });
            
    it("Realiza o arco seno hiperbólico de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.3", "-2.2"];
      expect(modulos.arcoSenoHiper(valuesRaiz)).toEqual(-2.209347708615334);
    });
            
    it("Realiza o arco seno hiperbólico de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "-2.3"];
      expect(modulos.arcoSenoHiper(valuesRaiz)).toEqual(-0.19869011034924117);
    });
            
    it("Realiza o arco seno hiperbólico de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoSenoHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco seno hiperbólico de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoSenoHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_08-Arco Cosseno Hiperbólico", () => {

    it("Realiza o arco cosseno hiperbólico de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoCossenoHiper(valuesRaiz)).toEqual(0.4);
    });
            
    it("Realiza o arco cosseno hiperbólico de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoCossenoHiper(valuesRaiz)).toEqual(-4);
    });
            
    it("Realiza o arco cosseno hiperbólico de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoCossenoHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco cosseno hiperbólico de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.8"];
      expect(modulos.arcoCossenoHiper(valuesRaiz)).toEqual(0.49000000000000005);
    });
            
    it("Realiza o arco cosseno hiperbólico de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.6", "-2.7"];
      expect(modulos.arcoCossenoHiper(valuesRaiz)).toEqual(-5.300000000000001);
    });
            
    it("Realiza o arco cosseno hiperbólico de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.4", "-2.1"];
      expect(modulos.arcoCossenoHiper(valuesRaiz)).toEqual(0.2999999999999998);
    });
            
    it("Realiza o arco cosseno hiperbólico de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoCossenoHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco cosseno hiperbólico de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoCossenoHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_09-Arco Tangente Hiperbólica", () => {

    it("Realiza o arco tangente hiperbólica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoTangenteHiper(valuesRaiz)).toEqual(0.42364893019360184);
    });
            
    it("Realiza o arco tangente hiperbólica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoTangenteHiper(valuesRaiz)).toEqual(-4);
    });
            
    it("Realiza o arco tangente hiperbólica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoTangenteHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco tangente hiperbólica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "2.1"];
      expect(modulos.arcoTangenteHiper(valuesRaiz)).toEqual(0.4598966812126786);
    });
            
    it("Realiza o arco tangente hiperbólica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.1", "-2.4"];
      expect(modulos.arcoTangenteHiper(valuesRaiz)).toEqual(-4.5);
    });
            
    it("Realiza o arco tangente hiperbólica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.2", "-2.1"];
      expect(modulos.arcoTangenteHiper(valuesRaiz)).toEqual(0.10033534773107566);
    });
            
    it("Realiza o arco tangente hiperbólica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoTangenteHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco tangente hiperbólica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoTangenteHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_10-Arco Secante Hiperbólica", () => {
            
    it("Realiza o arco secante hiperbólica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoSecanteHiper(valuesRaiz)).toEqual(0.4);
    });
            
    it("Realiza o arco secante hiperbólica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoSecanteHiper(valuesRaiz)).toEqual(-4);
    });
            
    it("Realiza o arco secante hiperbólica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoSecanteHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco secante hiperbólica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.8", "2.6"];
      expect(modulos.arcoSecanteHiper(valuesRaiz)).toEqual(0.54);
    });
            
    it("Realiza o arco secante hiperbólica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.5", "-2.1"];
      expect(modulos.arcoSecanteHiper(valuesRaiz)).toEqual(-4.6);
    });
            
    it("Realiza o arco secante hiperbólica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.4", "-2.2"];
      expect(modulos.arcoSecanteHiper(valuesRaiz)).toEqual(0.19999999999999973);
    });
            
    it("Realiza o arco secante hiperbólica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoSecanteHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco secante hiperbólica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoSecanteHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_11-Arco Cossecante Hiperbólica", () => {

    it("Realiza o arco cossecante hiperbólica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoCossecanteHiper(valuesRaiz)).toEqual(2.5638703709906485);
    });
            
    it("Realiza o arco cossecante hiperbólica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoCossecanteHiper(valuesRaiz)).toEqual(-0.4773924714909116);
    });
            
    it("Realiza o arco cossecante hiperbólica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoCossecanteHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco cossecante hiperbólica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.1", "2.1"];
      expect(modulos.arcoCossecanteHiper(valuesRaiz)).toEqual(2.447739490103226);
    });
            
    it("Realiza o arco cossecante hiperbólica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2.6", "-2.7"];
      expect(modulos.arcoCossecanteHiper(valuesRaiz)).toEqual(-0.42200548481575634);
    });
            
    it("Realiza o arco cossecante hiperbólica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2.4", "-2.1"];
      expect(modulos.arcoCossecanteHiper(valuesRaiz)).toEqual(3.3821141569743474);
    });
            
    it("Realiza o arco cossecante hiperbólica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoCossecanteHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco cossecante hiperbólica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoCossecanteHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("03_12-Arco Cotangente Hiperbólica", () => {

    it("Realiza o arco cotangente hiperbólica de valores positivos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoCotangenteHiper(valuesRaiz)).toEqual(2.360445002287657);
    });
            
    it("Realiza o arco cotangente hiperbólica de valores negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoCotangenteHiper(valuesRaiz)).toEqual(-4);
    });
            
    it("Realiza o arco cotangente hiperbólica de valores positivos e negativos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoCotangenteHiper(valuesRaiz)).toEqual(0);
    });

    it("Realiza o arco cotangente hiperbólica de valores positivos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "2"];
      expect(modulos.arcoCotangenteHiper(valuesRaiz)).toEqual(2.360445002287657);
    });
            
    it("Realiza o arco cotangente hiperbólica de valores negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["-2", "-2"];
      expect(modulos.arcoCotangenteHiper(valuesRaiz)).toEqual(-4);
    });
            
    it("Realiza o arco cotangente hiperbólica de valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let valuesRaiz = ["2", "-2"];
      expect(modulos.arcoCotangenteHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco cotangente hiperbólica de valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let valuesRaiz = [""];
      expect(modulos.arcoCotangenteHiper(valuesRaiz)).toEqual(0);
    });
            
    it("Realiza o arco cotangente hiperbólica de valores nulos", () => {
      let modulos = new Modules();
      let valuesRaiz = ["0"];
      expect(modulos.arcoCotangenteHiper(valuesRaiz)).toEqual(0);
    });

  });

  describe("04_01-Logarítmo na Base 2", () => {});

  describe("04_02-Logarítmo na Base 10", () => {});

  describe("04_03-Logarítmo em Qualquer Base", () => {});

  describe("04_04-Logarítmo Natural", () => {});

  describe("04_05-Logarítmo Natural mais Um", () => {});

  describe("04_06-Logarítmo Natural mais Um Valor", () => {});

  describe("04_07-Multiplicação de Logarítmos", () => {});

  describe("04_08-Divisão de Logarítmos", () => {});
  
  describe("04_09-Potenciação de Logarítmos", () => {});
  
  describe("04_10-Radiciação de Logarítmos", () => {});

  describe("06_01-Regra de Três Simples", () => {

    it("Realiza a regra de três simples com valores positivos", () => {
      let modulos = new Modules();
      let value1 = "6", value2 = "5", value3 = "10";
      expect(modulos.regradeTresSimples(value1, value2, value3)).toEqual(3);
    });

    it("Realiza a regra de três simples com valores negativos", () => {
      let modulos = new Modules();
      let value1 = "-6", value2 = "-5", value3 = "-10";
      expect(modulos.regradeTresSimples(value1, value2, value3)).toEqual(-3);
    });

    it("Realiza a regra de três simples com valores positivos e negativos", () => {
      let modulos = new Modules();
      let value1 = "-6", value2 = "5", value3 = "-10";
      expect(modulos.regradeTresSimples(value1, value2, value3)).toEqual(3);
    });

    it("Realiza a regra de três simples com valores positivos decimais", () => {
      let modulos = new Modules();
      let value1 = "6.1", value2 = "5.1", value3 = "10.2";
      expect(modulos.regradeTresSimples(value1, value2, value3)).toEqual(3.05);
    });

    it("Realiza a regra de três simples com valores negativos decimais", () => {
      let modulos = new Modules();
      let value1 = "-6.1", value2 = "-5.1", value3 = "-10.2";
      expect(modulos.regradeTresSimples(value1, value2, value3)).toEqual(-3.05);
    });

    it("Realiza a regra de três simples com valores positivos e negativos decimais", () => {
      let modulos = new Modules();
      let value1 = "-6.1", value2 = "5.2", value3 = "-10.1";
      expect(modulos.regradeTresSimples(value1, value2, value3)).toEqual(3.1405940594059407);
    });

    it("Realiza a regra de três simples com valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let value1 = "", value2 = "", value3 = "";
      expect(modulos.regradeTresSimples(value1, value2, value3)).toEqual(0);
    });

    it("Realiza a regra de três simples com valores nulos", () => {
      let modulos = new Modules();
      let value1 = "0", value2 = "0", value3 = "0";
      expect(modulos.regradeTresSimples(value1, value2, value3)).toEqual(0);
    });

  });

  describe("06_02-Regra de Três Composta -- Fazer ajustes importantes", () => {

    it("Realiza a regra de três composta com valores positivos e 1 variável", () => {
      let modulos = new Modules();
      let value = "1", values = ["3", "4", "5"];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual([[2.4], 2.4]);
    });

    it("Realiza a regra de três composta com valores positivos e 2 variáveis", () => {
      let modulos = new Modules();
      let value = "2", values = ["3", "4", "5", "6", "7", "8"];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual([[2.4, 5.25], 7.65]);
    });

    it("Realiza a regra de três composta com valores negativos e 1 variável", () => {
      let modulos = new Modules();
      let value = "1", values = ["-3", "-4", "-5"];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual([[-2.4], -2.4]);
    });

    it("Realiza a regra de três composta com valores negativos e 2 variáveis", () => {
      let modulos = new Modules();
      let value = "2", values = ["-3", "-4", "-5", "-6", "-7", "-8"];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual([[-2.4, -5.25], -7.65]);
    });

    it("Realiza a regra de três composta com valores positivos decimais e 1 variável", () => {
      let modulos = new Modules();
      let value = "1", values = ["3.1", "4.1", "5.1"];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual([[2.492156862745098], 2.492156862745098]);
    });

    it("Realiza a regra de três composta com valores positivos decimais e 2 variáveis", () => {
      let modulos = new Modules();
      let value = "2", values = ["3.1", "4.1", "5.1", "6.1", "7.1", "8.1"];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual([[2.492156862745098, 5.346913580246913], 7.8390704429920115]);
    });

    it("Realiza a regra de três composta com valores negativos decimais e 1 variável", () => {
      let modulos = new Modules();
      let value = "1", values = ["-3.1", "-4.1", "-5.1"];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual([[-2.492156862745098], -2.492156862745098]);
    });

    it("Realiza a regra de três composta com valores negativos decimais e 2 variáveis", () => {
      let modulos = new Modules();
      let value = "2", values = ["-3.1", "-4.1", "-5.1", "-6.1", "-7.1", "-8.1"];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual([[-2.492156862745098, -5.346913580246913], -7.8390704429920115]);
    });

    it("Realiza a regra de três composta com valores vazios ou inexistentes", () => {
      let modulos = new Modules();
      let value = "1", values = [""];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual(0);
    });

    it("Realiza a regra de três composta com valores nulos", () => {
      let modulos = new Modules();
      let value = "2", values = ["0"];
      expect(modulos.regraDeTresComposta(value, values, false, false, 0)).toEqual(0);
    });
    
    it("Realiza a regra de três composta com valores fornecidos pelo autoInput e 1 variável", () => {
      let modulos = new Modules();
      let value = "1", values = ["2"];
      expect(modulos.regraDeTresComposta(value, values, true, false, 0)).not.toBe(1);
    });
    
    it("Realiza a regra de três composta com valores fornecidos pelo autoInput e 2 variáveis", () => {
      let modulos = new Modules();
      let value = "2", values = ["2", "3"];
      expect(modulos.regraDeTresComposta(value, values, true, false, 0)).not.toBe(1);
    });
    
    it("Realiza a regra de três composta com valores fornecidos pelo autoInput e 3 variáveis", () => {
      let modulos = new Modules();
      let value = "3", values = ["2", "3", "4"];
      expect(modulos.regraDeTresComposta(value, values, true, false, 0)).not.toBe(1);
    });

  });

  describe("07_01-Conversor de Bases Monetárias", () => {});

  describe("07_02-Conversor de Bases Techno", () => {

    describe("Bits", () => {
    
      it("Realiza a conversão de Bits para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Bits para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 1, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 1, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 1, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 1, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bits para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 1, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Bits para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 1, 14)).toEqual(0);
      });

    });

    describe("Bytes", () => {
    
      it("Realiza a conversão de Bytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Bytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 2, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 2, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 2, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 2, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Bytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 2, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Bytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 2, 14)).toEqual(0);
      });

    });

    describe("Kilobytes", () => {
    
      it("Realiza a conversão de Kilobytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Kilobytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 3, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 3, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 3, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 3, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Kilobytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 3, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Kilobytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 3, 14)).toEqual(0);
      });

    });

    describe("Megabytes", () => {
    
      it("Realiza a conversão de Megabytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Megabytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 4, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 4, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 4, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 4, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Megabytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 4, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Megabytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 4, 14)).toEqual(0);
      });

    });

    describe("Gigabytes", () => {
    
      it("Realiza a conversão de Gigabytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Gigabytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 5, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 5, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 5, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 5, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Gigabytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 5, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Gigabytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 5, 14)).toEqual(0);
      });

    });

    describe("Terabytes", () => {
    
      it("Realiza a conversão de Terabytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Terabytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 6, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 6, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 6, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 6, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Terabytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 6, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Terabytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 6, 14)).toEqual(0);
      });

    });

    describe("Petabytes", () => {
    
      it("Realiza a conversão de Petabytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Petabytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 7, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 7, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 7, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 7, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Petabytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 7, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Petabytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 7, 14)).toEqual(0);
      });

    });

    describe("Exabytes", () => {
    
      it("Realiza a conversão de Exabytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Exabytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 8, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 8, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 8, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 8, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Exabytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 8, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Exabytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 8, 14)).toEqual(0);
      });

    });

    describe("Yottabytes", () => {
    
      it("Realiza a conversão de Yottabytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Yottabytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 9, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 9, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 9, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 9, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Yottabytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 9, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Yottabytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 9, 14)).toEqual(0);
      });

    });

    describe("Zettabytes", () => {
    
      it("Realiza a conversão de Zettabytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Zettabytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 10, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 10, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 10, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 10, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Zettabytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 10, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Zettabytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 10, 14)).toEqual(0);
      });

    });

    describe("Brontobytes", () => {
    
      it("Realiza a conversão de Brontobytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Brontobytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 11, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 11, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 11, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 11, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Brontobytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 11, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Brontobytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 11, 14)).toEqual(0);
      });

    });

    describe("Geopbytes", () => {
    
      it("Realiza a conversão de Geopbytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 13)).toEqual(0);
      });
    
      it("Realiza a conversão de Geopbytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 12, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 12, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 12, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 12, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Geopbytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 12, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Geopbytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 12, 14)).toEqual(0);
      });

    });

    describe("Saganbytes", () => {
    
      it("Realiza a conversão de Saganbytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Saganbytes para Jotabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 13, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Jotabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Jotabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 13, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Jotabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 13, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Jotabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Jotabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 13, 14)).not.toBe(0);
      });
      
      it("Realiza a conversão de Saganbytes para Jotabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 13, 14)).toEqual(0);
      });
      
      it("Realiza a conversão de Saganbytes para Jotabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 13, 14)).toEqual(0);
      });

    });

    describe("Jotabytes", () => {
    
      it("Realiza a conversão de Jotabytes para Bits com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bits com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bits com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bits com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bits com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bits com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 1)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bits com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 1)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bits com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 1)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Bytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 2)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 2)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Bytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 2)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Kilobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Kilobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Kilobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Kilobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Kilobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Kilobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 3)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Kilobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 3)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Kilobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 3)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Megabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Megabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Megabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Megabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Megabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Megabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 4)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Megabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 4)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Megabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 4)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Gigabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Gigabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Gigabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Gigabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Gigabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Gigabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 5)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Gigabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 5)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Gigabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 5)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Terabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Terabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Terabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Terabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Terabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Terabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 6)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Terabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 6)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Terabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 6)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Petabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Petabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Petabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Petabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Petabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Petabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 7)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Petabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 7)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Petabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 7)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Exabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Exabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Exabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Exabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Exabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Exabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 8)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Exabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 8)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Exabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 8)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Yottabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Yottabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Yottabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Yottabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Yottabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Yottabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 9)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Yottabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 9)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Yottabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 9)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Zettabytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Zettabytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Zettabytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Zettabytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Zettabytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Zettabytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 10)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Zettabytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 10)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Zettabytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 10)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Brontobytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Brontobytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Brontobytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Brontobytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Brontobytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Brontobytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 11)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Brontobytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 11)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Brontobytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 11)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Geopbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Geopbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Geopbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Geopbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Geopbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Geopbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 12)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Geopbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 12)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Geopbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 12)).toEqual(0);
      });
    
      it("Realiza a conversão de Jotabytes para Saganbytes com valores positivos", () => {
        let modulos = new Modules();
        let value = ["30", "2"];
        expect(modulos.convBasesTechno(value, 14, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Saganbytes com valores negativos", () => {
        let modulos = new Modules();
        let value = ["-30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Saganbytes com valores positivos e negativos", () => {
        let modulos = new Modules();
        let value = ["30", "-2"];
        expect(modulos.convBasesTechno(value, 14, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Saganbytes com valores positivos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "1.0"];
        expect(modulos.convBasesTechno(value, 14, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Saganbytes com valores negativos decimais", () => {
        let modulos = new Modules();
        let value = ["-30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Saganbytes com valores positivos e negativos decimais", () => {
        let modulos = new Modules();
        let value = ["30.2", "-1.0"];
        expect(modulos.convBasesTechno(value, 14, 13)).not.toBe(0);
      });
      
      it("Realiza a conversão de Jotabytes para Saganbytes com valores vazios ou inexistentes", () => {
        let modulos = new Modules();
        let value = [""];
        expect(modulos.convBasesTechno(value, 14, 13)).toEqual(0);
      });
      
      it("Realiza a conversão de Jotabytes para Saganbytes com valores nulos", () => {
        let modulos = new Modules();
        let value = ["0"];
        expect(modulos.convBasesTechno(value, 14, 13)).toEqual(0);
      });

    });

  });

  describe("07_03-Conversor de Bases Techno Computacionais", () => {});

  describe("07_04-Conversor de Bases Math de Ângulo Comum", () => {});

  describe("07_05-Conversor de Bases Math de Ângulo Plano", () => {});

  describe("07_06-Conversor de Bases Math de Ângulo Sólido", () => {});

  describe("07_07-Conversor de Bases Math de Comprimento", () => {});

  describe("07_08-Conversor de Bases Math de Área", () => {});

  describe("07_09-Conversor de Bases Math de Volume", () => {});

  describe("07_10-Conversor de Bases Math de 4 Dimensões", () => {});

  describe("07_11-Conversor de Bases Math de 5 Dimensões", () => {});

  describe("07_12-Conversor de Bases Math de 6 Dimensões", () => {});

  describe("07_13-Conversor de Bases Math de Massa", () => {});

  describe("07_14-Conversor de Bases Physic de Tempo", () => {});
  
  describe("07_15-Conversor de Bases Physic de Pressão", () => {});
  
  describe("07_16-Conversor de Bases Physic de Temperatura", () => {});
  
  describe("07_17-Conversor de Bases Physic de Fluxo Magnético", () => {});
  
  describe("07_18-Conversor de Bases Physic de Frequência", () => {});
  
  describe("07_19-Conversor de Bases Physic de Força", () => {});
  
  describe("07_20-Conversor de Bases Physic de Velocidade", () => {});
  
  describe("07_21-Conversor de Bases Physic de Aceleração", () => {});
  
  describe("07_22-Conversor de Bases Physic de Energia", () => {});
  
  describe("07_23-Conversor de Bases Physic de Potência", () => {});
  
  describe("07_24-Conversor de Bases Physic de Carga Elétrica", () => {});
  
  describe("07_25-Conversor de Bases Physic da Diferença de Potencial Elétrico", () => {});
  
  describe("07_26-Conversor de Bases Physic de Capacitância", () => {});
  
  describe("07_27-Conversor de Bases Physic da Resistência Elétrica", () => {});
  
  describe("07_28-Conversor de Bases Physic da Condutância Elétrica", () => {});
  
  describe("07_29-Conversor de Bases Physic do Fluxo de Indução Magnética", () => {});
  
  describe("07_30-Conversor de Bases Physic da Indução Magnética", () => {});
  
  describe("07_31-Conversor de Bases Physic da Indutância", () => {});
  
  describe("07_32-Conversor de Bases Physic do Fluxo Luminoso", () => {});
  
  describe("07_33-Conversor de Bases Physic da Iluminância", () => {});
  
  describe("07_34-Conversor de Bases Chemical de Atividade Radionuclear", () => {});
  
  describe("07_35-Conversor de Bases Chemical de Dose Absorvida", () => {});
  
  describe("07_36-Conversor de Bases Chemical de Dose Equivalente", () => {});
  
  describe("07_37-Conversor de Bases Chemical de Atividade Catalítica", () => {});
  
  describe("07_38-Conversor de Bases Chemical de Massa Específica", () => {});
  
});