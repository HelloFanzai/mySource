/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let theTotal={} //hashMap
    for (let i of nums) {
        if ( !theTotal[i]) {
            console.log( `i=${i},theTotal[i]=${theTotal[i]}` );
            theTotal[i]=1;
        }else{
            ++theTotal[i];
        }
        if ( theTotal[i]>(nums.length/2) ) {
            return i
        }
    }
};
nums=[3,2,3]
console.log( majorityElement(nums) );