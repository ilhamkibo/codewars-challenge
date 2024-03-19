// hari ke-6
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// function DNAtoRNA(dna) {
//   let asem = [];

//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") {
//       asem.push("U");
//     } else {
//       asem.push(dna[i]);
//     }
//   }
//   return asem.join("");
// }

// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

console.log(DNAtoRNA("GCATTT"));
