//anonymouos funciton
(function(x,y,z){
    return x*y-z
})
// function express
const mathExpress = function(x,y,z){
    return x*y-z
}
console.log(mathExpress(5,3,10))

const anotherMathExpress = mathExpress

console.log(anotherMathExpress(13,7,21))