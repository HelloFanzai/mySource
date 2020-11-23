function additionWithoutCarrying( param1,param2 ) {
    console.log( '',param1 );
    console.log( param2 );
    param1 = param1.toString().split("")
    param2 = param2.toString().split("")

    let theLength = Math.min( param1.length,param2.length )
    let myAnser=[]
    // console.log( param1,param2 );
    for (let i = theLength-1; i >= 0; i--) {
        myAnser.unshift( ((+param1.pop() + +param2.pop())%10)+'' ) 
    }

    if ( param1.length>param2.length ) {
        param1.length-param2.length
        myAnser = param1.concat(myAnser)
    }
    
    if ( param2.length>param1.length ) {
        param2.length-param1.length
        myAnser = param2.concat(myAnser)
    }

    return +myAnser.join('')
}

let inp1 = 456;
let inp2 = 1734;

console.log( additionWithoutCarrying(inp1,inp2) );
