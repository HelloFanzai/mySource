function theFn(theParams) {

    function theSubFn1(e) {
        console.log(this);

        
    }

    return theSubFn1
}




let theA = 123
console.log(theFn(theA));

