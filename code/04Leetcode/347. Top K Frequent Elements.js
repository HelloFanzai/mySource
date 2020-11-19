/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let theObj = {}
    let theArray = [];
    let myAnswer = [];

    for (const theKey of nums) {
        if (theObj[theKey]) {
            theObj[theKey]++
        } else {
            theObj[theKey] = 1
        }
        // console.log( theObj );
    }

    for (let theKey in theObj) {
        theArray.push([+theKey,+theObj[theKey]])
        // console.log( theArray );
    }

    // console.log('排序前', theArray );

    theArray.sort((a, b) => b[1] - a[1])

    // console.log('排序后', theArray );

    for (let i = 0; i < k; i++) {       
        myAnswer.push( theArray[i][0] )
    }
    return myAnswer
};

nums = [3,0,1,0,5,5,5];
k = 2;
console.log(topKFrequent(nums, k));