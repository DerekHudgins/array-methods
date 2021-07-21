const { 
  reducer,
} = require('./reduce');

describe('reducer', () => {
  const numbersArray = [1, 2, 3, 4];
  const sumTheNumbers = (a, b) => a + b;
    
  it('should take in an array and a callback and return the sum of all the numbers', () => {
        
    expect(reducer(numbersArray, sumTheNumbers)).toEqual(10);
  });
});
