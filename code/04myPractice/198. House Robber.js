/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 0) {
        return 0
    }
    if (nums.length == 1) {
        return nums[0]
    }
    let previousMoney=nums[0]
    let currentMoney=Math.max(nums[0],nums[1]);
    for (let i = 2; i < nums.length; i++) {
        let temp = currentMoney;
            // console.log( `currentMoney=${currentMoney}-------------` );
        currentMoney = Math.max( previousMoney+nums[i],currentMoney )
            // console.log( `currentMoney = Math.max( previousMoney+nums[i],currentMoney )` );
            // console.log( `${currentMoney} = Math.max( ${previousMoney}+${nums[i]},${currentMoney}),i=${i}` );
        previousMoney = temp;
    }
    return currentMoney;
};

// 明显的动态规划问题：从左到右抢劫，对于每间房子，其当前最大抢劫财物数为：到前前个房子的最大财物数+当前屋子财物数 or 到前一个屋的最大财物数，选取二者的最大值；也就是说要么抢当前屋子，要么不抢。
// 每次都保存到前一个屋子的最大抢劫财物数和到当前屋子的抢劫财务数；
// 使用两个量来保存即可，无需使用数组来保存。

nums = [0,8,1,8,4,5]
    //  0 1 2 3 4 5
console.log( rob(nums) );