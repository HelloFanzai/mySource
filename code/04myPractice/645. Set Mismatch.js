/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let theObj = {}
    let theAnswer=[]
    let theSum = (nums.length + 1) * nums.length / 2
    for (const theI of nums) {
        if (theObj[theI]) {
            theAnswer.push(theI)
        } else {
            theObj[theI]=1
            theSum=theSum-theI
        }    
    }
    theAnswer.push(theSum)
    return theAnswer
};


let theNUm = [3,2,3,4,6,5]
console.log(findErrorNums(theNUm));