/**
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function (s) {
  var number = 0;
  const rom = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  };
  
  for(var i = 0; i < s.length; i++){
      if(rom[s[i]] < rom[s[i+1]]){
          number -= rom[s[i]];
      }else{
          number += rom[s[i]];
      }
  }      
  return(number);
};

s2 = 'XL';
// s2 = 'III';
console.log(romanToInt2(s2));