// 22 - Count the Monkeys!
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

const monkeyCount = (n) => [...Array(n)].map((val, ind) => ind + 1);

console.log(monkeyCount(8));
