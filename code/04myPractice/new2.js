function add1(theArr) {
    let theAnswer=[]
    for (let i = 0; i < theArr.length; i++) {
        if (theArr[i]>=18) {
            theAnswer.push(theArr[i])
        }
        
    }
    return theAnswer
}


theArr= [32,33,16,40]
console.log( add1(theArr) );
