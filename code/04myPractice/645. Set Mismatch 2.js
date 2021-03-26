var findErrorNums = function (nums) {
    let duplicate;
    nums.unshift(0);
    console.log( nums );
    for (let i = 1; i < nums.length; i++) {
        let idx = Math.abs(nums[i])
        // console.log('nums[idx]=', nums[idx], nums,'befor');
        nums[idx] < 0 ? duplicate = idx : nums[idx] *= -1;
        console.log('i=',i,'nums[i]=',nums[i],'idx=',idx,'nums[idx]=', nums[idx], nums, 'after');
    }
    return [duplicate, nums.findIndex(n => n > 0)];
};

let theNUm = [2,3, 2, 1,5]

console.log(findErrorNums(theNUm));