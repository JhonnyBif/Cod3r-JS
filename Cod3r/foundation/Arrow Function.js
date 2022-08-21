// function express
const increment1 = function (n){
    return n+1
}
// arrow function is always anonymous function
const increment2 =(n) =>{
    return n+1
}
console.log (increment1(1))
console.log (increment2(5))

//on the same line don't need return and braces("{}")
const sum = (x,y) => x*y
console.log(sum(3,8))