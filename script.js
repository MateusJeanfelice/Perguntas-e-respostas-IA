const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "vocẽ quer comprar uma moto nova e está na dúvida entre a moto dos seus sonhos ou uma moto mais  adequada para seu uso ",
        alternativas: [
            {
                texto: "a moto dos seus sonhos",
                afirmacao: "realizar seus sonhos motiva a conquistar coisas cada vez melhores "
            },
            {
                texto: "a mais adequada ",
                afirmacao: "a escolha mais racional visando usabilidade e economia sem dúvidas é uma ótima ideia"
            }
        ]
    },
    {
        enunciado: "Cidades grandes tÊm um alto indice de criminalidade e seria melhor proteger sua moto de alguma forma",
        alternativas: [
            {
                texto: "contratar uma seguradora",
                afirmacao: "seguradoras são a garantia que você não irá perder o valor investido na compra da sua moto em casos de roubos ou até acidentes"
            },
            {
                texto: "instalar um rastreador",
                afirmacao: "rastreadores são muito baratos e ajudam muito a localizar sua moto caso ela seje furtada"
            }
        ]
    },
    {
        enunciado: "Ao comprar uma moto usada pode acontecer problemas que você não espera, podendo causar alguns transtornos indesejados",
        alternativas: [
            {
                texto: "levar a uma oficina e fazer uma revisão",
                afirmacao: "Manter a moto sempre revisada vai te tirar de problemas e aumenta sua segurança"
            },
            {
                texto: "Rodar até apresentar algum problema",
                afirmacao: "Nao ira fazer você gastar muito dinheiro de uma vez mas poderá te deixar na mão por algum defeito"
            }
        ]
    },
   
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";https://mateusjeanfelice.github.io/Perguntas-e-respostas-IA/

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
