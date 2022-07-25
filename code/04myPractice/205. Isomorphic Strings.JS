/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const theS = {}, theT = {}

    for (let i = 0; i < s.length; i++) {
        
        if ( !theS[ s[i] ] && !theT[ t[i] ] ) {
            theT[ t[i] ] = s[ i ]
            theS[ s[i] ] = t[i]
        } else {
            if ( theT[ t[i] ] != s[ i ] ) {
                console.log( theS,theT );
                return false
            }
        }
        
    }
 
    return true
};


s = "egg", t = "adc"

console.log( isIsomorphic(s,t) );