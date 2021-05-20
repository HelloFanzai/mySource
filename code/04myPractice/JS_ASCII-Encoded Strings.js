//问题： https://prepinsta.com/persistent/coding-test-questions/

function theFn(encoded) {
    let theAnswer = ''
    let theNumber = ''
    encoded = encoded.split("").reverse().join("")
    for (let i = 0; i < encoded.length; i++) {
        theNumber = theNumber + encoded[i]

        if ((theNumber >= 65 && theNumber <= 90) || (theNumber >= 97 && theNumber <= 122) || (theNumber == 32)) {
            // console.log(theNumber + '~~');
            theAnswer += String.fromCharCode(+theNumber)
            theNumber = ''
        }

    }
    return theAnswer
}

let theA = '23511011501782351112179911801562340161171141148'
console.log(theFn(theA));

