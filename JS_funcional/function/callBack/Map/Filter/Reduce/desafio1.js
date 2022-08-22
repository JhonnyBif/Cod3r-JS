function sum(x){
    return function (y){
        return function (z){
            return x+y+z
        }
    }
}
const sumXY = sum (3) (4)
console.log(sumXY(13))
console.log (sum (10)(13)(20))

function calcular (x){
    return function(y){
        return function(fn){
            return fn(x,y)
        }
    }
}
function subtrair (a,b){
    return a-b
}
function multiplicar (a,b){
    return a*b
}
const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multiplicar)
console.log(r1)
console.log(r2)
