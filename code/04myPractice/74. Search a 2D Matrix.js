/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    for (const subArr of matrix) {
        if ( subArr[subArr.length-1] >= target && subArr[0] <= target ) {

            if ( subArr.indexOf( target ) !== -1 ) {
                return true
            }

        }else{
            continue
        }
        console.log( subArr );
    }

    return false
};

// --------

// var searchMatrix = function (matrix, target) {
//     const flatMatrix = matrix.flat()
  
//     return flatMatrix.findIndex((element) => element === target) !== -1
//   }
  



matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 34

console.log(searchMatrix(matrix, target));