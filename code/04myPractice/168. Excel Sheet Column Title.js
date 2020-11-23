/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let charDic = {
        1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F',
        7: 'G', 8: 'H', 9: 'I', 10: 'J', 11: 'K', 12: 'L',
        13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'Q', 18: 'R',
        19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X',
        25: 'Y', 0: 'Z'
    }
    if (n<=26) {
        return charDic[n%26]
    }else{
        --n
    }
    return convertToTitle( parseInt( (n/26) ) ) + convertToTitle( (n%26)+1 )
};

// var convertToTitle = function(n) {
//     let title = '';
//     let rem;
//     while (n) {        
//         rem = (n - 1) % 26;
//         n = (n - 1 - rem) / 26;
//         title = String.fromCharCode(65 + rem) + title;
//     }
//     return title;   
// };

n=52
console.log( convertToTitle(n) );