
// se declaran todas las constantes para asi poder reutilizarlas
const data = window.POKEMON.pokemon;
const dataOrder = data;
// console.log(dataOrder);
const botonOrdenar = document.getElementById("ordenar");
const showCard = document.getElementById("data");
const buttonMenu = document.getElementById("icon-menu");
const principalMenu = document.getElementById("nav");
const buttonMenuOpen = document.getElementById("icon-menu-close");



//---- Mostrar la data ----//


// LISTA POKEMON


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



//---Menú Hamburquesa---//
buttonMenu.addEventListener("click", showMenu); // eventos del menu




// ordenar pokemones 


const getOrderValue = event => {
    const orderValue = event.target.value;
    
    switch (orderValue) {
        case 'az':
          orderValue = 'ascendente';
            break;
        case 'za':
            orderValue = 'descendente';
            break;
    }
return orderValue;

};
botonOrdenar.addEventListener('change', getOrderValue);
    


