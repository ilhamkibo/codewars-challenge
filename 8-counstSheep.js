// hari ke-8 (If you can't sleep, just count sheep!!)
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// var countSheep = function (num) {
//   let azazi = [];
//   for (let i = 0; i < num; i++) {
//     azazi.push(`${i + 1} sheep...`);
//   }
//   return azazi.join("");
// };

const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
console.log(countSheep(5));
