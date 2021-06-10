const theArr = [0, 2, 0, 0, 6, 0, 8, 11, 13, 22]
console.log(theArr.find((theValue, theIndex, theArr) => {
    console.log(theValue, theIndex, theArr);
    if (theIndex >= 3) {
        return theIndex
    }
}))

for (let i = 0; i < theArr.length; i++) {
    
    
}