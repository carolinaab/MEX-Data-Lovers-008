// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {

// };

// window.example = example;

// for (pokemones in POKEMON.pokemon) {
//   console.log(POKEMON.pokemon[pokemones].name)


//
const data = POKEMON.pokemon
// LISTA POKEMON
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
// ordenar pokemones
const ordenData = (data, propiedad, orden) => {
  let ordenada;
  if (orden === "ascendente") {
    ordenada = data.sort((a, b) => (a[propiedad] > b[propiedad] ? 1 : -1))
  } else if (orden === "descendente") {
    ordenada = data.sort((a, b) => (a[propiedad] > b[propiedad] ? -1 : 1))
  } else if (orden === "numAscendente") {
    ordenada = data.sort((a, b) => (a[propiedad] > b[propiedad] ? -1 : 1))
  } else if (orden === "numDescendente") {
    ordenada = data.sort((a, b) => (a[propiedad] > b[propiedad] ? -1 : 1))
    return ordenada;
  }

}







// console.log(strTypes);





// filtrar pokemones 



let filterPoke = data.filter(element => {
  for (let i = 0; i < element.type.length; i++) {
    if (element["type"][i] === "Grass") {
      return true;
    }
  }
})

//  como traer solo los array?

const typelist = (data) => {
  const arrType = [];
  let tipos = [];
  data.forEach(element => {
    for (let i = 0; i < element.type.length; i++) {
      arrType.push(element.type[i]);
    }
    tipos = [...new Set(arrtype)];
  });
  return tipos;
};

















