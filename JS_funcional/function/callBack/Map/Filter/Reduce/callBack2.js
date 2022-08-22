const fs = require('fs') //filesystem biblioteca do node
const path = require('path') //path biblioteca do node

const caminho = path.join(__dirname, 'dados.txt')

function exebirConteudo(_,conteudo){
    console.log(conteudo.toString())
}
console.log ('inicio')
fs.readFile(caminho,exebirConteudo)
//or
// fs.readFile(caminho, (_, conteudo) => console.log (conteudo.toString()))
// console.log ('fim')

// console.log('inicio Sync')
// const conteudo = fs.readFileSync(caminho)
// console.log (conteudo.toString())
// console.log('fim Sync')

