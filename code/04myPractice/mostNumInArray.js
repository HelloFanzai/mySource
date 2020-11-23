let theArray=[233,1,1,3,4]
function findMost(arr) {
    let theObj = {};
    let maxCount = 0;
    let maxNum = null;
    for (let i = 0; i < arr.length; i++) {

        if (!theObj[arr[i]]) {
            theObj[arr[i]] = 1
        }else {
            theObj[arr[i]]++
        }
        if (theObj[arr[i]]>maxCount) {
            maxNum = arr[i]
            maxCount = theObj[arr[i]]
        }
    }
    return `the numberis ${maxNum},the count is ${maxCount}`
}

console.log( findMost(theArray) );