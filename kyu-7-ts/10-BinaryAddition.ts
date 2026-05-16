// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/typescript

export function addBinary(a:number,b:number):string {
    return (a+b).toString(2);
}

console.log(addBinary(1,1))
console.log(addBinary(0,1))
console.log(addBinary(1,2))
console.log(addBinary(51,12))
console.log(addBinary(100,0))