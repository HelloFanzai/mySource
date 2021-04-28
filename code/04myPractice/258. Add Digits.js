/**
 * @param {number} num
 * @return {number}
 */
// var addDigits = function (num) {
//     num = num.toString().split('')
//     let theResult = num.reduce((theSum, theNum) => +theSum + +theNum)
//     while (theResult >= 10) {
//         theResult = theResult.toString().split('')
//         theResult = theResult.reduce((theSum, theNum) => +theSum + +theNum)
//         console.log(theResult);
//     }
//     return theResult
//     // return (num - 1) % 9 + 1;

// };
var addDigits = function (num) {
    if (num<10) {
        return num
    } else {
        console.log('num=',num/10,num%10);
        return addDigits( ~~(num / 10) + (num % 10))
    }
};

let num = 10
console.log(addDigits(num));