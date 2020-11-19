/**
 * @param {number[]} nums
 * @return {number}
 */
// var findUnsortedSubarray = function(nums) {

//     //slice()方法并不会修改数组，而是返回一个子数组
//     // let sorted = nums.slice().sort((a,b) => a-b);
//     let sorted = [...nums].sort((a,b) => a-b); //得出一个不会修改原数组的升序数组
//     // console.log( 'sorted: ',sorted  );
    
//     let diffStart = 0, diffEnd = 0;// 设置两个指针，分别是和原数组不同的位置的起始和结束

//     for (i = 0; i < nums.length; i++) {  //找和原数组不同的起始位置
//         if (nums[i] !== sorted[i]) {
//             diffStart = i;
//             break;
//         }
//     }
//     for (i = nums.length-1; i >= 0; i--) {  //找和原数组不同的结束位置
//         if (nums[i] !== sorted[i]) {
//             diffEnd = i + 1;
//             break;
//         }
//     }
//     return diffEnd - diffStart;
// };
var findUnsortedSubarray = function(nums) {

    let theLeft = 0, theRight = nums.length-1, diffEnd = -1, diffStart = 0;
    let theMin  = Infinity, theMax = -Infinity;
    while(theRight>=0){
        // nums[l] >= theMax ? theMax = nums[l] : diffEnd = l;
        if ( nums[theLeft] >= theMax ) {
            theMax = nums[theLeft]
        }else{
            diffEnd = theLeft
        }
        // nums[r] <=theMin ? theMin = nums[r] : diffStart = r;
        if ( nums[theRight] <=theMin ) {
            theMin = nums[theRight]
        } else {
            diffStart = theRight
        }
        theLeft++;
        theRight--;
    }
    return diffEnd-diffStart+1;
};

nums=[1,2,3,4];
// //   [1,2,3,4]
// A1=[2, 6, 4, 8, 10, 9, 15]
// A2=[2, 4, 6, 8,  9, 10,15]
console.log( findUnsortedSubarray(nums) );