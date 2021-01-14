/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let theAnswer=s.split(' ')
    let theResult=[]
    for (const theI of theAnswer) {
        if (theI!='') {
            theResult.unshift( theI )
        }
    }
    return theResult.join(' ')
};


// var reverseWords = function(s) {
//     let theArray=s.split(' ')
//     let theResult=''
//     console.log( theArray );
//     for (let theI = theArray.length-1; theI >= 0 ; theI--){
//         if ( theArray[theI] != '' ) {
//             theResult = theResult + theArray[theI] + ' '
//         }
//     }
//     theResult=theResult.substring(0, theResult.length - 1);
//     return theResult
// };


let s="  hello world  "
console.log( reverseWords(s),'--','ha' );