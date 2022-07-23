/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums, k) {

//     let theNewNums=[...new Set(nums)]
//     if (theNewNums.length == nums.length) {
//         return false
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (  (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) && (Math.abs( i - nums.indexOf(nums[i],i+1) ) <= k) ) {
//             return true
//         }
//     }
//     return false

// };
var containsDuplicate = function (nums, k) {
    let theObj = {}
    for (let i = 0; i < nums.length; i++) {

        if (theObj[nums[i]] !== undefined && Math.abs(i - theObj[nums[i]]) <= k) {
            console.log(Math.abs(i - theObj[nums[i]]), theObj[nums[i]] - i);
            return !!1
        }
        theObj[nums[i]] = i
        console.log(theObj);
    }
    return false
};

nums = [1, 2, 3, 1, 2, 3], k = 2
console.log(containsDuplicate(nums, k));