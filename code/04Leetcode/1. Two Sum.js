/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if ( nums[i] + nums[j] === target ) {
//                 return [i,j]
//             }
//         }
//     }   
// };


const twoSum = (nums, target) => {
    const ht = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in ht) {
            console.log( 'the HT is: ',ht );
            return [ht[target - nums[i]], i];
            // return [i,ht[target - nums[i]]];
        } else {
            ht[nums[i]] = i;
            console.log( ht[nums[i]],'  ', nums[i] ,'  ', i);
        }
    }
}

console.log( twoSum( [2,5,5,11], 10) );
// console.log( twoSum( [1,2,3,4], 10) );
