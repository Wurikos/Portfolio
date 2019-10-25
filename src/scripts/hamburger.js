var hamburgerMenu = document.querySelector("#hamburgerMenu");
var hamburgerButton = document.querySelector("#hamburgerButton");
var navItem = document.querySelector(".nav__link");

function openHamburgerMenu() {
    hamburgerMenu.classList.add("is-active");
    hamburgerButton.classList.add("is-active");
}
function closeHamburgerMenu() {
    hamburgerMenu.classList.remove("is-active");
    hamburgerButton.classList.remove("is-active");
}

hamburgerButton.addEventListener("click", function(e) {
    e.preventDefault();
    if (hamburgerButton.classList.contains("is-active")) {
        hamburgerMenu.classList.add("fadeOut");
        setTimeout(() => {
            closeHamburgerMenu();
            hamburgerMenu.classList.remove("fadeOut");
        }, 400);
    } else {
        openHamburgerMenu();
    }
});

hamburgerMenu.addEventListener("click", function(e) {
    e.preventDefault;
    if (e.target.classList.contains("nav__link")) {
            closeHamburgerMenu();
    }
});