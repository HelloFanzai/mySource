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
        } else {
            ++i
        }
    }
    return false;
};

// var searchMatrix = function(matrix, target) {
//     if ( matrix.length==0 ) {
//         return false
//     }
//     for (let i = 0; i < matrix.length; i++) {
//         if ( matrix[i].includes(target) ) {
//             return true
//         }    
//     }
//     return false
// };

m=[];
t=18;
// console.log( searchMatrix(m,t) );
// console.log( ( m.length==0 ) );
console.log( ( m==0 ) );