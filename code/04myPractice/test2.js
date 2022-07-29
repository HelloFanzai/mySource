function getMinSize(arr) {
    // Write your code here

    let theMin = Math.min(...arr)
    let theMax = Math.max(...arr)
    let theResult = []


    while( theMin*2 <= theMax && arr.includes(theMax)&&arr.includes(theMin) ) {
     

        
        
        theMin = Math.min(...arr)
        theMax = Math.max(...arr)
        theResult.push(theMax)

        arr.splice(arr.indexOf(theMin), 1)
        arr.splice(arr.indexOf(theMax), 1)



        console.log( 'arr:',arr );
    }


    return theResult
}

arr = [4, 7, 8, 6]
console.log( getMinSize(arr)  );