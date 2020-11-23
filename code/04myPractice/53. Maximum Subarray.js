/**
 * @param {number[]} nums
 * @return {number}
 */  //[1,2,3,-4,,5]
var maxSubArray = function(nums) {
    if(nums.length==1) return nums[0];
    let maxN= nums[0];
    let bestSum= -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (bestSum<0) {
            bestSum = nums[i]
        } else {
            bestSum += nums[i]
        }
        if (bestSum > maxN) {
            maxN = bestSum
        }
    }
    return maxN
};

//Kadane algorithm

// var maxSubArray = function(nums) {
// 	if(nums.length==1) return nums[0];
// 	var cur=nums[0];
// 	var ans=cur;
// 	for(var i=1;i<nums.length;i++)
// 		{
// 			cur=Math.max(cur+nums[i],nums[i]);
// 			ans=Math.max(ans,cur);
// 		}
// 	return ans;
// };

// var maxSubArray = function(arr) {
//     let max_so_far = Number.MIN_SAFE_INTEGER;
//     let max_ending_here = 0;
//     let length = arr.length;
//     for (let i=0; i<length; i++) {
//         max_ending_here = max_ending_here + arr[i];
//         if (max_ending_here > max_so_far) {
//             max_so_far = max_ending_here;
//         }
//         if (max_ending_here < 0) {
//             max_ending_here = 0;        
//         }
//     }    
//     return max_so_far;
// };

// var maxSubArray = function (nums) {
//     for (let i = 0; i < nums.length - 1; i++) if (nums[i] > 0) nums[i + 1] += nums[i];
//     return Math.max(...nums);
// };



// nums=[1,2,3,-4,5]
nums=[3,-3,1,-1,5]

console.log( maxSubArray( nums ) );
