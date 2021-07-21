const { 
  mapping,
} = require('./map.js');

const someArray = ['The Grand Budapest Hotel', 'The Royal Tenenbaums', 'The Darjeeling Limited', 'The Life Aquatic with Steve Zissou'];

describe('a map function', () => {
  it('It takes an Array and callback and makes a new Array with the return value of each callback', () => {
    const makeUpperCase = (string) => {
      return string.toUpperCase();
    };

    expect(mapping(someArray, makeUpperCase))
      .toEqual([
        'THE GRAND BUDAPEST HOTEL',
        'THE ROYAL TENENBAUMS',
        'THE DARJEELING LIMITED',
        'THE LIFE AQUATIC WITH STEVE ZISSOU']);
  });
});
