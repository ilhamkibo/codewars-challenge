export function solution(str: string, ending: string): boolean {

    // let judge = true;
    
    // if (str.length === 0 || ending.length === 0) return judge

    // const min = str.length > ending.length ? ending : str;

    // for (let index = 1; index <= min.length; index++) {
    //     if(str[str.length - index] !== ending[ending.length - index]) judge = false
    // }

    // return judge;

    return str.endsWith(ending)
}

console.log(solution("abcde","cde"))
console.log(solution("ab","sdasdasaba"))
console.log(solution("abc",""))