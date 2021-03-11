var theNum = 'abc';

let thenew = theNum.split('').reduce((totol, now) => {
    if (totol.length==1) {
        totol=totol+totol
    }
    return totol+now+now
})

console.log(thenew);