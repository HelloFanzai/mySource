let theArr = [999,123,5,5,33,33,0,0,999]


// let theResult1
// let theStatus
// theResult1 = theArr.filter((theNum, index) => {
//     return theArr.indexOf(theNum) == index
// })
// console.log(theResult1);

let theResult2=[]
for (let i = 0; i < theArr.length; i++) {
    if ( theArr.indexOf(theArr[i])==i ) {
        theResult2.push(theArr[i])
    }
}
console.log( theResult2 );