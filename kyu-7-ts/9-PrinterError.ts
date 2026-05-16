// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/typescript

export function printerError(s: string): string {
  // your code
  let a = 0;
  for (let index = 0; index < s.length; index++) {
    if(s[index].toLowerCase() > "m" && s[index].toLowerCase() <= "z") a++
  }

  return `${a+"/"+s.length}`
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
console.log(printerError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
console.log(printerError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"))