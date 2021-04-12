//Given an unsigned integer, swap all odd bits with even bits. For example, 
//if the given number is 23 (00010111), it should be converted to 43 (00101011). 
//Every even position bit is swapped with adjacent bit 
//on right side (even position bits are highlighted in binary representation of 23), 
//and every odd position bit is swapped with adjacent on left side.


function theFn(theParams) {

    let theTwobit = (theParams.toString(2).length % 2) == 0 ? theParams.toString(2) : '0' + theParams.toString(2)
    let theOdd = ''
    let theEven = ''
    let theResul = ''

    for (let i = 0; i < theTwobit.length; i++) {
        if ((i % 2) == 0) {
            theEven = theTwobit[i]
        } else {
            theOdd = theTwobit[i]
            theResul += theOdd + theEven
        }
    }
    return parseInt(theResul,2)
}

let theA = 23
console.log(theFn(theA));
