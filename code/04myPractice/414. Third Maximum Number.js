/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function (nums) {
    // Math.max() without any args will be -Infinity
    let the1st = Math.max()
    let the2nd = Math.max()
    let the3th = Math.max()

    for (let n of nums) {
        if (n === the1st || n === the2nd || n === the3th) {
            continue
        }
        if (n > the1st) {
            the3th = the2nd
            the2nd = the1st
            the1st = n
        } else if (n > the2nd) {
            the3th = the2nd
            the2nd = n
        } else if (n > the3th) {
            the3th = n
        }
    }
    // console.log( the3th, the1st);
    return the3th === Math.max() ? the1st : the3th
};

nums = [2, 2, 3, 1]
console.log( thirdMax(nums) );