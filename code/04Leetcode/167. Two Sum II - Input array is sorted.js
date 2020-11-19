/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function ( numbers, target, f = 0, l = numbers.length - 1 ) {
    if ( ( numbers[f] + numbers[l] ) == target ) {
        return [f+1, l+1]
    }
    if ( ( numbers[f] + numbers[l] ) > target ) {
        return twoSum( numbers, target, f, l+1 )
    }
    if ( ( numbers[f] + numbers[l] ) < target ) {
        return twoSum( numbers, target, f+1, l )
    }
};

numbers = [2,7,11,15], target = 9
console.log( twoSum(numbers,target) );