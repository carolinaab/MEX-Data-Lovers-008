// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;

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

//---- Filtrar data ----//
// filterData = (data) {
//     const pokeName = element.name;
//     const pokeType = element.type
//   }
// };

// filter(element => {
//   return element.name;
// });

// console.log((resultsSearch = filterTypeName.value));
// innerHTML = filterTypeName.value;

// window.filterData = nameType;