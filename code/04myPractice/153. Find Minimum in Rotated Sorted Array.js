/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {

    let left = 0
    let right = nums.length - 1

    while (left < right && nums[left] >= nums[right]) {
        let mid = Math.floor(left + (right - left) / 2)

        if (nums[mid] < nums[left]) right = mid
        else left = mid + 1

    }


    return nums[left]
};