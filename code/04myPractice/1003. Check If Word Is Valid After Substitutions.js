/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
    let theSubStr = S;
    while ( theSubStr.includes('abc') ) {
        theSubStr = theSubStr.replace('abc','')
        // console.log( theSubStr,' in while ' );
    }

    // return theSubStr
    // theSubStr=theSubStr.split('');
    // console.log( theSubStr[0] == '"' );
    return ( theSubStr.length == 0 ) ? true : false;
    
};


S="aabcbc"
console.log( isValid(S) );