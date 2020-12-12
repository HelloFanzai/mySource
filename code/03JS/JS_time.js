function theName() {
    console.time('theTime')
    let theA = 1
    for (let i = 1; i < 1000; i++) {
        theA = theA/i
    }
    console.timeEnd('theTime')
    return theA
}

console.log( theName() );


