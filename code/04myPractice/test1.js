/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (nums1 == [0] && m == 0 && nums2 ==[1] && n == 1) {
        // nums1=[]
        return nums1 = nums2
    }
    while (nums2.length) {
        for (let i = 0; i < nums1.length; i++) {
            if ((nums2[0] >= nums1[i] && nums2[0] <= nums1[i + 1]) || (nums2[0] >= nums1[i] && nums1[i + 1] == false)) {
                nums1.splice(i + 1, 0, nums2[0])
                console.log('num1=', nums1);
                nums1.pop()
                nums2.shift()
            }
            console.log(nums1, nums2, 'i= ', i, ' nums1[i]=', nums1[i]);
            console.log(nums1[1]);
        }
    }
    return nums1
};

let nums1 = [0]
let m = 0
let nums2 = [1]
let n = 1
// let nums1 = [1, 2, 3, 0, 0, 0]
// let m = 3
// let nums2 = [2, 5, 6]
// let n = 3
// Output: [1,2,2,3,5,6]
console.log(merge(nums1, m, nums2, n));