/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let theAnser  = 0
    let theSubString = ''

    for (const theS of s) {
        if ( theSubString.includes(theS) ) {  // if find duplicate
            theAnser = Math.max( theAnser, theSubString.length )
            console.log( theS,theSubString.substring( theSubString.indexOf( theS )+1 ) );
            theSubString = theSubString.substring( theSubString.indexOf( theS ) + 1 ) // reset, and set start index in next pos
        }
        theSubString += theS
    }
    
    theAnser = Math.max( theAnser, theSubString.length )
   
    // return theSubString+theAnser
    return theAnser
  }

  s = "abcabcbb"
  s = "pw wkew"
  console.log( lengthOfLongestSubstring(s) );