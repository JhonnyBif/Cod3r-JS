class produto{
    constructor(nome, preco, desc){
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }
    get precoFinal() {
        return this.preco * ( 1 - this.desc)
    }
}
const p1 = new produto('Caneta', 10)
console.log(p1.nome)

const p2 = new produto('Geladeira', 3000, 0.8)
console.log(p2.preco)
console.log(p2.precoFinal)