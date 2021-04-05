function theFn(theA,theB) {
    theA.unshift(theA.pop())
    console.log( theA );
    return theB
}




let theA = [2,3,4]
let theB = ['B','C','D']
console.log(theFn(theA,theB));

