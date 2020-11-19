/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    // let myAnser=11111111111111111111111111111111
    // myAnser = myAnser.toString(2).replace(/0/gi,'').length;
    myAnser = n.toString(2).split('').filter((i)=>(i==1))
    return myAnser.length;
};

n=11111111111111111111111111111111
console.log(  hammingWeight(n) );