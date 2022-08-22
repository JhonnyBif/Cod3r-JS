const numbers =[1, 2, 3, 4, 5, 6]

const numbers2 = numbers.map( (element) => {
    return element * 2
})

//console.log(numbers2)

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Flavia', score: 8.6},
    {name: 'Rodrigo', score: 9.4},
    {name: 'Ana', score: 9.1},
]

const getScore = element => element.score

const result = students
        .map(getScore)
        .map (Math.ceil)

console.log(students, result)