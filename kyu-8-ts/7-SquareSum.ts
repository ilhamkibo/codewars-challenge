export function squareSum(numbers: number[]): number {
    return numbers.reduce((acc,cur) => {
        return acc + (cur*cur)
    }, 0);
}

console.log(squareSum([1,2,2]))
console.log(squareSum([2,2,2]))
console.log(squareSum([1,2]))
console.log(squareSum([0,3,4,5]))
console.log(squareSum([]))