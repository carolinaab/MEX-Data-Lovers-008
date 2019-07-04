//---- Mostrar la data ----//
const showCard = document.getElementById("data");
showCard.innerHTML = str;

//---Menú Hamburquesa---//

const buttonMenu = document.getElementById("icon-menu");
const principalMenu = document.getElementById("nav");
const buttonMenuOpen = document.getElementById("icon-menu-close");

buttonMenu.addEventListener("click", showMenu);
