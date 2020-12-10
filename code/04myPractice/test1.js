function myFn(P) {
    
    let theArray = []
    let theTemp = P.length - 1
    let theAnser = 0
    for (let i = 0; i < P.length; i++) {
        if ( P[i]==true  ) {
            theAnser++
        }
    }
    while (theTemp != 0) {
        theArray = []
        for (let i = 0; i < P.length - 1; i++) {
            
            if (P[i] + P[i + 1] >= 1) {
                theArray.push(1)
                theAnser++
                if (theAnser > 1000000000) {
                    return 1000000000
                }
            } else {
                theArray.push(0)
            }

        }
        P = theArray
        --theTemp
    }
    return theAnser
}
let a=[true, false, false, true, false]
console.log( myFn(a) );