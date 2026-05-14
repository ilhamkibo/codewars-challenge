export function sumTwoSmallestNumbers(numbers:Array<number>): number {  
    return numbers.sort((a,b) => a-b)[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([32,2,3,14, 9,21,15]))