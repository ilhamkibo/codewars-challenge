// hari ke-7
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

// function countBy(x, n) {
//   let z = [];
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     result += x;
//     z.push(result);
//   }

//   return z;
// }

// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }

const countBy = (x, n) =>
  Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * x);

console.log(countBy(2, 5));
