/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1];
    //base case
    if (rowIndex == 0) return [1];
    if (rowIndex == 1) return [1,1];
    let rec = getRow(rowIndex-1); //up to bottom
    console.log(rec);
    //rowIndex = 2 rec=[1,1]right here
    for(let i = 1; i < rowIndex; i++){
        res[i] = rec[i-1] + rec[i];
    }
    res.push(1);
    return res;
};
rowIndex=4
console.log( getRow(rowIndex)  );