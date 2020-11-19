/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let theObj={
    A: 'a', B: 'b', C: 'c', D: 'd', E: 'e', F: 'f',
    G: 'g', H: 'h', I: 'i', J: 'j', K: 'k', L: 'l',
    M: 'm', N: 'n', O: 'o', P: 'p', Q: 'q', R: 'r',
    S: 's', T: 't', U: 'u', V: 'v', W: 'w', X: 'x',
    Y: 'y', Z: 'z',
  }  
  let myAnser=''
  for (let theKey of str) {
      if (theObj[theKey]) {
          myAnser += theObj[theKey];
          console.log( myAnser ,'===', theObj[theKey] );
          continue
      }else{
        myAnser += theKey
        console.log( myAnser ,'+++', theKey );
      }
  }
  return myAnser
};

let theInput='Hello'
console.log( toLowerCase(theInput) );