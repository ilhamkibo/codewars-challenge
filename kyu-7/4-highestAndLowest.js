// 4 - Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

const highAndLow = (numbers) =>
  `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;

console.log(highAndLow("1 2 3 4 5 6"));
