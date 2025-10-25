const botoesAssunto = document.querySelectorAll(".assuntos div")
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
    const assunto = evento.target.innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "quiz-novo.html"
}