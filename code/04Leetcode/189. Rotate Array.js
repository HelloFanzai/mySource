/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     while (k != 0) {
//         let temN = nums[nums.length-1]
//        nums.pop(temN);
//     //    console.log( nums );
//        nums.unshift(temN)
//     //    console.log( nums,"\n" );
//        k--
//     }
//     return nums
// };

var rotate = function(nums, k) {
    while (k != 0) {
        let temN = nums[nums.length-1]
       nums.pop(temN);
    //    console.log( nums );
       nums.unshift(temN)
    //    console.log( nums,"\n" );
       k--
    }
    return nums
};


nums = [1,2,3,4,5,6,7], k = 3
console.log( rotate(nums,k) );