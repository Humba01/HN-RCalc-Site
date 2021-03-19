const bodyElement = document.getElementById('corpo');
const bodyHtml = new HtmlPageConstructor();

const textContents = {
  cards: {
    titulos: {
      covencionais: 'Covencionais',
      trigonometricas: 'Trigonométricas',
      arcosTrigonometricos: 'Arcos Trigonométricos',
      logaritmas: 'Logarítmas',
      complexas: 'Complexas',
      conversoresDeBases: 'Conversores de Bases',
      formulasMatematicas: 'Fórmulas Matemáticas',
      formulasFisicas: 'Fórmulas Físicas',
      formulasQuimicas: 'Fórmulas Químicas',
      formulasBiologicas: 'Fórmulas Biológicas',
      formulasGeograficas: 'Fórmulas Geográficas',
      formulasHistoricas: 'Fórmulas Históricas',
      formulasDeTransformacao: 'Fórmulas de Transformação',
      formulasDeDemonstracao: 'Fórmulas de Demonstração'
    },
    textos: {
      covencionais: [
        'Soma',
        'Subtração',
        'Multiplicação',
        'Divisão',
        'Potência',
        'Potência de Potência',
        'Raiz Quadrada',
        'Raiz Cúbica',
        'Raiz Biquadrada',
        'Raiz Bicúbica',
      ],
      trigonometricas: [
        'Seno',
        'Cosseno',
        'Tangente',
        'Secante',
        'Cossecante',
        'Cotangente',
        'Seno Hiperbólico',
        'Cosseno Hiperbólico',
        'Tangente Hiperbólica',
        'Secante Hiperbólica',
        'Cossecante Hiperbólica',
        'Cotangente Hiperbólica'
      ],
      arcosTrigonometricos: [
        'Arco Seno',
        'Arco Cosseno',
        'Arco Tangente',
        'Arco Secante',
        'Arco Cossecante',
        'Arco Cotangente',
        'Arco Seno Hiperbólico',
        'Arco Cosseno Hiperbólico',
        'Arco Tangente Hiperbólica',
        'Arco Secante Hiperbólica',
        'Arco Cossecante Hiperbólica',
        'Arco Cotangente Hiperbólica'
      ],
      logaritmas: [
        'Logarítmo de Base 2',
        'Logarítmo de Base 10',
        'Logarítmo de Base Qualquer',
        'Logarítmo Natural',
        'Logarítmo Natural mais Um',
        'Logarítmo Natural mais Qualquer Valor'
      ],
      complexas: [
        'Soma de Números Complexos',
        'Subtração de Números Complexos',
        'Multiplicação de Números Complexos',
        'Divisão de Números Complexos',
        'Potência de Números Complexos',
        'Pot. de Potência de Números Complexos',
        'Raiz Quadrada de Números Complexos',
        'Raiz Cúbica de Números Complexos',
        'Raiz Biquadrada de Números Complexos',
        'Raiz Bicúbica de Números Complexos',
        'Potências de i',
        'Módulo e argumento'
      ],
      conversoresDeBases: [
        'Bases Monetárias',
        'Bases Techno',
        'Bases Techno Computacionais',
        'Bases Math de Ângulo Comum',
        'Bases Math de Ângulo Plano',
        'Bases Math de Ângulo Sólido',
        'Bases Math de Comprimento',
        'Bases Math de Área',
        'Bases Math de Volume',
        'Bases Math de 4 Dimensões',
        'Bases Math de 5 Dimensões',
        'Bases Math de 6 Dimensões',
        'Bases Math de Massa',
        'Bases Physic de Tempo',
        'Bases Physic de Pressão',
        'Bases Physic de Temperatura',
        'Bases Physic de Fluxo Magnético',
        'Bases Physic de Frequência',
        'Bases Physic de Força',
        'Bases Physic de Velocidade',
        'Basex Physic de Aceleração',
        'Basex Physic de Energia',
        'Bases Physic de Potência',
        'Bases Physic de Carga Elétrica',
        'Bases Physic da Dif. de Potencial Elétrico',
        'Bases Physic da Capacitância',
        'Bases Physic de Resistência Elétrica',
        'Bases Physic de Condutância Elétrica',
        'Bases Physic de Fluxo de Indução Magnética',
        'Bases Physic de Indução Magnética',
        'Bases Physic de Indutância',
        'Bases Physic de Fluxo Luminoso',
        'Bases Physic de Iluminância',
        'Bases Chemical de Atividade Radionuclear',
        'Bases Chemical de Dose Absorvida',
        'Bases Chemical de Dose Equivalente',
        'Bases Chemical de Atividade Catalítica',
        'Bases Chemical de Massa Específica'
      ],
      formulasMatematicas: [
        'Função do 1º Grau',
        'Função do 2º Grau (Bhaskara)',
        'Função do 2º Grau (Covencional)',
        'Fórmula de Girard',
        'Função Exponencial',
        'Função Biquadrática',
        'Sistema de Funções',
        'Sistemas Lineares',
        'Regra de Três Simples (Manual)',
        'Regra de Três Simples (Automático)',
        'Regra de Três Composta (Manual)',
        'Regra de Três Composta (Automático)',
        'Soma de Matrizes',
        'Subtração de Matrizes',
        'Multiplicação de Matrizes',
        'Divisão de Matrizes',
        'Potência de Matrizes',
        'Pot. de Potência de Matrizes',
        'Raiz Quadrada de Matrizes',
        'Raiz Cúbica de Matrizes',
        'Raiz Biquadrada de Matrizes',
        'Raiz Bicúbica de Matrizes',
        'Soma de Polinômios',
        'Subtração de Polinômios',
        'Multiplicação de Polinômios',
        'Divisão de Polinômios',
        'Divisão Sucessivas de Polinômios',
        'Potência de Polinômios',
        'Pot. de Potência de Polinômios',
        'Raiz Quadrada de Polinômios',
        'Raiz Cúbica de Polinômios',
        'Raiz Biquadrada de Polinômios',
        'Raiz Bicúbica de Polinômios',
        'Teorema do Resto',
        'Progressão Aritmética',
        'Soma dos n termos de uma P.A.',
        'Progressão Geométrica',
        'Soma dos n primeiros termos de uma P.G.',
        'Soma dos termos infinitos de uma P.G.',
        'Binômio de Newton',
        'Equações',
        'Inequações',
        'Equações Trigonométricas',
        'Inequações Trigonométricas',
        'Juros Simples',
        'Juros Compostos',
        'Porcentagem',
        'Fatorial de um número',
        'Arranjo Simples',
        'Permutação Simples',
        'Combinação Simples',
        'Probabilidade Condicional',
        'Eventos Indepedentes',
        'Probabilidade da união de eventos',
        'Determinantes 2x2',
        'Determinantes 3x3 (Sarrus)',
        'Determinantes n valor x n valor (Sarrus)',
        'Teorema de Pitágoras',
        'Extensão do Teorema de Pitágoras',
        'Perímetro',
        'Desvio Padrão',
        'Variância',
        'Média',
        'Moda',
        'Mediana',
        'Teorema de Tales de Mileto',
        'Comprimento de uma Reta',
        'Área de um Quadrado Qualquer',
        'Área de um Retângulo Qualquer',
        'Área de um Triãngulo Qualquer',
        'Área de uma Circurferência',
        'Área de um Polígono de n Lados',
        'Volume de um Cubo',
        'Volume de um Paralelepípedo',
        'Volume de um Cilindro',
        'Área Lateral de um Cilindro',
        'Área de um Tronco de Cilindro',
        'Volume de um Tronco de Cilindro',
        'Volume de um Cone',
        'Área Lateral de um Cone',
        'Área de um Tronco de Cone',
        'Volume de um Tronco de Cone',
        'Volume de uma Pirâmide',
        'Área Lateral de uma Pirâmide',
        'Área de um Tronco de Pirâmide',
        'Volume de um Tronco de Pirâmide',
        'Secção de um Cone',
        'Secção de um Pirâmide',
        'Área Lateral de uma Esfera',
        'Volume de uma Esfera',
      ],
      formulasFisicas: [
        'Equação da Velocidade',
        'Equação da Velocidade Média',
        'Equação do Tempo',
        'Equação Horária do Tempo',
        'Equação do Espaço',
        'Equação Horária do Espaço',
        'Equação da Aceleração',
        'Equação da Aceleração Média',
        'Equação de Torricelli',
        'Lançamento Vertical',
        'Lançamento Oblíquo',
        'Equação do Alcance',
        'Equação do Deslocamento Angular',
        'Equação da Velocidade Angular',
        'Equação da Aceleração Angular',
        'Equação do Espaço Angular',
        'Equação Horária do Tempo Angular',
        'Equação Horária do Espaço Angular',
        'Equação das Leis de Newton',
        'Equação da Força Peso',
        'Equação da Força de Atrito',
        'Equação da Força Elástica',
        'Equação da Força Centrípeta',
        'Equação do Plano Inclinado',
        'Equação da Tração',
        'Equação de Sistemas',
        'Equação do Trabalho',
        'Equação da Potência',
        'Equação da Energia Mecânica',
        'Equação do Impulso',
        'Equação da Quantidade de Movimento',
        'Equação da Estática de um Ponto',
        'Equação da Estática de um Corpo Rígido',
        'Equação da Pressão',
        'Equação do Teorema de Stevin',
        'Equação do Teorema de Pascal',
        'Equação da Gravitação Universal',
        'Equação do Teorema de Kepler',
        'Equação da Temperatura',
        'Equação do Calor',
        'Equação da Capacidade Térmica',
        'Equação da Energia Interna',
        '1ª Lei da Termodinâmica',
        '2ª Lei da Termodinãmica',
        'Equação da transformação Isotérmica',
        'Equação da transformação Isobárica',
        'Equação da transformação Isométrica',
        'Equação de Clapeyron',
        'Equação da Lei Geral dos Gases',
        'Equação da Dilatação Linear',
        'Equação da Dilatação Superficial',
        'Equação da Dilatação Volumétrica',
        'Equação da Dilatação Volumétrica (Líquidos)',
      ],
      formulasQuimicas: [
        'Balanceamento',
        'Densidade',
        'Lei de Lavosier',
        'Lei de Proust',
        'Desintegração Radioativa',
        'Esquiometria Comum',
        'Pureza de uma Substância',
        'Rendimento da Reação de uma Substância',
        'Reagente Limitante e Excedente',
        'Concentração Comum',
        'Moralidade',
        'Título',
        'Fração Molar',
        'Normalidade',
        'Diluição',
        'Mistura de Soluções'
      ],
      formulasBiologicas: [
        'Quadrado de Punnet',
        'Probabilidade Genética',
        'IMC'
      ],
      formulasGeograficas: [
        'Densidade Populacional',
        'Densidade Territorial',
        'Proporção de Mapas',
        'IDH',
        'Constante de Gime'
      ],
      formulasHistoricas: [
        'Cálculo do preço do Arroba de Ouro',
        'Moedas do Passado'
      ],
      formulasDeTransformacao: [
        'Retirando o 0 de um Número',
        'Retirando o 1 de um Número',
        'Retirando o 2 de um Número',
        'Retirando o 3 de um Número',
        'Retirando o 4 de um Número',
        'Retirando o 5 de um Número',
        'Retirando o 6 de um Número',
        'Retirando o 7 de um Número',
        'Retirando o 8 de um Número',
        'Retirando o 9 de um Número',
        'Transformação de 1 Algarismo',
        'Transformação de 2 Algarismos',
        'Transformação de 3 Algarismos',
        'Transformação de 4 Algarismos',
        'Transformação de 5 Algarismos',
        'Transformação de 6 Algarismos',
        'Transformação de 7 Algarismos',
        'Transformação de 8 Algarismos',
        'Transformação de 9 Algarismos',
        'Transformação de 10 Algarismos',
      ],
      formulasDeDemonstracao: [
        'Valor do PI',
        'Valor do Logarítmo Natural'
      ]
    }
  }
};

