const botoesAssunto = document.querySelectorAll(".assuntos button")
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
    const assunto = evento.target.innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "quiz.html"
}