/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// var reverseString = function(s) {
//    return s.reverse(); 
// };
// console.log( reverseString(["h","e","l","l","o"]) );

s=["h","e","l","l","o"];
var reverseString = function(s) {
    var bb=[];
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s
};
s=reverseString(s)
console.log( s );