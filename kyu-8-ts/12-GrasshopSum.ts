export const summation = (num: number) => {
  //   let sum = 0;
  //   for (let i = 1; i <= num; i++) {
  //     sum += i;
  //   }
  //   return sum;

  return (num * (num + 1)) / 2;
};

console.log(summation(1)); // Output: 1
console.log(summation(8)); // Output: 36
console.log(summation(3)); // Output: 6
