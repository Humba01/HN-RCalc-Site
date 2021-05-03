const bodyElement = document.getElementById('corpo');
const bodyHtml = new HtmlPageConstructor();

const textContents = {
  cards: {
    titulos: {
      covencionais: 'Covencionais',
      trigonometricas: 'Trigonométricas',
      arcosTrigonometricos: 'Arcos Trigonométricos',
      logaritmas: 'Logarítmas',
      antilogaritmas: 'Antilogarítmas',
      cologaritmas: 'Cologarítmas',
      complexas: 'Complexas',
      complexasTrigonometricas: 'Complexas Trigonométricas',
      conversoresDeBases: 'Conversores de Bases',
      calculistas: 'Calculistas'
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
        'Logarítmo de Base X',
        'Logarítmo Natural',
        'Logarítmo Natural mais Um',
        'Logarítmo Natural mais X'
      ],
      antilogaritmas: [
        'Antilogarítmo de Base 2',
        'Antilogarítmo de Base 10',
        'Antilogarítmo de Base X',
        'Antilogarítmo Natural',
        'Antilogarítmo Natural mais Um',
        'Antilogarítmo Natural mais X'
      ],
      cologaritmas: [
        'Cologarítmo de Base 2',
        'Cologarítmo de Base 10',
        'Cologarítmo de Base X',
        'Cologarítmo Natural',
        'Cologarítmo Natural mais Um',
        'Cologarítmo Natural mais X'
      ],
      complexas: [
        'Soma de Números Complexos',
        'Subtração de Números Complexos',
        'Multiplicação de Números Complexos',
        'Divisão de Números Complexos'
      ],
      complexasTrigonometricas: [
        'Multiplicação de Números Complexos Trigonométricos',
        'Divisão de Números Complexos Trigonométricos',
        'Potência de Números Complexos Trigonométricas',
      ],
      conversoresDeBases: [
        'Bases Techno',
        'Bases Techno Numericas',
        'Bases Angulares',
        'Bases Grandezas',
      ],
      calculistas: [
        'Funções',
        'Sistemas',
        'Fórmulas',
        'Matrizes',
        'Polinômios',
        'Geométricos',
        'Experimentais'
      ]
    }
  }
};

const classnames = {
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

let cardsAntilogaritmas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.antilogaritmas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.antilogaritmas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.antilogaritmas);
bodyElement.appendChild(cardsAntilogaritmas);

let cardsCologaritmas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.cologaritmas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.cologaritmas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.cologaritmas);
bodyElement.appendChild(cardsCologaritmas);

let cardsComplexas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.complexas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.complexas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.complexas);
bodyElement.appendChild(cardsComplexas);

let cardsComplexasTrigonometricas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.complexasTrigonometricas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.complexasTrigonometricas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.complexasTrigonometricas);
bodyElement.appendChild(cardsComplexasTrigonometricas);

let cardsConversoresDeBases = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.conversoresDeBases, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.conversoresDeBases.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.conversoresDeBases);
bodyElement.appendChild(cardsConversoresDeBases);

let cardsCalculistas = bodyHtml.suboptions(classnames.setores.conteiner, classnames.setores.titulo, textContents.cards.titulos.calculistas, classnames.setores.lista, classnames.setores.item, textContents.cards.textos.calculistas.length, classnames.setores.texto, classnames.setores.texto.length, textContents.cards.textos.calculistas);
bodyElement.appendChild(cardsCalculistas);
