// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {

// };

// window.example = example;

// for (pokemones in POKEMON.pokemon) {
//   console.log(POKEMON.pokemon[pokemones].name)


//
const data = POKEMON.pokemon;


// LISTA POKEMON
const showCard = document.getElementById("data");

const manipularData = (data) => {
    let str = ""; //se crea variable que recibira la data 
    data.forEach(element => { //recorrer la data similar al for 
        str += `<div class="poke-card"> 
       <img src="${element.img}"
  alt="Imagen del pokémon"
    id="p-img"</img>
  <p id="p-number">${element.num}</p>
  <h3 id="p-name">${element.name}</h3>
  <p id="p-type">${element.type}</p>
  
  
</div>`
    });
    showCard.innerHTML = str
}
manipularData(data)

//---- Menú hamburguesa ----//
const showMenu = () => {
    principalMenu.classList.toggle("site-nav-open");
};
// ordenar pokemones
// const sortData = (data, sortBy, sortOrden) => {
//     let listaOrdenada;
//     switch (sortOrden) {
//         case 'ascendente':
//             if (sortBy === 'avf_spawns') {
//                 listaOrdenada = data.sort((eleA, eleB) => eleA.avg_spawns - eleB.avg_spawns);
//             } else {
//                 listaOrdenada = data.sort((eleA, eleB) => eleA.name > eleB.name ? 1 : -1);
//             }
//             break;
//         case 'descendente':
//             listaOrdenada = data.sort((eleA, eleB) => eleB.name > eleA.name ? 1 : -1);
//             break;
//     }
//     return listaOrdenada
// };

// BUSQUEDA DE POKEMONES 
const mySearch = document.getElementById("my-search");
const botonBuscar = document.getElementById("buscar");

botonBuscar.addEventListener('click', () => {
const result = data.filter(pokemon => pokemon.name.toLocaleLowerCase() == mySearch)
manipularData(result)
});
