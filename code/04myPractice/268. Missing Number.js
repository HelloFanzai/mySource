/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let theAnser = -1

    for (let i = 0; i < nums.length+1; i++) {
        if (nums.includes(i)) {
            continue
        }else{
            return i
        }
        
    }
    return theAnser
};

// ---------------

var missingNumber2 = function (nums) {
    let totalSum = (1 + nums.length) * (nums.length) / 2

    for (let i = 0; i < nums.length; i++) {
        totalSum -= nums[i]
        
    }
    return totalSum
};

// -------

var missingNumber3 = function (nums) {

    let numSet = new Set(nums)

    for (let i = 0; i < nums.length + 1; i++) {
        if ( numSet.has(i) ) {
            continue
        }else{
            return i
        }
    }
};

// let nums = [9,6,4,2,3,5,7,0,1]
let nums = [0,1]
console.log(missingNumber3(nums));