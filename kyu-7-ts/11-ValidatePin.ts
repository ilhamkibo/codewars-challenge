// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/solutions/typescript

export class Kata {
  static validatePin(pin: string): boolean {
    // const num = pin.match(/[0-9]/g)?.join("")
    // console.log(num)
    // if (Number(pin) >= 0 && Number(pin) % 1 == 0 && ((num?.toString().length == 4 && pin.length == 4) || (num?.toString().length == 6 && pin.length == 6))) {
    //     return true
    // } 
    // return false
    return /^\d{4}$|^\d{6}$/.test(pin);
  }
}

console.log(Kata.validatePin("1"))
console.log(Kata.validatePin("1234"))
console.log(Kata.validatePin("12"))
console.log(Kata.validatePin("123456"))
console.log(Kata.validatePin("123"))
console.log(Kata.validatePin("12345"))
console.log(Kata.validatePin("12.0"), "12.0")
console.log(Kata.validatePin(" 95391"), " 95391")
console.log(Kata.validatePin("-1234"))
console.log(Kata.validatePin("-1.234"))
console.log(Kata.validatePin("1.234"))
console.log(Kata.validatePin("00000000"))
console.log(Kata.validatePin('1234 '))
console.log(Kata.validatePin("0000"), "0000")