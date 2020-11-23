/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = nums.length; i >= 0 ; i--) {
        
        if ( nums[i] == 0 ) {
            nums.splice(i,1);
            nums.push(0);
        }
    }   
    return nums
};


// var moveZeroes = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let getValIndex = nums.indexOf(0); 
//         if (getValIndex !== -1) { //-1 if not found
//             nums.splice(getValIndex, 1);
//             nums.push(0); // add to end of array
//         }
//     }
// };


nums=[0,1,0,3,12];
console.log( moveZeroes(nums) );
