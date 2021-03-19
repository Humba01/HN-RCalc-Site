class HtmlPageConstructor {
  suboptions(
    suboptionsConteinerClassname="",
    suboptionsTituloClassname="",
    suboptionsTituloTextContent="",
    suboptionsListaClassname="",
    suboptionsItemClassname="",
    suboptionsItemQuantifier=0,
    suboptionsTextoClassnames=[""],
    suboptionsTextoClassnamesQuantifier=0,
    suboptionsTextoTextContents=[""]
  ) {
    let suboptionsConteinerElement = document.createElement('section');
    suboptionsConteinerElement.classList.add(suboptionsConteinerClassname);

    let suboptionsTituloElement = document.createElement('h2');
    suboptionsTituloElement.classList.add(suboptionsTituloClassname);
    suboptionsTituloElement.textContent = suboptionsTituloTextContent;
    suboptionsConteinerElement.appendChild(suboptionsTituloElement);

    let suboptionsListaElement = document.createElement('ol');
    suboptionsListaElement.classList.add(suboptionsListaClassname);
    suboptionsConteinerElement.appendChild(suboptionsListaElement);

    for(let i = 0; i < suboptionsItemQuantifier; i++) {
      let suboptionsItemElement = document.createElement('li');
      suboptionsItemElement.classList.add(suboptionsItemClassname);
      suboptionsListaElement.appendChild(suboptionsItemElement);

      let suboptionsTextoElement = document.createElement('p');

      for(let j = 0; j < suboptionsTextoClassnamesQuantifier; j++) {
        suboptionsTextoElement.classList.add(suboptionsTextoClassnames[j]);
      }

      suboptionsTextoElement.textContent = suboptionsTextoTextContents[i];
      suboptionsItemElement.appendChild(suboptionsTextoElement);
    }

    return suboptionsConteinerElement;
  }

}