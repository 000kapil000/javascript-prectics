function isPrime(){
    if (typeof n !=="number" || n<=1 || n%1 !==0) {
        return false
    }
    for(let i= 2; i<=Math.sqrt(n); i++){
        if (n%i===0) {
            return true
        }
    }
}


console.log(isPrime(11));