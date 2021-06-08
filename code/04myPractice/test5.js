const theArr = [2,6,8,11,13,22]
console.log( theArr.find( (theValue, theIndex, theArr)=>{
    console.log( theValue,theIndex,theArr );
    if (theIndex>=3) {
        return theIndex
    }
} ) )