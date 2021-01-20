/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // let theStart = nums.indexOf(target)
    // let theEnd = nums.indexOf(target,(theStart+1))
    // return [theStart,theEnd]

    let theStart = nums.indexOf(target)
    let theEnd = nums.reverse().indexOf(target)
    if (theEnd != -1) {
        theEnd = nums.length - theEnd -1
    }
    return [theStart,theEnd]

};

let nums = [8]
let target = 8
console.log( searchRange(nums,target) );