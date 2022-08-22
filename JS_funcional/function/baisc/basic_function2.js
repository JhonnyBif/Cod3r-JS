function bomDia(){
    console.log('Bom Dia')
}
const boaTarde = function (){
    console.log('Boa Tarde')
}
function executarQaulquerCoisa(fn){
    if (typeof fn === 'function'){
        fn()
    }
}
executarQaulquerCoisa(bomDia)
executarQaulquerCoisa(boaTarde)

// Retornar funcação com outra função
function potencia (base){
    return function(exp){
        return Math.pow(base,exp)
    }
}
const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))