let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Flavia', 'Rodrigo'])
})
p
    .then(nome => nome[0])
    .then(primeiraLetra => primeiraLetra[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

// OR

function primeiroElemento(array){
    return array[0]
}
function primeiraLetra(string){
    return string[0]
}
function letraMinuscula(letraminuscula){
    return letraminuscula.toLowerCase()
}

new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Flavia', 'Rodrigo'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
