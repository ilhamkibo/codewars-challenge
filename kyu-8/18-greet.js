// 18 -Grasshopper - Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

const greet = (name, owner) => (name == owner ? "Hello boss" : "Hello guest");

console.log(greet("daniel", "daniel"));
console.log(greet("greg", "daniel"));
