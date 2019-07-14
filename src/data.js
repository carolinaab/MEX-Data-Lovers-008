window.pokemons = {

// funcion q deberia ordenar
  sortData : (data, sortBy) => {

    if(sortBy === "a-z") {
      return data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if( a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    if (sortBy === "z-a") {
      return data.sort((a,b) => {
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    }
  },




}
