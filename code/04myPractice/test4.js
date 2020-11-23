var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    console.log( i );
    return i + 1;
};

let theArr=[1,2,2,3,3,4]

console.log( removeDuplicates(theArr) );