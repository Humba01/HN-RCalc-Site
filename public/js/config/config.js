// ~ Configurações da tag body
let page = document.getElementById('corpo');

page.style.overflowX = 'hidden';

setTimeout(function() {
    window.scrollTo(0, scrollY);
}, 80);

// ~ Configurações da Página Principal
const comum_cd = document.getElementById('comum_card');
const cientifica_cd = document.getElementById('cientifica_card');
const suprema_cd = document.getElementById('suprema_card');
const desmontada_cd = document.getElementById('desmontada_card');
const grafica_cd = document.getElementById('grafica_card');
const programador_cd = document.getElementById('programador_card');
const warning_span = document.getElementById('warning');

comum_cd.addEventListener("click", function() { realizaAvisoDeIndisponibilidade(); });
cientifica_cd.addEventListener("click", function() { realizaAvisoDeIndisponibilidade(); });
suprema_cd.addEventListener("click", function() { realizaAvisoDeIndisponibilidade(); });
grafica_cd.addEventListener("click", function() { realizaAvisoDeIndisponibilidade(); });
programador_cd.addEventListener("click", function() { realizaAvisoDeIndisponibilidade(); });

function realizaAvisoDeIndisponibilidade() {
  warning_span.textContent = "Modo indisponível por enquanto. Em Breve novas atualizações!";
  warning_span.style.display = "inline-block";

  setTimeout(function() {
    warning_span.style.display = "none";
    warning_span.textContent = "";
  }, 4000);
}

// ~ Configurações do Contador

let modosDisponiveis = document.getElementsByClassName("modes_count").length;
let modosContador = document.getElementById("modos");

let setoresDisponiveis = document.getElementsByClassName("sectors_count").length;
let setoresContador = document.getElementById("setores");

let funcionalidadesDisponiveis = document.getElementsByClassName("functions_count").length;
let funcionalidadesContador = document.getElementById("funcoes");

modosContador.textContent = `Modos: ${modosDisponiveis}`;

setoresContador.textContent = `Setores: ${setoresDisponiveis}`;

funcionalidadesContador.textContent = `Funcionalidades: ${funcionalidadesDisponiveis}`;

// & Configurações de Animação do Menu Lateral

// ~ Configurações do Menu Lateral

// ~ Configurações do Menu Normal