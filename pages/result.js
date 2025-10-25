const assunto = localStorage.getItem("assunto")
const botaoJogarNovamente = document.querySelector(".repeat")
const botaoSair = document.querySelector(".leave")

botaoJogarNovamente.addEventListener("click", jogarNovamente)
botaoSair.addEventListener("click", sair)


function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-"))
    iconeImg.setAttribute("src", `../images/result-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}.png`)
    iconeImg.setAttribute("alt", `ícone do ${assunto}`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()


function inserirResultado() {
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")

    sectionPontuacao.innerHTML = `
       

                    
            <p>${pontos}0%</p>

            
            
            `
}

function corSection(){
    const sectionPontuacao = document.querySelector(".pontuacao")
    sectionPontuacao.classList.add(`cor-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}`)
}

function corFundo() {
    const fundo = document.querySelector("html")
    fundo.classList.add(`fundo-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}`)
}

function corBotoes(){
    const botaoJogarNovamente = document.querySelector(".repeat")
    const botaoSair = document.querySelector(".leave")

    botaoJogarNovamente.classList.add(`botao-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}`)
    botaoSair.classList.add(`botao-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}`)
}

function alterarTextos(){
    const pontos = localStorage.getItem("pontos")
    const textinho = document.querySelector(".texto")
    const elogio = document.querySelector(".parabens")
    
    if (pontos == 10){
        elogio.innerText = `Parabéns!`
        textinho.innerText = `Seu conhecimento do corpo humano está incrível.  Continue assim!`
    }
    else if (pontos > 7 && pontos <= 9){
        elogio.innerText = `Muito Bom!`
        textinho.innerText = `Continue praticando e logo vai acertar todas as respostas!`
    }
    else if (pontos > 5 && pontos <= 7){
        elogio.innerText = `Mandou Bem!`
        textinho.innerText = `Você está razoável, se esforce para acertar mais questões!`
    }
    else if (pontos === 5){
        elogio.innerText = `Meio a Meio!`
        textinho.innerText = `Você mandou bem! Sobre o básico, agora é hora de subir esse placar!`
    }
    else if (pontos > 2 && pontos <= 4){
        elogio.innerText = `Tá Quase!`
        textinho.innerText = `Falta pouco! Revê umas coisinhas e tenta de novo.`
    }
    else if (pontos > 0 && pontos <= 2){
        elogio.innerText = `Opa!`
        textinho.innerText = `Alguns erros, mas nada grave! Vamos tentar outra vez.`
    }
    else{
        elogio.innerText = `Socorro!`
        textinho.innerText = `O corpo pediu ajuda. Tente novamente e mostre do que é capaz!`
    }
    
}


function jogarNovamente(){
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")
    window.location.href = "inicio.html"
}
function sair(){
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")
    window.location.href = "../index.html"
}

inserirResultado()
corSection()
corFundo()
corBotoes()
alterarTextos()