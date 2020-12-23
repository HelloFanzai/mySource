function myFn(S) {
    let theObj = {}
    let theMap = new Map()

    for (const theI of S) {
        theObj[theI] = theObj[theI] + 1 || 1
    }

    for (let i = 0; i < S.length; i++) {
        theMap.set(S[i], (theMap.get(S[i]) + 1) || 1)
    }

    console.log(theObj);
    return theMap
}

let S = 'adabbecdceee'
// let S='abaacbca'
// let S='aabbcdd'

console.log(myFn(S));