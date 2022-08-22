function gerarNumerosEntre(min, max, tempo){
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve (aleatorio)
        }, tempo)
    })
}
function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(0,60,2000),
        gerarNumerosEntre(0,60,500),
        gerarNumerosEntre(0,60,100),
        gerarNumerosEntre(0,60,1000),
        gerarNumerosEntre(0,60,2500)

    ])
}
console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(()=>{
        console.timeEnd('promise')
    })