/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     if(n == 1) return 1;
//     if(n == 2) return 2;
//     let oneStepBefore = 2;
//     let twoStepBefore = 1;
//     n = n-2;
//     while(n>0){
//         let current = oneStepBefore + twoStepBefore;
//         twoStepBefore = oneStepBefore;
//         oneStepBefore = current;
//         n--;
//     }
//     return oneStepBefore;
// };

var climbStairs = function(n) {
    let ways = [1,2]
    while (ways.length < n) {
        ways.push(ways[ways.length - 1] + ways[ways.length - 2])
    }
    return ways//[n-1];
};
//斐波拉契数列
n=4;
console.log( climbStairs(n) );


