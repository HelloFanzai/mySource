// alert("会出现外部的这个");
// console.log('出现吧');
// var array= [12,12,12,32,89,"12",12,78];
// arr = [... new Set(array)];
// console.log(arr);
// console.log(Array.from("arr"));

// a=2,b=3;
// a ^=b;
// console.log('a=2,b=3;');

// console.log(`a ^=b; a=${a},b=${b}`);
// b ^=a;
// console.log(`b ^=a; a=${a},b=${b}`);
// a ^=b;
// console.log(`a ^=b; a=${a},b=${b}`);

// var value = '113'
// value = parseInt(value,2) 
// console.log( value );
//   i j  i=0 j=1
//   2 2 2 3

//   i=0 j=2
//   2 2 2 3

    [1,2,2,3]
//   0 1 2 3 
//i=0 j=1 n[0]=1  n[1]=2 👉 if执行 i++ i=1,j=1  👉 nums[i] = nums[j]; => nums[i=1]=nums[j=1]=2 第一循环结束

//i=1; j++ =2;  n[i=1]=2 n[j=2]=2 👉 不执行if 第二循环结束

//i=1; j++ =3;  n[i=1]=2 n[j=3]=3 👉 执行if i++ =2; n[j=3]=3👉nums[i] = nums[j]; => nums[i=2]=nums[j=3]=3 第3循环结束  n[i=2]=2; n[j=3]=2;


nums=[2,2,3,4,4]
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    
    let i = 0; //用来计算有几个不同元素
    for (let j = 1; j < nums.length; j++) {
        console.log(`此时开始执行for循环i=${i},j=${j},数组是${nums}`);
        if (nums[j] != nums[i]) {
            console.log(`执行if的nums[j] != nums[i],此时i=${i},j=${j},数组是${nums}`);
            i++;
            console.log(`执行了i++,此时i=${i},j=${j},数组是${nums}`);
            nums[i] = nums[j];
            console.log(`执行了 nums[i] = nums[j];,此时i=${i},j=${j},数组是${nums}，接下来会j++`);
        }
    }        
    return i + 1;

};
removeDuplicates(nums)
