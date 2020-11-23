/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if ( numRows==0 ) return 0;
    let triangle = [];
	//initialization
    for(let i=0;i<numRows;i++){
        triangle.push(new Array(i+1).fill(1));
    }
    console.log( triangle );
	//compute for Pascal's triangle
    for(let i=2;i<triangle.length;i++){
        for(let j=1;j<triangle[i].length-1;j++){
            triangle[i][j] = triangle[i-1][j-1]+triangle[i-1][j];
        }
    }
    return triangle;
};

numRows=32;
console.log( generate(numRows) );