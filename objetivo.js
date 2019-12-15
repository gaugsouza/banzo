let botao = document.querySelector("button")
cards = document.querySelectorAll(".space")


cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.border = "4px solid #cd4538"

    })
})