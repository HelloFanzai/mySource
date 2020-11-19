/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle)
// };

var strStr = function (haystack, needle) {
    // if (needle === undefined || needle.length === 0 ) {
    if (!needle) {
        return 0;
    }
    if (!haystack) {
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        if ( haystack[i] === needle[0] ) {
            if ( haystack.substring( i, i + needle.length ) == needle ) {
                return i;
            }
        }
    }

    return -1;
};

haystack = "", needle = "a"
console.log( strStr(haystack, needle)  );