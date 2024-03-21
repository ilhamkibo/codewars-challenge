// 8 - Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// function accum(s) {
//   return s
//     .toUpperCase()
//     .split("")
//     .map((val, ind) => {
//       let gol = val;
//       for (let i = 0; i < ind; i++) {
//         gol += val.toLowerCase();
//       }
//       return gol;
//     })
//     .join("-");
// }

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
// console.log(accum("MjtkuBovqrU"));
