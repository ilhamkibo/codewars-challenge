// hari-4
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

// function smash(words) {
//   if (words.length == 0) {
//     return "";
//   } else {
//     let result = words[0];
//     for (let index = 1; index < words.length; index++) {
//       result = result.concat(" ", words[index]);
//     }
//     return result;
//   }
// }

const smash = (words) => words.join(" ");

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
