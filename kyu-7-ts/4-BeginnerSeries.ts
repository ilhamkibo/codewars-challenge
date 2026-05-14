export function getSum(a: number, b: number): number {
  let arr: number[] = [];

  const start = a > b ? b : a;
  const end = a > b ? a : b; 

  for(let i = start; i <= end; i++) {
    arr.push(i)
  }

  return arr.reduce((a,b) => a + b)
}

console.log(getSum(0,-1))
console.log(getSum(0,1))