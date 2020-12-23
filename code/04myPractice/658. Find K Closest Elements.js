/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

//双指针
var findClosestElements = function (arr, k, x) {
    let theLeft = 0;
    while (k < arr.length - theLeft) {
        const theRight = arr.pop();
        if (theRight - x < x - arr[theLeft]) {
            theLeft++;
            arr.push(theRight);
        }
    }
    return arr.slice(theLeft);

};

//二分查找
// var findClosestElements = function (arr, k, x) {
//     let low = 0, high = arr.length - 1;
//     while (low < high) {
//         const mid = low + Math.floor((high - low) / 2);
//         x - arr[mid] > arr[mid + k] - x ? low = mid + 1 : high = mid;
//     }
//     return arr.slice(low, low + k);
// };

// 把 mid 看成结果的起始下标，判断是否正确。

// 如果 arr[mid + k] 位置的差值比 arr[mid] 位置的差值小，那说明起始值比 mid 大。因为假设返回值窗口取的值是mid 到 [mid + k]，是 k + 1 的长度，不是 k 的长度。

// 反之起始值肯定是mid或者在mid左边。

// 目的找到结果数组的起始下标
// 如果 x - arr[mid] > arr[mid + k] - x ，那么起始值肯定在mid右边
// 反之起始值肯定是 mid 或者在 mid 左边
// 返回起始值到 k-1 个元素

arr = [1, 2, 2, 3, 3, 10, 10, 11, 12, 13]//[1,2,3,4]
k = 4
x = 9

console.log(findClosestElements(arr, k, x));