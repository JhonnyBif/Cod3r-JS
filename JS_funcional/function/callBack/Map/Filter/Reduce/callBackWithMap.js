const numbers = [1, 2, 3 ,4 ,5]
const dobro = n => n*2
console.log( numbers.map(dobro))

const numbersIndex = [1, 2, 3 ,4 ,5]
const dobroSumIndex = (n, i) => n * 2 + i
console.log( numbersIndex.map(dobroSumIndex))

const numbersIndexLength = [1, 2, 3 ,4 ,5]
const dobroSumIndexSumLenght = (n, i, a) => n * 2 + i + a.length
console.log( numbersIndex.map(dobroSumIndexSumLenght))

const nomes = ['Ana', 'Bia', 'Fla', 'Jac']
const primeiraLetra = texto => texto[0]
const letra = nomes.map(primeiraLetra)
console.log(nomes, letra)