/**
 * @param {string[]} strs
 * @return {string}
 */
// was asked by 'prefix string',start from index 0 not longest common substring

var longestCommonPrefix = function(strs) {
    if (strs.length < 1) return "";
    let prefix = "";
    let shortestChar = strs[0];
    for (i = 1; i <= shortestChar.length; i++) {
        prefix = shortestChar.slice(0,i);
        for (j = 1; j < strs.length; j++) {
            if (prefix !== strs[j].slice(0,i)) {
                // console.log('if returned');
                return prefix.slice(0,prefix.length-1);
            }
        }
    }
    console.log('for return');
    return prefix;
};

// var longestCommonPrefix = function(strs) {
//     if(strs.length === 0) return '';
//     const sorted   = strs.sort((a,b) => a.length - b.length);
//     const smallest = sorted[0];
	
//     for (let i = smallest.length; i >= 0; i--) {
//         if ( sorted.every(e => e.substring(0, i) === smallest.substring(0, i))) {
//           return smallest.substring(0,i);
//         }
//     }
//     return '';
// };

strs=["flowerab","flowab","floightab"];
console.log( longestCommonPrefix(strs) );