/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // let theNewNums=[...new Set(nums)]
    // return theNewNums.length != nums.length
    let theObj={}
    for (const theI of nums) {
        if ( theObj[theI] ) {
            return true
        } else {
            theObj[theI]=1
        }
    }
    return false
};


// var containsDuplicate = function (nums) {

//     for (let i = 0; i < nums.length; i++) {
        
//         // if (  nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])  ) {
//         if (  nums.indexOf(nums[i])>-1 && nums.indexOf(nums[i],i+1)>-1  ) {
//             return true
//         }
//     }
//     return false
// };

let nums=[1,2,3,4]
console.log( containsDuplicate(nums) );