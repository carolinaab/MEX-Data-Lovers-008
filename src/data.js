// imagen preolad
const preloadCharge = () => {
  containerPreload.style.display = "none";
};
window.onload = preloadCharge;


//---- Ordenar data ----//
const sortData = () => data.sort((a, b) => {

  let aName = a.name.toLowerCase();
  let bName = b.name.toLowerCase();

  if (aName < bName) return -1;
  if (aName > bName) return 1;
  return 0;

});


const sortDataNumber = (multiplicador = 1) => data.sort((a, b) => {
  let bNumber = b.id
  let aNumber = a.id
  // console.table({
  //   a: aNumber,
  //   b: bNumber,
  //   result: aNumber - bNumber,
  //   conMultiplicador: aNumber - bNumber * multiplicador
  // });
  return aNumber - bNumber * multiplicador;
});







