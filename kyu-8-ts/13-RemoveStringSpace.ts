export function noSpace(x: string): string {
  //   return x.split(" ").join("");
  //   return x.replace(/\s/g, "");
  return x.replaceAll(" ", "");
}

console.log(noSpace("hello world")); // Output: "helloworld"
console.log(noSpace("  hello world  "));
console.log(noSpace("asfad asdad assss asasasa"));
