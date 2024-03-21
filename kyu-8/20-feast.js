// 20 - The Feast of Many Beasts
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

const feast = (beast, dish) =>
  beast[beast.length - 1] === dish[dish.length - 1] && beast[0] === dish[0];

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
