// 7 - Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// function isIsogram(str) {
//   const lowerCaseStr = str.toLowerCase(); // Convert the string to lowercase to handle case sensitivity
//   for (let i = 0; i < lowerCaseStr.length; i++) {
//     for (let j = i + 1; j < lowerCaseStr.length; j++) {
//       if (lowerCaseStr[i] === lowerCaseStr[j]) {
//         return false; // If any characters are the same, return false immediately
//       }
//     }
//   }
//   return true; // If no duplicates are found, return true
// }

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
console.log(isIsogram("asdfkgl")); // Output: true
console.log(isIsogram("qweqq"));
