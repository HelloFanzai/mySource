/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if ( x < 0 ) {
        return false
    }
    x = x.toString().split('').join('')
    let reX = x.toString().split('').reverse().join('')
    if (x != reX) {
        console.log(x,'---',reX);      
        return false
    }
    console.log(x,'---',reX);      
    return true
};

// var isPalindrome = function(x) {
//     if(x<0) return false;
//     if(x%10 == 0 && x !=0) return false;
    
//     let halfRight = 0; 
    
//     while (x > halfRight) {
//         halfRight = halfRight * 10 + x % 10;
//         x = Math.trunc(x / 10);   
//     }    
//     return x == halfRight || x == Math.trunc(halfRight/10); 
//                                //Math.trunc ES6 新语法：保留整数，去除小数部分
// }

x= 1000021;
console.log( isPalindrome(x) );