let classnames = {
  setores: {
    conteiner: 'rcalc_setores_conteiner_primario',
    titulo: 'rcalc_setores_titulo',
    lista: 'rcalc_setores_lista',
    item: 'rcalc_setores_item',
    texto: [
      'rcalc_setores_item__texto',
      'functions_count'
    ]
  }
};

// cards setores
let cardsCovencionais = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.covencionais, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.covencionais.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.covencionais);
bodyElement.appendChild(cardsCovencionais);

let cardsTrigonometricas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.trigonometricas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.trigonometricas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.trigonometricas);
bodyElement.appendChild(cardsTrigonometricas);

let cardsArcosTrigonometricos = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.arcosTrigonometricos, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.arcosTrigonometricos.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.arcosTrigonometricos);
bodyElement.appendChild(cardsArcosTrigonometricos);

let cardsLogaritmas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.logaritmas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.logaritmas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.logaritmas);
bodyElement.appendChild(cardsLogaritmas);

let cardsComplexas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.complexas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.complexas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.complexas);
bodyElement.appendChild(cardsComplexas);

let cardsConversoresDeBases = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.conversoresDeBases, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.conversoresDeBases.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.conversoresDeBases);
bodyElement.appendChild(cardsConversoresDeBases);

let cardsFormulasMatematicas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.formulasMatematicas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.formulasMatematicas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.formulasMatematicas);
bodyElement.appendChild(cardsFormulasMatematicas);

let cardsFormulasFisicas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.formulasFisicas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.formulasFisicas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.formulasFisicas);
bodyElement.appendChild(cardsFormulasFisicas);

let cardsFormulasQuimicas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.formulasQuimicas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.formulasQuimicas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.formulasQuimicas);
bodyElement.appendChild(cardsFormulasQuimicas);

let cardsFormulasBiologicas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.formulasBiologicas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.formulasBiologicas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.formulasBiologicas);
bodyElement.appendChild(cardsFormulasBiologicas);

let cardsFormulasGeograficas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.formulasGeograficas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.formulasGeograficas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.formulasGeograficas);
bodyElement.appendChild(cardsFormulasGeograficas);

let cardsFormulasHistoricas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.formulasHistoricas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.formulasHistoricas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.formulasHistoricas);
bodyElement.appendChild(cardsFormulasHistoricas);

let cardsFormulasTransformativas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.formulasDeTransformacao, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.formulasDeTransformacao.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.formulasDeTransformacao);
bodyElement.appendChild(cardsFormulasTransformativas);

let cardsFormulasDemonstrativas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.formulasDeDemonstracao, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.formulasDeDemonstracao.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.formulasDeDemonstracao);
bodyElement.appendChild(cardsFormulasDemonstrativas);