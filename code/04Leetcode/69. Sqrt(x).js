/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//     if ( x==0 ) {
//         return 0
//     }else if ( x<4 ) {
//         return 1
//     }else {
//         for(let i = 1; i < x; i++) {
//             if(i*i > x) {
//                 return i-1;
//             } else if(i*i === x) {
//                 return i;
//             } else {
//                 continue
//             }
//         }
//     }
// };  //二分法

var mySqrt = function(x) {
    if(x==0 || x == 1) return x;
    
    let ans, absX = Math.abs(x);
    let tolerance = 0.00000000000000000000000001;
    while(true){
        ans = (x+absX/x)/2;
        console.log( `ans=${ans},'  ',absX=${absX},'   ',x=${x}` );
        if(Math.abs(x-ans) < tolerance) break;
        x = ans;
    }
    return Math.floor(ans);
}; //牛顿法求平方



x=1000;
console.log( mySqrt(x) );