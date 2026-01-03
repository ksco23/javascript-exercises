const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArr) {
	return numArr.reduce((total, item) => total += item, 0);
};

const multiply = function(numArr) {
  return numArr.reduce((total, item) => total *= item);
};

const power = function(a, b) {
  return Math.pow(a, b);	
};

const factorial = function(a) {
  let factorial = 1;
  for(let i=1; i<=a; i++){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
