function removeKint(nums, k) {
    theSortedArr = nums
    theSortedArr = theSortedArr.concat()
    theSortedArr = theSortedArr.sort((a, b) => a - b)
    console.log('theSortedArr=', theSortedArr);
    for (let i = 0; i < k; i++) {
        // console.log( nums[nums.indexOf(theSortedArr[i])] );
        nums.splice(nums.indexOf(theSortedArr[i]), 1)
        console.log(nums);
    }
    return nums
}

//   arr= [5,3,64,32,35,33,62];
arr = [7, 8, 22, 21, 99, 1, 5, 3, 64, 32, 35, 10, 11, 33, 62]
k = 4;
//Output = [64,35,33,62]
console.log(removeKint(arr, k));