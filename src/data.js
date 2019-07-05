// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;

//---- Filtrar la data ----//

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
