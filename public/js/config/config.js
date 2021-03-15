// Configurações da tag body

const page = document.getElementById('corpo');

page.style.overflowX = 'hidden';

setTimeout(function() {
    window.scrollTo(0, scrollY);
}, 80);

setTimeout(function() {
    window.scrollTo(scrollX, 0);
}, 300);

// Configurações do menu principal e da barra de menu

// Menu Principal
const comum_cd = document.getElementById('comum_card');
const cientifica_cd = document.getElementById('cientifica_card');
const suprema_cd = document.getElementById('suprema_card');
const desmontada_cd = document.getElementById('desmontada_card');
const grafica_cd = document.getElementById('grafica_card');
const warning_span = document.getElementById('warning');

comum_cd.addEventListener("click", function() { realizaAvisoDeIndisponibilidade(); });
cientifica_cd.addEventListener("click", function() { realizaAvisoDeIndisponibilidade(); });
suprema_cd.addEventListener("click", function() { realizaAvisoDeIndisponibilidade(); });
grafica_cd.addEventListener("click", function() { realizaAvisoDeIndisponibilidade(); });

function realizaAvisoDeIndisponibilidade() {
  warning_span.textContent = "Modo indisponível por enquanto. Em Breve novas atualizações!";
  warning_span.style.display = "inline-block";

  setTimeout(function() {
    warning_span.style.display = "none";
    warning_span.textContent = "";
  }, 4000);
}

// Menu Lateral

const comum_cd_mn = document.getElementById('comum_card_menu');
const cientifica_cd_mn = document.getElementById('cientifica_card_menu');
const suprema_cd_mn = document.getElementById('suprema_card_menu');
const desmontada_cd_mn = document.getElementById('desmontada_card_menu');
const grafica_cd_mn = document.getElementById('grafica_card_menu');

comum_cd_mn.addEventListener('click', function() { realizaAvisoDeIndisponibilidade(); });
cientifica_cd_mn.addEventListener('click', function() { realizaAvisoDeIndisponibilidade(); });
suprema_cd_mn.addEventListener('click', function() { realizaAvisoDeIndisponibilidade(); });
grafica_cd_mn.addEventListener('click', function() { realizaAvisoDeIndisponibilidade(); });

// Menu Lateral (Funcionamento)

const menu_btn = document.getElementById('btn_menu');
const menu_cont = document.getElementById('menu_lateral');

let contadorAcoes = 0;
// Fazer uma animação para abrir o menu e para fechar o menu
menu_btn.addEventListener("click", function() {
  contadorAcoes++

  switch(contadorAcoes) {
    case 1:
      menuAtivo();
      break;
    case 2:
      menuDesativo();
      contadorAcoes = 0;
      break;
  }

});

function menuAtivo() {
  menu_cont.style.animationName = "animation_menu";
  menu_cont.style.animationDelay = "2ms";
  menu_cont.style.animationDuration = "800ms";
  menu_cont.style.animationFillMode = "backwards";
  menu_cont.style.animationIterationCount = "initial";
  menu_cont.style.animationPlayState = "initial";
  menu_cont.style.animationTimingFunction = "linear";

  menu_btn.style.transform = "rotate(180deg)";
  menu_btn.style.backgroundColor = "#00ff66";
  menu_btn.style.borderTopLeftRadius = "7px";
  menu_btn.style.borderBottomLeftRadius = "7px";
  menu_btn.style.borderTopRightRadius = "0px";
  menu_btn.style.borderBottomRightRadius = "0px";
  menu_btn.src = "svg/icons/opitions_active.svg";
  menu_cont.style.display = "inline-block";
}

function menuDesativo() {
  menu_cont.style.animationName = "animation_menu";
  menu_cont.style.animationDelay = "2ms";
  menu_cont.style.animationDuration = "800ms";
  menu_cont.style.animationFillMode = "backwards";
  menu_cont.style.animationIterationCount = "initial";
  menu_cont.style.animationPlayState = "initial";
  menu_cont.style.animationTimingFunction = "linear";

  menu_btn.style.transform = "rotate(0deg)";
  menu_btn.style.backgroundColor = "#00ff99";
  menu_btn.style.borderTopLeftRadius = "0px";
  menu_btn.style.borderBottomLeftRadius = "0px";
  menu_btn.style.borderTopRightRadius = "7px";
  menu_btn.style.borderBottomRightRadius = "7px";
  menu_btn.src = "svg/icons/opitions_comum.svg";
  menu_cont.style.display = "none"; 
}

function animacaoMenuAtivo() {}

function animacaoMenuDesativo() {}

// Configurações do Contador

let setoresDisponiveis = document.getElementsByClassName("sectors_count").length;
let setoresContador = document.getElementById("setores");

let funcionalidadesDisponiveis = document.getElementsByClassName("functions_count").length;
let funcionalidadesContador = document.getElementById("funcoes");

setoresContador.textContent = `Setores: ${setoresDisponiveis}`;

funcionalidadesContador.textContent = `Funcionalidades: ${funcionalidadesDisponiveis}`