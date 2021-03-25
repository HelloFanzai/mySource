var theNum = 'abc';

let thenew = theNum.split('').reduce((totol, now) => {
    if (totol.length==1) {
        totol=totol+totol
    }
    return totol+now+now
})

console.log(thenew);


let arrString = 'abcdaabc';
let theA
theA = arrString.split('').reduce(function (res, cur) {
    // res[cur] ? res[cur] ++ : res[cur] = 1
    res[cur] =  ++res[cur] || 1
    return res;
}, {})

console.log(arrString, '←（）→', theA);
