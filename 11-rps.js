// hari ke-11 (Rock Paper Scissors!)
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  return p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? "1" : "2"} won!`;
};

console.log(rps("rock", "paper"));
