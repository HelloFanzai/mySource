/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {   
    if (x>0) {
        // x = x.toString().split('')
        x = parseInt(x.toString().split('').reverse().join(''))

        //toString 数字转换成字符串
        //split  把字符串的每一个字符作为元素保存成数组
        //reverse 把数组倒叙
        //join 把数组转换成字符串
        //parseInt 变成数字
        if ( x > 2147483647 || x < -2147483648 ) {
            return 0
        }
        return x
    } else {
        // x = x.toString().split('')
        x = -parseInt(x.toString().split('').reverse().join(''))
        if ( x > 2147483647 || x < -2147483648 ) {
            return 0
        }
        return x
    } 
};

// const reverse = (x) => {
//     let r = 0   
//     while ( x != 0 ) {
//         console.log( r,x );
//         r = r * 10 + x % 10
//         x = parseInt(x / 10)
//     } 
//     if ( (r > (2 ** 31) - 1) || (r < -(2 ** 31)) ){
//       return 0
//     }   
//     return r
// }


x=1534236469
reverse(x);