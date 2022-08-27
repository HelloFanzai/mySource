/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {

    let newArr = Array(n).fill(1)
    let newArr2 = []

    for (let i = 2; i < n; i++) {

        if (newArr[i] == 0) {
            continue
        }

        newArr2.push(i)

        for (let j = i * i; j < n; j += i) {
            newArr[j] = 0
        }

    }

    return newArr2
    // return newArr
};



n = 21
console.log(countPrimes(n));