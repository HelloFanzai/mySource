/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let myAnser=[]
    for (let i = 1; i <= nums.length; i++) {
        if ( !nums.includes(i) ) {
          myAnser.push(i)  
        }
    }
    return myAnser
};



nums=[4,3,2,7,8,2,3,1];
console.log( findDisappearedNumbers(nums) );