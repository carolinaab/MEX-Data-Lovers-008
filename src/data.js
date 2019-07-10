// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {

// };

// window.example = example;

// for (pokemones in POKEMON.pokemon) {
//   console.log(POKEMON.pokemon[pokemones].name)





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
 

// ordenando la data de la A-Z y de Z-A
const orderData = (data) => {
    data.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      // console.log(nameA)
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
      return 0;
  });
  return data;
};
// console.log(orderData)
const orderDataZA = (data) => {
    data.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return data.reverse();
};



window.data = {
  orderData,
  orderDataZA,
  showMenu,
};

