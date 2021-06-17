/**
 * @param {number[]} thenums
 * @return {number}
 */
var majorityElement = function (thenums) {
    let theObj = {'abc':123} //hashMap
    for (let i = 0; i < thenums.length; i++) {
        // console.log( thenums[i] );
        if (theObj[thenums[i]]) {
            theObj[thenums[i]]++
        } else {
            theObj[thenums[i]] = 1
        }
        if (theObj[thenums[i]] > thenums.length / 2) {
            console.log( theObj. );
            console.log( theObj );
            return thenums[i]
        }


    }

};
let nums = [3, 2, 3]
console.log(majorityElement(nums));