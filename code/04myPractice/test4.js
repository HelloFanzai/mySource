function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    // A=[...new Set(A)].sort((a, b) => a - b)
    // B=[...new Set(B)].sort((a, b) => a - b)
    // return A+''== B+''
    let thePofA = 0
    let thePofB = -1


    thePofB = B.indexOf(A[0])
    // for (let i = 0; i < A.length; i++) {
    //     if (B.indexOf(A[i]) == thePofB) {
    //         console.log( i,thePofB );
    //         return false
    //     }
    //     thePofB++
    //     if (thePofB > B.length-1) {
    //         thePofB=0
    //     }
    // }
    // return true


    B=B.slice(B.indexOf(A[0]),B.length).concat(B.splice(0,B.indexOf(A[0])))
    
    
    return A+'' == B+''
    


}
let theA = [1, 2, 3]
let theB = [2, 3, 1]
console.log(solution(theA, theB));

