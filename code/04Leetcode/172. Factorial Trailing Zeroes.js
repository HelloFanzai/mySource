/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let numZeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        console.log( i,' ',numZeroes  );

        numZeroes += Math.floor(n / i);
        console.log( i,' ',numZeroes, '\n' );
    }
    return numZeroes;
};
n=26;
console.log( trailingZeroes(n)  );