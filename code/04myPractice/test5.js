const arr = [1,2,[3,4,5,[6,7],8],9,10,[11,[12,13]]];
console.log( arr.toString().split(',') );
// const flatten = (arr) => arr.toString().split(',').map((item) => +item);
// console.log(flatten(arr));