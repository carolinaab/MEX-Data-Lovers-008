// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;

//---- Mostrar la data ----//

const data = POKEMON.pokemon;

let str = "";
data.forEach(element => {
  const pokeNumber = element.num;
  const pokeName = element.name;
  const pokeType = element.type;
  const pokeImg = element.img;

  str += `<div class="poke-card">
  <p id="p-number">${pokeNumber}</p>
  <h3 id="p-name">${pokeName}</h3>
  <p id="p-type">${pokeType}</p>
  <img
    src="${pokeImg}"
    alt="Imagen del pokémon"
    id="p-img"
  />
</div>`;
});

//---- Menú hamburguesa ----//

const showMenu = () => {
  principalMenu.classList.toggle("site-nav-open");
};

// const closeMenu = () => {
//   principalMenu.classList.toggle("site-nav-close");
// };

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
