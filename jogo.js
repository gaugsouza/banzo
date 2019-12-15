let botao = document.querySelector("button")
let imagem = document.querySelector(".imagem")
let h1 = document.querySelector("h1")
let p = document.querySelector("p")
let boxContent = document.getElementById("boxContent")
let aside = document.querySelector("aside")
let botaoHTML = document.getElementById('botaoHTML')
let botaoBemVindo = document.getElementById('botaoBemVindo')
let botaoAtividade1 = document.getElementById('botaoAtividade1')
let botaoAtividade2 = document.getElementById('botaoAtividade2')
let corrigir = document.querySelector('.corrigir')
let limpar = document.getElementById('limpar')

function limpaContador() {
    sessionStorage.setItem("score", 0);
}

function contador() {
    let count = sessionStorage.getItem("score");
    count++;
    console.log(count)
    sessionStorage.setItem("score", count);
}

function pegaScore() {
    return sessionStorage.getItem("score");
}

function mudarHTML() {
    h1.innerHTML = "O QUE É HTML?"
    p.innerHTML = "Vamos começar com HTML, a linguagem de marcação responsável pela estrutura das páginas web na internet. A linguagem HTML diz para o browser como ler os conteúdos do site, como imagem, links e textos."
    imagem.classList.replace("imagem", "posImagem");
    imagem.src = "./images/template.png"
    botaoHTML.style.display = 'block'
    botaoBemVindo.style.display = 'none'

}

function mudarParaAtividade1() {
    boxContent.innerHTML = `
        <h1>DESAFIO #1 </h1>
        <div>
            <p>
            A linguagem HTML consiste em tags. Toda tag começa com um sinal de < antes do nome da tag e termina com>. Você poderia codar a tag que diz para o browser que queremos ler um site?"
            </p>
            <p>Clique para adicionar as tags na ordem correta:</p>
        </div>
        <div>
            <div id="linha">
            </div>
        </div>
        <div class="botoes">
            <div>
                <button class="desafioTags0"><</button>
                <button class="desafioTags2">></button>
                <button class="desafioTags1">html</button>
            </div>
        </div>
    `
    aside.appendChild(boxContent)
    botaoAtividade2.style.display = 'block'
    botaoAtividade2.style.order = 1
    botaoHTML.style.display = 'none'
    limpar.style.display = "block"
    corrigir.style.display = "block"

let tagEsquerda = document.querySelector('.desafioTags0')
let tagHtml = document.querySelector('.desafioTags1')
let tagDireita = document.querySelector('.desafioTags2')
let linha = document.querySelector('#linha')
let lista = []

limpaContador();

tagEsquerda.addEventListener("click", () => {
    tagEsquerda.style.display = "none";
    lista.push(0)
    console.log(lista)
    let criar0 = document.createElement('div')
    criar0.setAttribute('class', 'criar0')
    criar0.innerHTML = `
    <button class="desafioTags0"><</button>
    `
    linha.appendChild(criar0)
    

})

tagDireita.addEventListener("click", () => {
    tagDireita.style.display = "none";
    lista.push(2)
    console.log(lista)
    let criar2 = document.createElement('div')
    criar2.setAttribute('class', 'criar2')
    criar2.innerHTML = `
    <button class="desafioTags2">></button>
    `
    linha.appendChild(criar2)

})

tagHtml.addEventListener("click", () => {
    tagHtml.style.display = "none";
    lista.push(1)
    console.log(lista)
    let criar1 = document.createElement('div')
    criar1.setAttribute('class', 'criar1')
    criar1.innerHTML = `
    <button class="desafioTags1">html</button>
    `
    linha.appendChild(criar1)
})

corrigir.addEventListener("click", () => {
    let correcao = [0, 1, 2]
    let myCorrecao = correcao.toString()
    let myLista = lista.toString()
    console.log(myCorrecao)
    console.log(myLista)

    if (myCorrecao === myLista) {
        console.log('asertou miserável')
        alert("acertou! Vá paara próxima atividade :)")
        contador()


    } else {
        console.log('tdo errado')
        alert("Acho que deu errado, tente de novo no botão limpar! :/")
        // respostaErrada.style.visibility = 'visible'
        // respostaCorreta.remove()
        // limpar.disabled = true
        // corrigir.disabled = true
    }

})

limpar.addEventListener("click" ,()=>{
    linha.innerHTML = ""
    tagEsquerda.style.display = "block";
    tagDireita.style.display = "block";
    tagHtml.style.display = "block";
    botaoAtividade2.style.display = 'block'
    botaoAtividade2.style.order = 1
    botaoHTML.style.display = 'none'
    lista=[]

})

}

function mudarParaAtividade2() {
    boxContent.innerHTML(botaoAtividade2) = `
    <div>
            <h1>DESAFIO #2</h1>

            <div class="texto">
                <p>Ao adicionar as tags do body entre as tags do HTML, nós avisamos o browser saber onde o conteúdo do site irá. Clique nos botões na ordem até que as tags do body fique dentro do HTML.
                </p>
            </div>
        </div>
        <div>

            <div id="linha">


            </div>


        </div>

        <div class="botoes">
            <button id="limpar">LIMPAR</button>

            <div>
                <button class="desafioTags3">< /html ></button>
                <button class="desafioTags0"> < html ></button>
                <button class="desafioTags2"> < /body > </button>
                <button class="desafioTags1">< body ></button>
            </div>

            <button class="corrigir">CORRIGIR</button>

        </div>
    `
}

botaoBemVindo.onclick = mudarHTML;
botaoHTML.onclick = mudarParaAtividade1;
botaoAtividade1.onclick = mudarParaAtividade2