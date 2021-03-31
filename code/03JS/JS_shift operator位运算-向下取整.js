let a = 16.9
let b = 9.2

console.log(a >> 1); // 16/2/2/2   除以几次2
console.log(a >> 0); // 16*2*2  乘以几次2  
//  <<0 可以向下取整  位运算只在数字小于2^32-1的时候靠谱

console.log(b >> 0); // 16*2*2  乘以几次2  >>0
//  >>0 也可以向下取整 位运算只在数字小于2^32-1的时候靠谱

a=22222222222
console.log(a + b >> 0);
console.log(a + b << 0);
console.log(Math.floor((a + b) / 2));