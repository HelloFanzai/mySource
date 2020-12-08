function theA(A, B) {
    let theLength = A.length
    let freqs = {}
    let MaxFreq = 0
    let theArray =[]
    for (let i = 0; i < theLength; i++) {
        theArray.push([A[i],B[i]])
    }

    console.log( theArray );
}

// A = [2, 10, 4, 1, 4]
// B = [4, 1, 2, 2, 5]

// A = [2, 3, 2, 3, 5]
// B = [3, 4, 2, 4, 2]

A = [2, 3, 1, 3]
B = [2, 3, 1, 3]

console.log(theA(A, B));
