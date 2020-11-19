/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let myAnswer = [];
    let mySum = 0;
    for (let i = 0; i < nums.length; i++) {
        mySum += nums[i];
        myAnswer.push(mySum);
    }
    return myAnswer
}

// var runningSum = function(nums) {
//     for (let i = 1; i < nums.length; i++) {
//         nums[i] += nums[i - 1];
//     }
//     return nums;
// };

nums = [3,1,2,10,1]
console.log( runningSum(nums) );