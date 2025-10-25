const assunto = localStorage.getItem("assunto")

let quiz = {}
let pontos = 0
let pergunta = 1
let resposta = ""
let idInputResposta = ""
let respostaCorretaId = ""

function alterarAssunto() {
    
    const divIcone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-"))
    iconeImg.setAttribute("src", `/images/icone-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}.png`)
    iconeImg.setAttribute("alt", `ícone do ${assunto}`)
    assuntoTitulo.innerText = assunto
}

async function buscarPerguntas() {
    const urlDados = ".././data.json"
    await fetch(urlDados).then(resposta => resposta.json()).then(dados => {
        dados.quizzes.forEach(dado => {
            if(dado.title === assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")) {
                quiz = dado
            }
        })
    })
    
}

function montarPergunta() {
    const main = document.querySelector("main")

    main.innerHTML = `  
            <div class="barra-cinza">
                <div style="width: ${pergunta * 10}%"></div>
            </div>
            <h3>Questão ${pergunta} de 10</h3> 
          
          
            <div class="pergunta">
                <p>${quiz.questions[pergunta-1].question}</p>
            </div>
          
                  <section class="alternativas">
                    <form action="">
                        <label for="alternativa_a">
                            <input id="alternativa_a" type="radio" name="alternativa" value="${quiz.questions[pergunta-1].options[0]}">
          
                            <div>
                                <span class="spans">A</span>
                                ${quiz.questions[pergunta-1].options[0]}
                            </div>
                        </label>
                        
          
                        <label for="alternativa_b">
                            <input type="radio" id="alternativa_b" name="alternativa" value="${quiz.questions[pergunta-1].options[1]}">
          
                            <div>
                                <span class="spans">B</span>
                                ${quiz.questions[pergunta-1].options[1]}
                            </div>
                        </label>
          
                        <label for="alternativa_c">
                            <input type="radio" id="alternativa_c" name="alternativa" value="${quiz.questions[pergunta-1].options[2]}">
          
                            <div>
                                <span class="spans">C</span>
                                ${quiz.questions[pergunta-1].options[2]}
                            </div>
                        </label>
          
                        <label for="alternativa_d">
                            <input type="radio" id="alternativa_d" name="alternativa" value="${quiz.questions[pergunta-1].options[3]}">
          
                            <div>
                                <span class="spans">D</span>
                                ${quiz.questions[pergunta-1].options[3]}
                            </div>
                        </label>
                    </form>
          
                    <button>Responder</button>
                </section>
    `
}

function guardarResposta(evento) {
    resposta = evento.target.value
    idInputResposta = evento.target.id

    const botaoEnviar = document.querySelector(".alternativas button")
    botaoEnviar.addEventListener("click", validarResposta)
}

function validarResposta() {
    const botaoEnviar = document.querySelector(".alternativas button")
    botaoEnviar.innerText = "Próxima"
    botaoEnviar.removeEventListener("click", validarResposta)

    if(pergunta === 10) {
        botaoEnviar.innerText = "Finalizar"
        botaoEnviar.addEventListener("click", finalizar)
    }
    else {
        botaoEnviar.addEventListener("click", proximaPergunta)
    }

    if(resposta === quiz.questions[pergunta-1].answer) {
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "correta")
        pontos = pontos + 1
    }
    else {
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "errada")
        document.querySelector(`label[for='${respostaCorretaId}']`).setAttribute("id", "correta")
    }
    pergunta = pergunta + 1
}

function finalizar() {
    localStorage.setItem("pontos", pontos)
    window.location.href = "result.html"
}

function proximaPergunta() {
    montarPergunta()
    adicionarEventoInputs()
    borda()
    spans()
    barra()
    botao()
}

function adicionarEventoInputs() {
    const inputsResposta = document.querySelectorAll(".alternativas input")
    inputsResposta.forEach(input => {
        input.addEventListener("click", guardarResposta)

        if(input.value === quiz.questions[pergunta-1].answer) {
            respostaCorretaId = input.id
        }
    })
}

function borda() {
    const borda = document.querySelector(".pergunta")
    borda.classList.add(`borda-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}`)

}

function spans() {
    const spans = document.querySelectorAll(".spans")
    console.log(spans)
    spans.forEach(span => {
        span.classList.add(`spans-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}`)
    })
}

function barra() {
    const barra = document.querySelector(".barra-cinza div")
    barra.classList.add(`barra-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}`)
}

function botao() {
    const botao = document.querySelector("button")
    botao.classList.add(`botao-${assunto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")}`)
}

async function iniciar() {
    alterarAssunto()
    await buscarPerguntas()
    montarPergunta()
    adicionarEventoInputs()
    borda()
    spans()
    barra()
    botao()
}

iniciar()
