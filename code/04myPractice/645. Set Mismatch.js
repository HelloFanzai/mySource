/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let theObj = {}  //用object来计算每个数字出现的次数
    let theAnswer=[] //这是答案

    // 因为数组是从 1~n 所以可以计算出来总和：首项加末项 乘以 项数除以二
    let theSum = (nums.length + 1) * nums.length / 2  


    for (const theI of nums) {
        if ( theObj[theI] ) {
            //找到了重复的数，放到答案数组
            theAnswer.push(theI)
        } else {
            theObj[theI]=1

            //用总和减去每个数
            theSum=theSum-theI 
        }    
    }
    //  theI是角标 在for loop里
    //最后loop完毕 thesum就是缺失的数了
    theAnswer.push(theSum)
    return theAnswer
};
// 这是我的思路

let theNUm = [1,2,2,4]
console.log(findErrorNums(theNUm));