const assunto = localStorage.getItem("assunto")
const botaoJogarNovamente = document.querySelector("main button")

botaoJogarNovamente.addEventListener("click", jogarNovamente)

function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-"))
    iconeImg.setAttribute("src", `../images/icon-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}.png`)
    iconeImg.setAttribute("alt", `ícone do ${assunto}`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()


function inserirResultado() {
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")

    sectionPontuacao.innerHTML = `
        ${divAssunto.outerHTML}

                    <strong>${pontos}</strong>

                    <p>de 10</p>`
}

function jogarNovamente(){
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")
    
    window.location.href = "start.html"
}

inserirResultado()