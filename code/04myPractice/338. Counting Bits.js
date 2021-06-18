/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    const theAnswer = [0];
    
    for(let i = 1; i <= n; i++) {
        if(i%2 === 0) theAnswer[i] = theAnswer[i/2];
        else theAnswer[i] = theAnswer[i-1] + 1;

    }
    let theT=''
    theAnswer.forEach(i=>theT += ' '+ i);
    return theT
};

console.log( countBits(1111) );
// console.log( countBits(1111) );