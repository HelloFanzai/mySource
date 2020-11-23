/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let indexA = a.length;
    let indexB = b.length;
    let myAnswer = '';
    let carry = 0;
    while (indexA || indexB) {
        console.log(`BF carry=${carry},myAnswer=${myAnswer}`);
        let sum = (indexA > 0 ? +a[--indexA] : 0) + (indexB > 0 ? +b[--indexB] : 0) + carry;
        myAnswer = (sum % 2) + myAnswer;
        carry = sum > 1 ? 1 : 0;
        console.log(`AF carry=${carry},myAnswer=${myAnswer}\n`);
    };
    return carry ? carry + myAnswer : myAnswer;
};
a = "1010", b = "1011"
console.log( addBinary(a,b) );