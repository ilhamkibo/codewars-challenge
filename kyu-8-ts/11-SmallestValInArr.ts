export function findSmallestInt(args: number[]): number {
  return Math.min(...args);
}

console.log(findSmallestInt([78, 56, 232, 12, 8])); // Output: 8
console.log(findSmallestInt([78, 56, 232, 12, 18])); // Output: 12
