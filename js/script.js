/* =======================================================
   ARQUIVO DE COMPORTAMENTO (JavaScript)

   Lembre dos 3 pilares de uma página web:
     1. HTML  -> a ESTRUTURA  (o esqueleto)
     2. CSS   -> a APARÊNCIA   (a roupa)
     3. JS    -> o COMPORTAMENTO (a ação / a vida)

   O JavaScript é quem deixa a página INTERATIVA:
   reage a cliques, muda textos, calcula coisas, etc.
   ======================================================= */


/* -------------------------------------------------------
   EXEMPLO 1: Mensagem no console
   Abra o navegador, aperte F12 e veja a aba "Console".
   ------------------------------------------------------- */
console.log("Olá! O JavaScript foi carregado com sucesso. 🎉");


/* -------------------------------------------------------
   EXEMPLO 2: Contador de cliques
   Quando o aluno clica no botão, o número aumenta.
   ------------------------------------------------------- */

// 1) Pegamos os elementos do HTML pelo seu "id"
const botaoContar = document.getElementById("botao-contar");
const textoContador = document.getElementById("contador");

// 2) Criamos uma variável para guardar a contagem
let cliques = 0;

// 3) "Escutamos" o clique no botão e reagimos a ele
botaoContar.addEventListener("click", function () {
    cliques = cliques + 1;                       // soma 1
    textoContador.textContent = "Cliques: " + cliques;   // mostra na tela
});


/* -------------------------------------------------------
   EXEMPLO 3: Trocar o tema (claro / escuro)
   Mostra como o JS pode mexer no CSS adicionando uma classe.
   ------------------------------------------------------- */

const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function () {
    // toggle = adiciona a classe se não tiver, ou remove se já tiver
    document.body.classList.toggle("tema-escuro");
});


/* -------------------------------------------------------
   EXEMPLO 4: Saudação com o nome do aluno
   Usa prompt() para perguntar e mudar o texto da página.
   ------------------------------------------------------- */

const botaoSaudacao = document.getElementById("botao-saudacao");
const textoSaudacao = document.getElementById("saudacao");

botaoSaudacao.addEventListener("click", function () {
    // prompt() abre uma caixinha pedindo um texto ao usuário
    const nome = prompt("Qual é o seu nome?");

    // Se o aluno digitou algo, mostramos a saudação
    if (nome) {
        textoSaudacao.textContent = "Seja bem-vindo(a), " + nome + "! 👋";
    }
});
