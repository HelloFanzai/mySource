/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function (n) {

    let theAnswe = []
    let the3=0
    let the5=0
    for (let i = 1; i <= n; i++) {
        the3 +=1
        the5 +=1
        if ( the3 == 3 && the5 == 5 ) {
            theAnswe.push('FizzBuzz')
            the3 = 0
            the5 = 0
            continue
        }
        if ( the3 == 3  ) {
            theAnswe.push('Fizz')
            the3 = 0
            continue
        }
        if ( the5 == 5 ) {
            theAnswe.push('Buzz')
            the5 = 0
            continue
        }
        theAnswe.push(i+'')
    }

    return theAnswe

};
// var fizzBuzz = function (n) {

//     let theAnswe = []
//     for (let i = 1; i <= n; i++) {
//         if ( i % 3 == 0 && i % 5 ==0 ) {
//             theAnswe.push('FizzBuzz')
//             continue
//         }
//         if ( i % 3 == 0  ) {
//             theAnswe.push('Fizz')
//             continue
//         }
//         if ( i % 5 ==0 ) {
//             theAnswe.push('Buzz')
//             continue
//         }
//         theAnswe.push(i+'')
//     }

//     return theAnswe

// };

n = 5
console.log( fizzBuzz(n) );