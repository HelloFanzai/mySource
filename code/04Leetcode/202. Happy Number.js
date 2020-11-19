/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n = [...(n + '')];
    
    for (let i = 0; i < 1000; i++) {
      let count = 0;
      
      for(let j = 0; j < n.length; j++) {
        count += n[j] ** 2;
      }
      
      if (count === 1) return true;
      n = [...(count + '')];
    }
    return false;
};
n=119;
console.log( isHappy(n) );