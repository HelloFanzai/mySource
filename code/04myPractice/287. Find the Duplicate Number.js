/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let newAr={}
    for (let key of nums) {
        if ( newAr[key] ) {
            return key
        }
        newAr[key]=key
    }
};
let input=[1,2,3,3]
console.log( findDuplicate(input) );