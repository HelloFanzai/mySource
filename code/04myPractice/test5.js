function theFn(theP) {
    console.log(theP.map(i => i * 2));
    console.log(theP.forEach( (theN,theI) =>  theP[theI] = theN * 3  ))
    // theP.foreach()
    return theP
}

let theArray = [1, 4, 9, 16]
console.log(theFn(theArray));