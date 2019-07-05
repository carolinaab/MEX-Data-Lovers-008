//---- Mostrar la data ----//
const showCard = document.getElementById("data");
showCard.innerHTML = str;

//---Menú Hamburquesa---//

const buttonMenu = document.getElementById("icon-menu");
const principalMenu = document.getElementById("nav");
const buttonMenuOpen = document.getElementById("icon-menu-close");

buttonMenu.addEventListener("click", showMenu);




// ordenar pokemones 
// const listaOrdenada = document.getElementById("lista-ordenada");
// const ordenPokemon = document.getElementById("ordenar").value
// ordenPokemon.addEventListener("change", () => {
//     let sort;
//     switch (ordenPokemon) {

//         case "a-z":
//             sort = "ascendente";
//             break;
//         case "z-a":
//             sort = "descendente";
//             break;
//     }

//     const pokeOrdenado = pokemon.ordenData(listaPoke, listaOrdenada, sort)
//     listaOrdenada.innerHTML = listaPoke(pokeOrdenado)


// })