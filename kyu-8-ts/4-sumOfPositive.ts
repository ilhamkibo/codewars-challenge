export function positiveSum(arr:number[]): number {
      return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}

console.log(positiveSum([1, -2, 3, 4, -5])); // 8