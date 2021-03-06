let digits = '23';
var letterCombinations = function (digits) {
    const mapping = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    digits = digits.split("")
    let result = []
    for (const digit of digits) {
        result = charStringMutiply(mapping[digit], result)
    }
    return result
};


var charStringMutiply = function (chars, strings) {
    const result = []
    if (strings.length == 0) {
        return chars
    }
    for (const character of chars) {
        for (const st of strings) {
            result.push(st + character)
        }
    }
    return result
}
//console.log(charStringMutiply(chars, string));
console.log(letterCombinations(digits));