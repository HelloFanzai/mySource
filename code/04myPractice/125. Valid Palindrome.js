/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^a-z0-9]/gi,'').toLowerCase()
    let theHalfLength=Math.floor(s.length/2)
    console.log( s,' ',theHalfLength );
    for (let i = 0; i <theHalfLength ; i++) {
        console.log( i,' ',s[i],'  ',s[s.length-i-1] );
        if ( s[i] != s[s.length-i-1] ) {
            return false
        }
    }
    return true
};

// var isPalindrome = function (s) {
//     s = s.replace(/[\W_]+/g, "").toLowerCase();
//     return s === s.split("").reverse().join("");
// };

s="A man, a plan, a canal: Panama";
console.log( isPalindrome(s) );