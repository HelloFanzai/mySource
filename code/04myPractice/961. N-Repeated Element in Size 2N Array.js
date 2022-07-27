/**
 * @param {number[]} nums
 * @return {number}
 */

 var repeatedNTimes = function (nums) {

    let theN = nums.length/2
    let theObj = {}
    let theA 
    let theA2 
    // nums.map((theValue,theIndex)=>( theObj[theValue]=1 ))
    nums.forEach((theValue,theIndex)=>{
      // console.log( theObj[theValue] );
      theObj[theValue] = theObj[theValue] ? theObj[theValue]+=1 : 1
      // theObj[theValue] = theObj[theValue] + 1 || 1
      theObj[theValue] == theN ? theA=theValue : 'NO'
    })
  
  
    return theA
  
};

var repeatedNTimes2 = function (nums) {
    return nums.filter((theValue, theIndex) => { return nums.indexOf(theValue) != theIndex })[0]
};
var repeatedNTimes3 = function (nums) {
    let hashTable = {};

    // Write each element of nums to hashTable
    for (let item of nums) {
        // If item of nums already in hashTable return item
        if (hashTable[item]) {
            return item;
        }
        hashTable[item] = true;
    }
};


nums = [5, 1, 5, 2, 5, 3, 5, 4]

console.log(repeatedNTimes(nums));
console.log(repeatedNTimes2(nums));
console.log(repeatedNTimes3(nums));