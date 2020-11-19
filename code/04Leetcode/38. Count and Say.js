/**
 * @param {number} n
 * @return {string}
 */
// var countAndSay = function(n) {
//     let objectNums={
//         "1":0,"2":0,"3":0,"4":0
//     }

//     let countNums = function(n) {
//         n += "";
//         for (let i = 0; i < n.length; i++) {
//             if ( objectNums[n[i]] ) {
                
//             }
            
//         }
//     }

//     if ( n == 1 ) {
//         return 1
//     }
//     return ''+n+countAndSay(n-1)
// };

var countAndSay = function(n) {
    if (n == 1) return '1'
    let prev = countAndSay(n - 1).split('');
	
    let result = '';
    let lastIdx = -1;
    for (let i = 0; i < prev.length; i++){
        if (prev[i] !== prev[i+1]) {
            result += (i - lastIdx) + prev[i];
            lastIdx = i;
        }
    }
    return result;
};

console.log( countAndSay(3) );