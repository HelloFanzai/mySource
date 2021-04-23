/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let zero = 0;
    while(left <= right) {

        if(nums[left] === 0) {
            let temp = nums[zero];
            nums[zero] = nums[left];
            nums[left] = temp;
            left++;
            zero++;
            // console.log( `${left},${right}` );
        } else if(nums[left] === 2) {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            right--;
        } else {
            left++
        }
        
    }
    console.log(zero);
    return nums;
};
let theA=[2,0,2,1,1,0]
console.log( sortColors(theA) );
