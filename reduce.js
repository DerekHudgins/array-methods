const reducer = (array, callback, initialValue) => {
  let accumulator;
  let i;

  if(initialValue){
    accumulator = initialValue;
    i = 0;
  } else {
    accumulator = array[0];
    i = 1;
  }
  for(i; i < array.length; i++){
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
};
module.exports = { 
  reducer, };
  
