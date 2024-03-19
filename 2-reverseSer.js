// Hari ke-2
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript

// const reverseSeq = (n) => {
//   let array = [];
//   for (let index = n; index > 0; index--) {
//     array.push(index);
//   }
//   return array;
// };

// const reverseSeq = (n) => Array.from({ length: n }, (_, index) => n - index);

const reverseSeq = (n) => {
  return [...Array(n)].map((el, ind) => n - ind);
};

console.log(reverseSeq(4));
