var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let mapOfS = {};
    let key;
    
    //Add chars and num occurences of that char in s into a map
    for(char of s){
        key = char;
        if(key in mapOfS) mapOfS[key] += 1;
        else mapOfS[key] = 1;
    }
    
    //Check if any chars in the 2nd str exists in the map, if it does remove the value of the key by 1
    for(char of t){
        key = char;
        if(key in mapOfS) mapOfS[key] -= 1;
    }
    
    //Iterate through the map, if there is any value in the map that is not 0, return false
    for(key in mapOfS){
        if(mapOfS[key] !== 0) return false;
    }
    
    return true; 
};

s='abcdef';
t='abcdef';

console.log( isAnagram(s,t) );