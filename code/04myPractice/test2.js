function theFn(theA,theB) {
    theA.unshift(theA.pop())
    console.log( theA );
    return theB
}




let theA = [5,7,4]
console.log( theA.find(e=>e>8) );
let theB = ['B','C','D']
console.log(theFn(theA,theB));

theN=[]
console.log( !!theN.length );