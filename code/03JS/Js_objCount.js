// there is an array 
// design a function that calculate for each
// item how many times it occurs. It should return 
// {
//   'banana': 1,
// 'apple': 1,
// ‘orange’:2
// }

function theObjCount(theP) {
    let theResult = {}

    // for (const theI of theP) {
    //     theResult[theI] = theResult[theI] + 1 || 1
    // }

    for (let i = 0; i < theP.length; i++) {
        if (theResult[theP[i]]) {
            theResult[theP[i]]++
        } else {
            theResult[theP[i]] = 1
        }
        // theResult[theP[i]]=theResult[theP[i]]+1||1
    }
    return theResult
}

let theP = ['banana', 'apple', 'orange', 'orange']
console.log(theObjCount(theP));


let arrString = 'abcdaabc';
let theA
theA = arrString.split('').reduce(function (res, cur) {
    // res[cur] ? res[cur] ++ : res[cur] = 1
    res[cur] =  ++res[cur] || 1
    return res;
}, {'answer':'Wow'})

console.log(arrString, '←（）→', theA);

