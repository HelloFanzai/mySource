/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let theAnser = -1

    if (s.length == 1) {
        return 0
    }
    for (let i = 0; i < s.length; i++) {
        // if ( s.indexOf(s[i]) == i && !s.includes(s[i],i+1)  ) {
        //     return i
        // }

        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }

    }

    return theAnser
};

// -----

// var firstUniqChar = function (s) {
//     let theAnser = -1
//     let theObj = {}

//     for (let i = 0; i < s.length; i++) {

//         // theObj[s[i]] = {theCount: (theObj[s[i]]?.theCount || 0) + 1}
//         // theObj[s[i]].theIndex = theObj[s[i]]?.theIndex ?? i
     
//         theObj[s[i]] = {
//             theCount: (theObj[s[i]]?.theCount || 0) + 1,
//             theIndex: theObj[s[i]]?.theIndex ?? i
//         }

//     }

//     for (const key in theObj) {
//         if ( theObj[key].theCount === 1 ) {
//             console.log( theObj );
//             return theObj[key].theIndex
//         }
//     }
    

//     return theObj
//     return theAnser



// };

// string.indexOf(searchValue,startINdex)
// let s = "loveleetcode"
let s = "cba"
// let s = "aabb"
console.log(firstUniqChar(s));