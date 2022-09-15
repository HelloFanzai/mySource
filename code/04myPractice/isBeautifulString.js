function isBeautifulString(inputString){
    inputString=inputString.split("");
    // console.log( inputString );
    let myObj = {};
    let myArray = []
    for (let i = 0; i < inputString.length; i++) {
        if (!myObj.hasOwnProperty(inputString[i])) {
          myObj[inputString[i]] = 1;
        } else myObj[inputString[i]]++;
    }
    for (const key in myObj) {
        myArray.push([key,myObj[key]])
    }
    myArray = myArray.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt())
    console.log( myArray );
    for (let i = 0; i < myArray.length-1; i++) {
        if ( myArray[i][1]<myArray[i+1][1] ) {
            return false
        }
    }
    if ( myArray[0][0]!='a' ) {
        return false
    }
    return true



    // let theString = 'abcdefghijklmnopqrstuvwxyz';

    // let myObj = {};

    // for(let i of inputString){
    //     if(myObj[i]){
    //         myObj[i] = myObj[i] + 1;
    //     }
    //     else{
    //         myObj[i] = 1;
    //     }
    // }

    // let theTemp = myObj['a'];
    // if(theTemp === undefined) return false;
    // for(let i of theString){
    //     if(myObj[i] > theTemp) return false;
    //     if(theTemp === undefined && myObj[i] > 0) return false
        
    //     theTemp = myObj[i]
    // }
    // return true;
}

inputString = 'bbbaacdafe'

console.log( isBeautifulString(inputString) );