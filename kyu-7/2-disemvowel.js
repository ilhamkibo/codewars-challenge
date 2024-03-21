// 2 - Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e

const disemvowel = (str) => str.replace(/[aiueoAIUEO]/g, "");

console.log(disemvowel("This website is for losers LOL!"));
