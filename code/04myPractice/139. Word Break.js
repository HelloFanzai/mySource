/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function (s, wordDict) {
//     for (let i = 0; i < wordDict.length; i++) {
//         // console.log( 's=',s,' ',wordDict[i] );
//         while (s.indexOf(wordDict[i]) != -1) {
//             s = s.replace(wordDict[i], ' ')
//             console.log(wordDict[i]);
//         }
//     }
//     return s.trim().length ? false : true
// };

var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    // console.log( wordSet );
    const visited = Array(s.length).fill(false)
    const queue = [0];
    // console.log( queue.length );

    while (queue.length) {
        const start = queue.shift();
        console.log( start );
        if (visited[start]) continue;

        for (let end = start + 1; end <= s.length; end++) {
            if (!wordSet.has(s.slice(start, end))) continue;
            if (end === s.length) return true;
            queue.push(end);
        }
        visited[start] = true;
    }
    return false;
};   

let s = "cars"
let wordDict = ["car", "ca", "rs"]
console.log(wordBreak(s, wordDict));