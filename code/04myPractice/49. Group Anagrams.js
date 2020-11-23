/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let myMap = {};  //ES6 Map<=>Object
    let a1 = new Map();
    
    for(let word of strs) {
        // this will convert 'eat' into 'e','a','t' and then sort it to 'a','e','t' and then join to 'ate'
        // we do this so the sorted anagram key will always be the same. Other related anagrams will have the same key
        const allString = word.split("").sort().join(""); //为什么这里没有修改原值
        console.log( word,'  ',allString,'\n' );
        
        // if we have a mapping that exists for the anagram group, push the item to that group, 
        // else create a new array and append the word

        // if ( myMap[allString] ) {
        //     myMap[allString].push(word) 
        // }else{
        //     myMap[allString] = [word]
        // }

        myMap[allString] ? myMap[allString].push(word) : myMap[allString] = [word];

    }
    // returns all the mappings as a unified array.
    return Object.values(myMap);
};

a1=["eat", "tea", "tan", "ate", "nat", "bat"];
console.log( groupAnagrams(a1) );