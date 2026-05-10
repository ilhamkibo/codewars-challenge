// export function removeChar(str: string): string {
//   return str.slice(1,str.length-1) 
// }

const removeChar = (str: string): string => str.slice(1,str.length-1) 

console.log(removeChar("eloquent"))
console.log(removeChar("country"))
console.log(removeChar("person"))
console.log(removeChar("ab"))
console.log(removeChar("xyz"))