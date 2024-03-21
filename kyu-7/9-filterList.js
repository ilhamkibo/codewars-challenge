// 9 - List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
  return l.filter((val) => !isNaN(val) && typeof val != "string");
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
