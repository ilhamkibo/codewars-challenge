const feast3 = (beast: string, dish: string): boolean => beast[beast.length - 1] === dish[dish.length - 1] && beast[0] === dish[0]; 

// export function feast (beast: string, dish: string): boolean {
//     return beast[beast.length - 1] === dish[dish.length - 1] && beast[0] === dish[0]
// }

console.log(feast3("great blue heron", "garlic naan"));
console.log(feast3("chickadee", "chocolate cake"));
console.log(feast3("brown bear", "bear claw"));
