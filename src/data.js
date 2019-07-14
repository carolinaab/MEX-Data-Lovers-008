


//---- Menú hamburguesa ----//

const showMenu = () => {
  principalMenu.classList.toggle("site-nav-open");
};
// BUSQUEDA DE POKEMONES 
const mySearch = document.getElementById("my-search");
const botonBuscar = document.getElementById("buscar");

botonBuscar.addEventListener('click', () => {
  const result = data.filter(pokemon => pokemon.name.toLocaleLowerCase() == mySearch)
  manipularData(result)
});

const sortData = () => {

}





ordenarPor.addEventListener("change", () => {
  let sortBy = ordenarPor.value;
  let order = window.pokemons.sortData();
  showCard.innerHTML = order;
 
})


//---- Imágen Preload ----//

const containerPreload = document.getElementById("container-charge");

const preloadCharge = () => {
  containerPreload.style.display = "none";
};
window.onload = preloadCharge;

//---- Aparecer y desaparecer secciones ----//
const searchSection = document.getElementById("search");
const welcomeSection = document.getElementById("welcome");
const startButton = document.getElementById("button-start");
const collectionSection = document.getElementById("collection-section");
const menuWelcome = document.getElementById("home-m");
const menuSearch = document.getElementById("search-m");
const menuCollection = document.getElementById("collection-m");

const showSearch = () => {
  welcomeSection.classList.add("search-section");
  searchSection.classList.remove("search-section");
};

const showCollection = () => {
  collectionSection.classList.toggle("show-collection");
};

startButton.addEventListener("click", showSearch);

menuWelcome.addEventListener("click", showCollection);







window.data = {

  showMenu,
};