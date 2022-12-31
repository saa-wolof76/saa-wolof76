const onglets = document.querySelector(".onglet")
const revealMenu = document.querySelector(".app")


revealMenu.addEventListener("click", () => {
    onglets.classList.toggle("reveal-menu")
})