function theFn(input) {
    let myResult=''
    for (let theKey of input) {
        if ( theKey=='z' ) {
            myResult +='a'
        } else {
            myResult += String.fromCharCode( theKey.charCodeAt()+1 )            
        }
    }
    return myResult
}

input='abcz'
console.log( theFn(input) );