// 17 - Area or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

// const areaOrPerimeter = (l, w) => {
//     if (l === w) {
//         return l*w;
//     } else {
//         return 2*(l+w);
//     }
// }

const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));
