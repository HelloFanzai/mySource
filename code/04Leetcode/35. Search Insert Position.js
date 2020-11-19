/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if ( nums.indexOf(target) != -1 ) {
        return nums.indexOf(target)    
    }
    nums.push( target );
    nums.sort( (a, b) => a - b );
    return nums.indexOf(target)
};

// const searchInsert = function(nums, target) {
//     let i = 0;
//     while(nums[i] < target) i++;
//     return i;
// };


nums=[1,3,5,6];
target=4;

console.log( searchInsert(nums, target) );