/**
 * @param {number[][]} matrix
 * @return {number[]}
 */


var spiralOrder = function(matrix) {
    let res = [];
    let top = 0;
    let bottom = matrix.length-1;
    let left = 0;
    let right = matrix[0].length-1;
    let size= matrix.length * matrix[0].length;
    
    while(size>res.length){
        for(let i = left; i <= right && res.length < size; i++){
            res.push(matrix[top][i]);
        }
        top++;
        for(let i = top; i<= bottom && res.length<size; i++){
            res.push(matrix[i][right]);
        }
        right--;
        for(let i = right; i >=left && res.length<size; i--){
            res.push(matrix[bottom][i]);
        }
        bottom--;
        for(let i = bottom; i>=top && res.length < size; i--){
            res.push(matrix[i][left]);
        }
        left++;
         //The pattern will always repeat as RIGHT -> DOWN -> LEFT -> UP -> RIGHT....
    }  
    
    return res;
};


matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix));
