/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    return n % 4 > 0
    // 因为自己先走，对手也可以移动1 or 2 or 3，所以遇4必输
    //1234
};

let n = 5
console.log(canWinNim(n));