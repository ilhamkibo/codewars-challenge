// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/typescript

export function openOrSenior(data:number[][]):string[]{
  // let olee: string[ ] = [];
  // data.map(((val,ind )=> {
  //   if (val[0] > 54 && val[1] > 7) {
  //     olee.push("Senior")
  //   } else {
  //     olee.push("Open")
  //   }
  // } ))
  // return olee;
  
  return data.map(([age,handicap]) => {
    return age > 54 && handicap > 7 ? "Senior" : "Open"
  })
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))