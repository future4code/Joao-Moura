type info = {
    sum: number
    sub: number
    mult: number
    isbigger: number
}

const calc = (num1:number, num2: number): info =>{
    return {
        sum: num1 + num2,
        sub: num1 - num2,
        mult: num1 * num2,
        isbigger: num1 > num2 ? num1 : num2
    }
}

console.log(calc(10, 2));