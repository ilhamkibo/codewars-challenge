// 7 - You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = (n) => Math.sqrt(n) % 1 === 0;

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
