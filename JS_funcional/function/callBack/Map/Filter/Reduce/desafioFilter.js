const carrinho = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99},
    {nome: 'Impressora', quantidade: 0, preco: 649.50},
    {nome: 'Caderno', quantidade: 4, preco: 27.10},
    {nome: 'Lapis', quantidade: 3, preco: 5.82},
    {nome: 'Tesoura', quantidade: 1, preco: 19.20}
]

Array.prototype.meuFilter = function (filt){
    const novoArray =[]
    for(let i = 0; i < this.length; i++){
        if (filt(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const getNome = item => item.nome
const quantidadeMaiorQueZero = item => item.quantidade > 0
const itensEmEstoque = carrinho
    .meuFilter(quantidadeMaiorQueZero)
    .map(getNome)
    
console.log(itensEmEstoque)