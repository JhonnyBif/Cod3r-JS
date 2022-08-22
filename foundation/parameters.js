function logParams (x,y,z){
    console.log(x,y,z);
}
logParams (1,2,3)
logParams (1,2,3,4,5)
logParams (1,2)
logParams (1)
logParams ()

function defaultParams (a = 1, b = 2, c= 3) {
    console.log(a,b,c)
}
defaultParams (7, 8, 9)
defaultParams (7, 8)
defaultParams (7)
defaultParams ()

// spread / rest / ARRAY
function logNums (...numbers) {
        console.log(numbers)
}
logNums (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//Sum all numbers
function sumAll (...nums){
    let total = 0
    for (let n of nums){
        total += n
    }
    return total
}
console.log (sumAll(1,2,3,4,5,6,7,8,9,10))