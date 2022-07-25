/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    let theObj = {}
    let theArray = s.split(' ')

    if (theArray.length !== pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {

        if (!theObj[pattern[i]]) {

            let tempKeys = Object.values(theObj);
            if (tempKeys.includes(theArray[i])) {
                console.log(666, i, pattern[i], theArray[i]);
                return false
            }
            theObj[pattern[i]] = theArray[i]
        } else {
            if (theObj[pattern[i]] !== theArray[i]) {
                return false
            }
        }


    }
    console.log(666, theObj);
    return true

};

var wordPattern2 = function (pattern, s) {

    let newS = s.split(' ');
    let matchingKey = {}
    let matchingVal = {}
    if (newS.length != pattern.length)
        return false;

    for (let s = 0; s < pattern.length; s++) {


        if (!matchingKey[pattern[s]] && !matchingVal[newS[s]]) {
            matchingKey[pattern[s]] = newS[s];
            matchingVal[newS[s]] = pattern[s];
        }
        else {
            if (matchingKey[pattern[s]] != newS[s] || matchingVal[newS[s]] != pattern[s]) {
                return false;
            }
        }
    }

    return true;

};

pattern = "abba", s = "dog dog dog dog"
console.log(wordPattern(pattern, s));
console.log(wordPattern2(pattern, s));