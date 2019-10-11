//---- Mostrar la data ----/
const data = window.POKEMON.pokemon; //Extraer data de la variante POKEMON y el objeto "pokemon"

const showCard = document.getElementById("data"); //Mostrar la data en el div id="data"

const pickType = document.getElementById("pick-type");

const pickSort = document.getElementById("pick-sort");
let valueSort = pickSort.value;
//---- Menú hamburguesa ----//



//---- Imágen Preload ----//

const containerPreload = document.getElementById("container-charge");


//---- Aparecer y desaparecer secciones ----//
// const searchSection = document.getElementById("search");
const welcomeSection = document.getElementById("welcome");
const startButton = document.getElementById("button-start");
const collectionSection = document.getElementById("collection-section");
const menuWelcome = document.getElementById("home-m");
const menuSearch = document.getElementById("search-m");
const menuCollection = document.getElementById("collection-m");

const showSearch = () => {
  welcomeSection.classList.add("search-section");
  collectionSection.classList.remove("search-section");
};

const showCollection = () => {
  collectionSection.classList.toggle("show-collection");
};

startButton.addEventListener("click", showSearch);

menuWelcome.addEventListener("click", showCollection);


const manipulateData = data => {
  let str = ""; //Extraer objetos del array que vamos a ocupar
  //Extraer c/u de los elementos que queremos mostrar
  data.forEach(element => {
    str += `<div class="poke-card">
    <div class="poke-card-inner">
      <div class="poke-card-front">
      <p id="p-number">#${element.num}</p>
      <h3 id="p-name">${element.name}</h3>
      <p id="p-type">${element.type}</p>
    <img
      src="${element.img}"
      alt="${element.name}"
      id="p-img"
      style="width:48%"
    />
      </div>
      <div class="poke-card-back">
    <h3 id="p-number">#${element.num}</h3>
    <h3 id="p-name">${element.name}</h3>
      <p id="p-type">${element.type}</p>
      <div class="can-weak>
        <p id="p-candy">Caramelos<br><strong>${element.candy_count}</strong></p>
        <p id="p-weaknesses">Debilidades<br><strong>${
      element.weaknesses
      }</strong></p>
      </div>
      <div class="height-weight">
        <p id="p-height">Altura<br><strong>${element.height}</strong></p>
        <p id="p-weight">Peso<br><strong>${element.weight}</strong></p>
      </div>
      </div>
    </div>
  </div>`;
  });
  showCard.innerHTML = str;
};
manipulateData(data);

//---Menú Hamburquesa---//
const buttonMenu = document.getElementById("icon-menu");
const principalMenu = document.getElementById("nav");
// const buttonMenuClose = document.getElementById("icon-menu-close");
const showMenu = () => {
  principalMenu.classList.toggle("site-nav-open");
};

buttonMenu.addEventListener("click", showMenu);
// buttonMenuClose.addEventListener("click" , closeMenu);

//---- Filtrar data ----//
pickType.addEventListener("change", () => {
  const valueType = pickType.value;
  const newArrayPokemon = data.filter(pokemon => pokemon.type[0] == valueType);
  manipulateData(newArrayPokemon);
});

//---- Ordenar data ----//
const sortData = data.sort((a, b) => {

  let aName = a.name.toLowerCase();
  let bName = b.name.toLowerCase();

  if (aName < bName) return -1;
  if (aName > bName) return 1;
  return 0;
});


pickSort.addEventListener("change", () => {
  let newArrayZA = sortData;
  manipulateData(newArrayZA);
});
pickSort.addEventListener("change", () => {
  sortData.reverse();

});

