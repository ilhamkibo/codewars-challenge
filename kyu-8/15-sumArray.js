// 15 - Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

const sumArray = (array) =>
  array == null
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0);

// const sumArray = (array) =>
//   array
//     .filter((val) => val !== Math.max(...array) && val !== Math.min(...array))
//     .reduce((a, b) => a + b, 0);

console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([3, 5]));
console.log(sumArray([3]));
console.log(sumArray(null));
