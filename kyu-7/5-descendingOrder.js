// 5 - Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {
  return +String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

console.log(descendingOrder(1292357));
