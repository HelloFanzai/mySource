/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function(num) {
    let myResult=num+1

    for (let i = 0; i <= num; i++) {
        // if ( i.toString(2).indexOf('00')!==-1 || i.toString(2).indexOf('11')!==-1 ) {
        if ( i.toString(2).indexOf('11')!==-1 ) {
            // console.log('i= ',i,i.toString(2).indexOf('00'),'~~',myResult);
            // console.log('i= ',i,i.toString(2).indexOf('11'),"~~",myResult);
            myResult--
        }
    }
    return myResult
};

let num=100000000;
console.log( findIntegers(num) );