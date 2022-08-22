function execution (func, a ,b){
    return func(a, b)
}

const somarNoTerminal = (x,y) => console.log (x + y)
const subtrairNoTerminal = (w, z) => console.log (w - z)
const subtrair = (w, z) => w - z

execution (somarNoTerminal, 56, 38)
execution (subtrairNoTerminal, 56, 38)


const result = execution (subtrair, 50, 25)
console.log(result)