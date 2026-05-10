const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([2, 2, 2, 2, 2, 2]));
