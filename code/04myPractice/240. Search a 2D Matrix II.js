/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if ( matrix.length==0 ) {
        return false
    }
    let i=0;
    let j=matrix[0].length-1
    while ( i<matrix.length && j>=0 ) {
        if ( target == matrix[i][j] ) {
            return true
        }
        if ( target < matrix[i][j] ) {
            --j
            console.log('--j=>', matrix[i][j], );
        } else {
            ++i
            console.log('++j=>', matrix[i][j], );
        }
    }
    return false;
};

// var searchMatrix = function(matrix, target) {
//     for (const subArr of matrix) {
//     if ( subArr[subArr.length-1] >= target && subArr[0] <= target ) {
//         if ( subArr.indexOf( target ) !== -1 ) {
//             return true
//         }
//     }else{
//         continue
//     }
//     // console.log( subArr );
// }
// return false
// };

m=[];
m= [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
t=18;
console.log( searchMatrix(m,t) );
// console.log( ( m.length==0 ) );
// console.log( ( m==0 ) );