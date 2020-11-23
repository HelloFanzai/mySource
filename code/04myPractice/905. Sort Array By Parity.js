/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let part1=[];
    let part2=[];
    for (let i = 0; i < A.length; i++) {
        if (A[i]%2==0) {
            part1.push(A[i])
            continue
        }    
        part2.push(A[i])
    }
    return part1.concat(part2)
};

// var sortArrayByParity = function(A) {
//     let anchor = 0;
//     for(let i = 0; i < A.length; i++) {
//       if(A[i] % 2 === 0) {  
//         [A[anchor],A[i]]=[A[i],A[anchor]]
//         anchor++
//       }  
//     }   
//     return A;
// };


a=[6,1,2,4];
console.log( sortArrayByParity(a) );
