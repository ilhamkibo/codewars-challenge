// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/typescript

export function findNextSquare(sq:number):number {
  // const square = Math.sqrt(sq);
  // if (!Number.isInteger(square)) return -1
  // else return Math.pow(square+1,2)

  return Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq)+1) ** 2 : -1
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(319225))
console.log(findNextSquare(15241383936))
console.log(findNextSquare(342786627))
console.log(findNextSquare(155))