function myFN(theInput) {
    return theInput.sort((a, b) => b - a)[1]
}

let theInput=[2,3,4,1,6,8]
console.log( myFN(theInput) );