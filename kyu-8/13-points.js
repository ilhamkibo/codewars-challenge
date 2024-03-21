// hari ke-12 (Total amount of points)
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

// function points(games) {
//   let newArr = [];
//   games.forEach((element) => {
//     if (element[0] > element[2]) {
//       newArr.push(3);
//     } else if (element[0] < element[2]) {
//       newArr.push(0);
//     } else {
//       newArr.push(1);
//     }
//   });
//   return newArr.reduce((a, b) => a + b);
// }

const points = (games) =>
  games
    .map((element) =>
      element[0] > element[2] ? 3 : element[0] < element[2] ? 0 : 1
    )
    .reduce((a, b) => a + b);

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
