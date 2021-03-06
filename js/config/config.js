// Configurações da tag body

const page = document.getElementById('corpo');

page.style.overflowX = 'hidden';

setTimeout(function() {
    window.scrollTo(0, scrollY);
}, 80);

setTimeout(function() {
    window.scrollTo(scrollX, 0);
}, 300);

// Configurações do menu principal

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
  }, 2000);
}
