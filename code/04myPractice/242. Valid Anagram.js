/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if ( s.length != t.length ) {
        return false
    }
    chatCount=new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        chatCount[s.charCodeAt(i) % 97]++   //unicode码 a=98
        chatCount[t.charCodeAt(i) % 97]--
    }
    the26th0=new Array(26).fill(0).toString()
    // console.log( chatCount.toString() );
    // console.log(the26th0);
    
    if ( chatCount.toString() == the26th0 ) {
        return true
    }else{
        return false
    }

};

s='abcdef';
t='fedcba';

console.log( isAnagram(s,t) );
