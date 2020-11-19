/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(numbers, target,b=0, e=numbers.length-1) {
     
//     if (numbers[b]+numbers[e] === target)
//         return [b+1, e+1]
    
//     else if (numbers[b]+numbers[e] > target)
//         return twoSum(numbers, target, b, e-1)
    
//     else if (numbers[b]+numbers[e] < target)
//         return twoSum(numbers, target, b+1, e)
    
// };

var twoSum = function(numbers, target) {
    var result = [-1,-2];
    for (let i = 0; i < numbers.length; i++) {    
        for (let j = i+1; j < numbers.length; j++) {
            if ( ( ( numbers[i] + numbers[j] )==target ) && ( i != j )  ) {
                result = [i+1,j+1];
                break;
            }   
        }
    }

    return result;
};



console.log(twoSum([1,2,4,6,7,75],9));
