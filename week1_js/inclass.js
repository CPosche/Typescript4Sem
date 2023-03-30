// callback

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// const square = numbers.map((x) => x ** 2);

// 1. create a function
// 2. create a new array, that will be returned
// 3 loop through the array
// 4. for each element, call the function

const map = (array, mapFunc) => {
  const mapArr = [];
  for (let i = 0; i < array.length; i++) {
    mapArr.push(mapFunc(array[i], i, array));
  }
  return mapArr;
};

const square = map(numbers, (x) => x ** 2);

console.log(square);

const filter = (array, filterFunc) => {
  const filterArr = [];
  for (let i = 0; i < array.length; i++) {
    filterFunc(array[i], i, array) && filterArr.push(array[i]);
  }
  return filterArr;
};

const even = filter(numbers, (x) => x % 2 === 0);

console.log(even);

const reduce = (array, reduceFunc, initialValue = 0) => {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = reduceFunc(acc, array[i], i);
    console.log(`itteration ${i + 1}`);
    console.log(acc);
  }
  return acc;
};

const accumulated = reduce(
  numbers,
  (x, y, i) => (i % 2 === 0 ? x * y : x / y),
  1
);
console.log(`result - ${accumulated}`);
