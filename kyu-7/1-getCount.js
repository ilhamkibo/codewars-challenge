// 1 - Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// function getCount(str) {
//   let vowels = ["a", "i", "u", "e", "o"];
//   let sum = 0;

//   // Iterasi melalui setiap karakter dalam string
//   [...str].forEach((val) => {
//     // Memeriksa apakah karakter tersebut adalah vokal
//     if (vowels.includes(val)) {
//       sum++;
//     }
//   });

//   return sum;
// }

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }

console.log(getCount("abracadabraaeeeea"));
