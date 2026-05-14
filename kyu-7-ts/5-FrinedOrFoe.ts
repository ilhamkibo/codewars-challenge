export function friend(friends: string[]): string[] { 
  //your code here
  return friends.filter((val,ind) => val.length == 4)
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))
console.log(friend(["Peter", "Stephen", "Joe"]))