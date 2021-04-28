function myFn(theP) {
    console.log( theP.toString(2) );
    console.log( parseInt(~theP.toString(2),2) );
    return ~theP
}

let theA=20
console.log( myFn(theA) );