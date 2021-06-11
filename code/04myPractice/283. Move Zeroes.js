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



nums=[0,1,0,3,12];
console.log( moveZeroes(nums) );

let theArray=[1,2,3,0,0,4]
function moveZero(theArray) {
    let theS = 0
    for (let i = 0; i < theArray.length; i++) {
        if (theArray[i] != 0) {
            [theArray[i], theArray[theS]] = [theArray[theS], theArray[i]]
            theS++
        }
    }
    return theArray
}

console.log(moveZero(theArray));
