const { 
  findIndex,
} = require('./findIndex');

describe('findIndex function', () => {
  const stuff = ['tacos', 'lime', 'corona', 'salsa', 'corn', 5];

  it('takes an array and a callback and returns the index of the first item whos callback value is truthy', () => {
        
    const callback = (item) => {
      if(item){
        return item;
      }
    };
    expect(findIndex(stuff, callback('tacos'))).toEqual(0);
    expect(findIndex(stuff, callback(5))).toEqual(5);
  });
});
