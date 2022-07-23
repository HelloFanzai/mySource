/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {

    let myAnswer = new Array(nums.length)

    nums.map( (Value,i)=>{
        return myAnswer[i] = nums[nums[i]]
    } )

    return myAnswer


    // return nums.map( (Value,i)=>{
    //     return nums[nums[i]]
    // } )

};

nums = [0,2,1,5,3,4]

console.log( buildArray(nums) );