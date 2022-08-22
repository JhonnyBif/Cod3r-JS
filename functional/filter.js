const numbers =[1, 2, 3, 4, 5, 6]
const greaterThanZero = el => el > 0
const greaterThanFour = el => el > 4
const even = el => el % 2 ===0

console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanFour))
console.log(numbers.filter(even))

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Flavia', score: 8.6},
    {name: 'Rodrigo', score: 9.4},
    {name: 'Ana', score: 9.1},
]
const greatStudent = student => student.score >= 9 

console.log(students.filter(greatStudent))