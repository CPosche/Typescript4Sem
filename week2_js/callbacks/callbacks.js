const calculate = (x, y, operation) => {
  return operation(x, y);
};

const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

console.log(calculate(1, 2, add));
