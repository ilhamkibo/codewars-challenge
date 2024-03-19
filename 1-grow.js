// function grow(x) {
//   let result = x[0];
//   for (let index = 1; index < x.length; index++) {
//     result *= x[index];
//   }
//   return result;
// }

// function grow(x) {
//   const result = x.reduce((acc, curr) => acc * curr, 1);
//   return result;
// }

const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([2, 2, 2, 2, 2, 2]));
