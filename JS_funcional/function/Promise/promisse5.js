function funcionarOuMao (valor, chanceErro){
    return new Promise ((resolve, reject)=>{
        if (Math.random()< chanceErro){
            reject('Ocorreu um erro')
        }else {
            resolve(valor)
        }
    })
}
funcionarOuMao('Testando...', 0.5)
    .then (v => console.log(` Valor: ${v}`))
    .catch (err => console.log(`Error: ${err}`))