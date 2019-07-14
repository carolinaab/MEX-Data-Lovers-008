require('../src/data.js');


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('deberia retornar un arreglo, () => {
    expect(sortData() instanceof Array).toBe(true);
  });

