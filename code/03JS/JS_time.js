function theName() {
    console.time('theTime')
    let theA = 0
    for (let i = 1; i <= 100; i++) {
        theA = theA+i
    }
    console.timeEnd('theTime')
    return theA
}

console.log( theName() );


