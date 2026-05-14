// return masked string
export function maskify(cc: string): string {
    let arrayKos = [];
    for (let index = 0; index < cc.length; index++) {
        if (index < cc.length - 4) {
            arrayKos.push("#")
        } else {
            arrayKos.push(cc[index])
        }
    }
    return arrayKos.join("")
}

console.log(maskify("123456789"))
console.log(maskify("89"))
console.log(maskify(""))