//curring
function finalPrice (tax){
    return function(price){
        return price * ( 1 + tax)
    }
}

const taxNYC = finalPrice(0.0875)

console.log(taxNYC(25.1))
console.log(taxNYC(21.7))
console.log(taxNYC(107.9))