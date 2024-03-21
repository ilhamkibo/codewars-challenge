// 3 - Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

const squareDigits = (num) =>
  +String(num)
    .split("")
    .map((digit) => digit ** 2)
    .join("");

console.log(squareDigits(3212));
