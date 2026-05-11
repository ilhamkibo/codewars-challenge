export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.filter(Boolean).length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ]),
); // Output: 20
