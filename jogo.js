let botao = document.querySelector("button")
let imagem = document.querySelector(".imagem")
let h1 = document.querySelector("h1")
let p = document.querySelector("p")
let segundoBotao = document.getElementById('botaoCont')
let botao1 = document.getElementById('botao1')


function mudarImagem() {
    h1.innerHTML = "O QUE É HTML?"
    p.innerHTML = "Vamos começar com HTML, a linguagem de marcação responsável pela estrutura das páginas web na internet. A linguagem HTML diz para o browser como ler os conteúdos do site, como imagem, links e textos."
    imagem.classList.replace("imagem", "posImagem");
    imagem.src = "./assets/img/template.png"
    segundoBotao.style.display = 'block'
    botao1.style.display = 'none'

}

botao.onclick = mudarImagem;