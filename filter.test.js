const { 
  filtering,
} = require('./filter.js');

describe('filtering function', () => {
  it('Takes an Array and callback and creates a new Array with all items whose callback returned true.', () => {

    const numsArray = [1, 2, 3, 4, 5, 6];

    const returnEvenNum = (num) => {
      if(num % 2 === 0) return true;
      else return false;
    };
        
    expect(filtering(numsArray, returnEvenNum)).toEqual([2, 4, 6]);
  });
});
