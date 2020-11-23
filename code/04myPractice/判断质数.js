function myFn(theNs) {
    let theCount = 0;
    theLoopOne:
    for (var i = 2; i <= theNs; i++) {
        for (var j = 2; j < Math.sqrt(theNs); j++) {
            if (i % j == 0) {
                continue theLoopOne   //跳出j循环继续i循环
            }
        }
        if (j > i / 2) {
            ++theCount
        }
    }
    return theCount
}
let theNs = 2247481000
console.log( myFn( theNs ) );