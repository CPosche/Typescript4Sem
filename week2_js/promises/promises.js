// const calculate = (x, y, operation) => {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== "number" || typeof y !== "number") {
//       reject("x and y must be numbers");
//     }
//     resolve(operation(x, y));
//   });
// };

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

// (async () => {
//   const res = calculate(1, 2, add)
//     .then((res) => {
//       calculate(res, 3, multiply);
//     })
//     .then((res) => {
//       calculate(res, 4, divide);
//     })
//     .then((res) => {
//       calculate(res, 5, subtract);
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// })();

const calculate = async (x, y, operation) => {
  return await operation(x, y);
};

(async () => {
  const res = await calculate(1, 2, add);
  console.log(res);
  const res2 = await calculate(res, 3, multiply);
  console.log(res2);
  const res3 = await calculate(res2, 4, divide);
  console.log(res3);
  const res4 = await calculate(res3, 5, subtract);
  console.log(res4);
})();
