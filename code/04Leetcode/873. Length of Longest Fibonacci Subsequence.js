var lenLongestFibSubseq = function(A) {
    let theLength = A.length;
    let mySum = new Set(A);
    let myAnswer = 0;
    for (let i = 0; i < theLength; ++i)
        for (let j = i+1; j < theLength; ++j) {
            let x = A[j], y = A[i] + A[j];
            let length = 2;
            while (mySum.has(y)) {
                let z = x + y;
                x = y;
                y = z;
                myAnswer = Math.max(myAnswer, ++length);
            }
        }
    return myAnswer >= 3 ? myAnswer : 0;
};

theA=[1,2,3,4,5,6,7,8]
console.log( lenLongestFibSubseq(theA) );