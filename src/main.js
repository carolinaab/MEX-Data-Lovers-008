//---- Mostrar la data ----/
const data = window.POKEMON.pokemon; //Extraer data de la variante POKEMON y el objeto "pokemon"
const showCard = document.getElementById("data"); //Mostrar la data en el div id="data"
const manipulateData = data => {
  let str = ""; //Extraer objetos del array que vamos a ocupar
  //Extraer c/u de los elementos que queremos motrar
  data.forEach(element => {
    str += `<ul class = "clearflix"><li class="poke-card">
    <div class="poke-card-inner">
      <div class="poke-card-front">
      <p id="p-number">#${element.num}</p>
      <h3 id="p-name">${element.name}</h3>
      <p id="p-type">${element.type}</p>
    <img
      src="${element.img}"
      alt="Imagen del pokémon"
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
      <div class="heig-weig">
        <p id="p-height">Altura<br><strong>${element.height}</strong></p>
        <p id="p-weight">Peso<br><strong>${element.weight}</strong></p>
      </div>
    <h4>ECLOSIÓN</h4>
      <p id="p-chance">Posibilidad<br><strong>${
        element.spawn_chance
      }</strong></p>
      <p id="p-avg">AVG<br><strong>${element.avg_spawns}</strong></p>
      <p id="p-time">Tiempo<br><strong>${element.spawn_time}</strong></p>
    <h4>EVOLUCIÓN</h4>
      </div>
    </div>
  </li> </ul>`;
  });
  showCard.innerHTML = str;
};
manipulateData(data);
//---Menú Hamburquesa---//

const buttonMenu = document.getElementById("icon-menu");
const principalMenu = document.getElementById("nav");
// const buttonMenuClose = document.getElementById("icon-menu-close");

buttonMenu.addEventListener("click", showMenu);
// buttonMenuClose.addEventListener("click" , closeMenu);

//---- Filtrar data ----//
const pickType = document.getElementById("filter")
pickType.addEventListener("change", () => {
  const valueType =pickType.value;
  const newArrayPokemon = data.filter(pokemon => pokemon.type[0] == valueType)
  manipulateData(newArrayPokemon);
})

// ordenar data 
const sortData = data.sort((a,b) => { //parametros necesarios en sort (a, b) "siempre"
  let aName = a.name.toLowerCase(); // se convierte a minusculas
  let bName = b.name.toLowerCase();
  if (aName < bName) return -1; // retornamos si es falso -1 y si es verdadero 1
  if (aName > bName) return 1;
  return 0;
});
// console.log(newArray)


const pickSort = document.getElementById("ordenar-por") // traer el elemento id de ordenar por
pickSort.addEventListener("change", () => { // evento que reaccione a un cambio
  let valueSort = pickSort.value;  // sacar el valor de la constante con la que fue llamada el elem id
  let newArrayAz = sortData(pokemon => pokemon.name[0] == valueSort) // crear un nuevo arr para guardar el valor y buscar pokemon en el elemento
  manipulateData(newArrayAz); // nos ayuda a manipular toda la data 
});
pickSort.addEventListener("change", () => {
  let newArrayPokemonZa = sortData.reverse(pokemon => pokemon.name[0] == valueSort) // se usa .reverse para ordenar de z-a
  manipulateData(newArrayPokemonZa);
});






