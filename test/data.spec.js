require('../src/data.js');


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('deberia retornar un arreglo de objetos `example`', () => {
    expect(filterData() instanceof).toBe('array');
  });
});
