function myFn(S,K) {
    let theObj={}
    let theMap=new Map()

    // for (const theI of S) {
    //     theObj[theI]= theObj[theI]+1 || 1
    // }

    // for (let i = 0; i < S.length; i++) {
    //     theMap.set( S[i], (theMap.get( S[i] )+1) || 1 )
    // }



    for (let i = 0; i < S.length; i++) {
        if ( theMap.get( S[i] ) ) {
            let theTep=theMap.get( S[i] )
            theTep.push( i )
            theMap.set( S[i], theTep )
        } else {
            theMap.set(S[i], [i])
        }
    }

    while ( theMap.size==K ) {
        //balabala
    }

    return theMap
}

let S='adabbecdceee'  // K=2 delete 3 type letter  output:'ada'
let S='adabbecdceee'
// let S='abaacbca'
// let S='aabbcdd'
let K=2

console.log( myFn(S,K) );