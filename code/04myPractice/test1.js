

const theA = {'name1':123}
function theFn1(theParams) {
    theParams=12
    // console.log( theParams );
    return theParams
}
class theFn2 {
    constructor(theB) {
        theB.name2 = '666'
        this.name1 = '12333'
        console.log(this)
        return theB
    }
}


console.log( theFn1(theA) );
console.log( theFn2.name );
console.log( theA );