/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let reg = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let sub = {
        'IV':4,
        'IX':9,
        'XL':40,
        'XC':90,
        'CD':400,
        'CM':900
    }
    let add = 0;
    
    for (let i = 0; i< s.length;) {
        let extended = s.slice(i,i+2);
        if (sub[extended]) {
            console.log(extended,'sub[extended]='+sub[extended]);
            add += sub[extended];
            i+=2
        } else {
            add += reg[s[i]];
            i++
        }
    }
    return add
};

s='CMII';
console.log( romanToInt(s) );





// ------------------------------------

// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var romanToInt2 = function (s) {
//     var number = 0;
//     const rom = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     };
    
//     for(var i = 0; i < s.length; i++){
//         if(rom[s[i]] < rom[s[i+1]]){
//             number -= rom[s[i]];
//         }else{
//             number += rom[s[i]];
//         }
//     }      
//     return(number);
//   };
  
//   s2 = 'CMII';
//   // s2 = 'III';
//   console.log(romanToInt2(s2));