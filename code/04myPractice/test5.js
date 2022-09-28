var merge = function(nums1, m, nums2, n) {
    let last = m+n-1;
    while(m>0 && n>0){
        if(nums1[m-1]>nums2[n-1]){
            nums1[last]=nums1[m-1];
            m -= 1;
        }else{
            nums1[last]=nums2[n-1];
            n -= 1;
        }
        last -= 1;
    }
    while(n>0){
        nums1[last] = nums2[n-1];
        n = n-1;
        last = last-1;
    }
};

let arr1 = [4,5,6,0,0,0]
let arr2= [1,2,3]
// let arr1 = [3,4,6,5,1]
// let arr2= [4,6,7,9,2]
merge( arr1, 3, arr2, 3 )
console.log( arr1 );