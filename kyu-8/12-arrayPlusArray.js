// hari ke-12 (Array plus array)
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((curr, acc) => curr + acc);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
