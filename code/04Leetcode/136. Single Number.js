/**
 * @param {number[]} nums
 * @return {number}
 */ 

// var singleNumber = function(nums) {
//     let numsObj={};

//     //for of是遍历键值
//     for (let i of nums) {
//         numsObj[i]= ++numsObj[i] || 1;
//     }

//     //for in是遍历键名
//     for (let i in numsObj) {
//         if ( numsObj[i] ==1 ) {
//             return i;
//         }   
//     }   
// };

// var singleNumber = function(nums) {
//     nums.sort(); 
//     //数组长度一定是奇数
//     for (let i = 0; i < nums.length; i+=2) {
//         if (nums[i] != nums[i+1]) {
//             return nums[i]
//         }       
//     }
// }

var singleNumber = function(nums) {
    // nums.sort(); 
    let res = 0
    for (let i = 0; i < nums.length; i++) {      
        console.log( res,'比较前',nums[i] );

        res = res ^ nums[i]; //异或（XOR）操作
        console.log( res,'比较后',nums[i] );
    }
    return res
}

// var singleNumber = function(nums) {
//     let theRes = [] //空数组
//     for (let i = 0; i < nums.length; i++) {    //遍历输入
//         if (theRes.includes(nums[i])) { //判断数组是否有这个数
//             theRes.splice( theRes.indexOf(nums[i]),1 ) //
//         } else {    theRes.push(nums[i]) }
//     }
//     return theRes[0]
// }

// var singleNumber = function(nums) {
//     let theRes = {} //空对象
//     for (let i = 0; i < nums.length; i++) {    //遍历输入
//         if ( theRes[nums[i]] ) { //判断数组是否有这个数
//             delete theRes[nums[i]]
//         } else {   theRes[nums[i]]=1 }
//     }
//     return Object.keys(theRes)[0]
// }

// var singleNumber = function(nums) {
//     return eval([...new Set(nums)].join("+"))*2 - eval(nums.join("+"));
// }



nums=[4,1,2,1,2]

console.log( singleNumber(nums) );
