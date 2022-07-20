
let theInput = '({[)]})'

function myFn( input ) {

    if ( input[0]==']'||input[0]=='}'||input[0]==')' ) {
        return false
    }

    if ( input[ input.length-1 ]=='['||input[ input.length-1 ]=='{'||input[ input.length-1 ]=='(' ) {
        return false
    }

    let theObj = {
        '{':'}',
        '[':']',
        '(':')',
    }
    let thePari = []
    for (let i = 0; i < input.length; i++) {
        //' ( { [ ) ] } ) '
        if ( theObj[input[i]] ) {
            thePari.push( theObj[input[i]] )
            console.log( thePari,'1stif',input[i] );
        }else if ( input[i] === thePari[ thePari.length-1 ] ) {
            thePari.pop()
            console.log( thePari,input[i] );
        } else {
            return false
        }
        
    }

    if ( thePari.length !== 0 ) {
        return false
    }

    return true
    
}

console.log( myFn(theInput) );