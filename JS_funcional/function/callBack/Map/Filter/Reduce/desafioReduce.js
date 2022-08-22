const carrinho = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', quantidade: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', quantidade: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', quantidade: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', quantidade: 1, preco: 19.20, fragil: true}
]

const getFragil = item => item.fragil === true
const somarEstoque = (acumulador, elemento) => acumulador + elemento
const getTotal = item => item.quantidade * item.preco
const getMedia = (acumulador, elemento)=>{
    const novaQuantidade = acumulador.quantidade + 1
    const novoTotal = acumulador.total + elemento
    return{
        quantidade: novaQuantidade,
        total: novoTotal,
        media: novoTotal / novaQuantidade
    }
}
const valorInicialParaMedia = {quantidade: 0, total: 0, media: 0}

const fragil = carrinho
    .filter(getFragil)

const somaDoEstoque = carrinho
    .map(getTotal)
    .reduce(somarEstoque)

const mediaDoEstoque = carrinho
    .filter(getFragil)
    .map(getTotal)
    .reduce(getMedia,valorInicialParaMedia)

console.log(fragil)
console.log(` Total do estoque: ${somaDoEstoque}`)
console.log(mediaDoEstoque)
