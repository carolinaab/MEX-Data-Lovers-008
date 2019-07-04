// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {

// };

// window.example = example;

// for (pokemones in POKEMON.pokemon) {
//   console.log(POKEMON.pokemon[pokemones].name)
// }

// }
const data = POKEMON.pokemon
// console.log(data);





let str = ''
data.forEach(element => {
  const pokeName = element.name
  const pokeType = element.type
  const pokeImg = element.img

  str += `<div class="prueba">
    <h3>${pokeName}</h3>
    <p>${pokeType}</p>
    <img src="${pokeImg}" alt="">
  </div>`

});

let strTypes = '';

data.forEach(element => {

  const pokeType = element.type


  str += `<div class="prueba2">
   <p>${pokeType}</p>
   </div>`

  // let sinRepetir = [...new Set(pokeType)];
  // return sinRepetir

});
// console.log(strTypes);



// let filterPoke = (paramFilter) => {


let arrFilter = [];
data.forEach(element => {
  const typeFilter = element.type
  for (i = 0; i <= typeFilter.length; i++) {
    if (element.type.includes(typeFilter)) {
      arrFilter.push(element)
    }
    return arrFilter
  }
});
console.log(arrFilter)






const boulbasor = data.find(element => {
  return element.name === "Bulbasaur"
})
console.log(boulbasor)
let pokemonTypes;
const pokemonFilter = data.filter(element => {
  if (element.type === "str") {

  }



})
console.log(pokemonFilter)












