export const makeNegative = (num: number): number => {
    if(num < 0) return num
    else return num * (-1) 
}

console.log(makeNegative(1))
console.log(makeNegative(5))
console.log(makeNegative(-5))