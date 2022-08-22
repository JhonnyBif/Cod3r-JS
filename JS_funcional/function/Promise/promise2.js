function esperarPor(tempo = 2000){
    return new Promise (function(resolve){
        setTimeout(function(){
            console.log('Executando a promise')
            resolve()
        },tempo)
    })
}
esperarPor()
    .then(()=> esperarPor())
    .then(esperarPor)