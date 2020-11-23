
function myFn(S) {

    if ( S[0]==')' || S[0]==']' || S[0]=='}' ) {
        return 0
    }
    let myArray=[]
    for (let theKey of S) {
        if ( theKey=="(" || theKey=="[" || theKey=="{" ) {
            myArray.push(theKey)
            continue
        }
        if ( theKey==")" || theKey=="]" || theKey=="}"  ) {
            let theTemp= myArray[myArray.length-1]
            if ( theTemp+theKey =='()' || theTemp+theKey =='{}' || theTemp+theKey =='[]' ) {
                myArray.pop()
                console.log( myArray,'--poped','theKey= ',theKey );
            }else{
                return 0
            }
        }
    }
    console.log( myArray ,'--result',myArray.length );
    return (myArray.length==0) ? 1 : 0
    // return 1
}

theInput = "((())())"
// theInput = "([)()]"
// theInput = "{{{{"
console.log(myFn(theInput));