const hamburgerMenu = document.querySelector("#botaoMenuHamburger");
const menu = document.querySelector("#navl");

hamburgerMenu.addEventListener("click", () => {
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Esconde o menu
    } else {
        menu.style.display = "block"; // Mostra o menu
    }
});
