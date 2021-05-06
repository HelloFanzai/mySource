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
let nums=[1,2,3,4]
console.log( containsDuplicate(nums) );