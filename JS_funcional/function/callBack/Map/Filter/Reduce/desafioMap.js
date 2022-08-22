const carrinho = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99},
    {nome: 'Impressora', quantidade: 0, preco: 649.50},
    {nome: 'Caderno', quantidade: 4, preco: 27.10},
    {nome: 'Lapis', quantidade: 3, preco: 5.82},
    {nome: 'Tesoura', quantidade: 1, preco: 19.20}
]

const getNome = item => item.nome
const getQuantidade = item => item.quantidade
const getPreco = item => item.preco

// console.log(carrinho.map(getNome))
// console.log(carrinho.map(getQuantidade))
// console.log(carrinho.map(getPreco))

// const getTotal = item => item.quantidade * item.preco
// const total = carrinho.map(getTotal)
// console.log(total)

// criando um map na mão
Array.prototype.meuMap = function (func){
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(func(this[i], i, this))
    }
    return novoArray
}
console.log(carrinho.meuMap(getNome))
console.log(carrinho.meuMap(getQuantidade))
console.log(carrinho.meuMap(getPreco))

const getTotal = item => item.quantidade * item.preco
const total = carrinho.meuMap(getTotal)
console.log(total)


