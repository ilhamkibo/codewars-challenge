// 19 - Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

const sumMix = (x) => x.map((val) => parseInt(val)).reduce((a, b) => a + b);

console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
