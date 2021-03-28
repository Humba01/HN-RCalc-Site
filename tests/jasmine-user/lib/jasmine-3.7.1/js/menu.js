const cabecalhoConteiner = document.getElementById("cab_cont");
const navegacaoConteiner = document.getElementById("nav_cont");

setTimeout(() => {
  
  let menuItemJasmine = document.getElementById("jasmine");
  let corpoInterfaceJasmine = document.getElementById("jasmine_body");
  
  menuItemJasmine.style.transitionDuration = "1100ms";
  menuItemJasmine.style.transitionDelay = "5ms";
  menuItemJasmine.style.transitionProperty = "all";
  menuItemJasmine.style.transitionTimingFunction = "cubic-bezier(0.333, 0.1086, 0.2112, 0.5321)";

  if(corpoInterfaceJasmine.style.display == "block") {
    menuItemJasmine.style.borderBottomColor = "#00ff00";
  }
}, 2000);


document.addEventListener('scroll', () => {
  if(scrollY > 200) {
    cabecalhoConteiner.style.transitionDelay = "2ms";
    cabecalhoConteiner.style.transitionDuration = "600ms";
    cabecalhoConteiner.style.transitionProperty = "all";
    cabecalhoConteiner.style.transitionTimingFunction = "ease-in";

    cabecalhoConteiner.style.backgroundColor = "#888888";
    cabecalhoConteiner.style.color = "#000000";
  } else {
    cabecalhoConteiner.style.transitionDelay = "2ms";
    cabecalhoConteiner.style.transitionDuration = "600ms";
    cabecalhoConteiner.style.transitionProperty = "all";
    cabecalhoConteiner.style.transitionTimingFunction = "ease-in";

    cabecalhoConteiner.style.backgroundColor = "#222222";
    cabecalhoConteiner.style.color = "#ffffff";
  }
});