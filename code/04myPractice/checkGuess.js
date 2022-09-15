// Write a function to validate which letters in a guess word are present, absent,
// or correct in a solution word.
//
// If there are duplicate letters in the guess or the solution, correct letters
// take precedence, then present letters, then absent.
//
// e.g. checkGuess('retro', 'treat')
// returns ['present', 'present', 'present', 'absent', 'absent']



const checkGuess = (solution, guess) => {
    // YOUR CODE HERE
    
    let theS = solution
    let theG = guess
    let theA = []
    
    for ( let i = 0; i < theG.length; i++ ) {
        if ( theS[i]===theG[i] ) {
            
            theS = theS.replace(theG[i],'@')
            theG = theG.replace(theG[i],'#')
            theA.push('correct')
        }else if ( theS.includes( theG[i] ) ) {
            // console.log( theS +' @ ' + theG);
            theS = theS.replace(theG[i],'@')
            theG = theG.replace(theG[i],'#')
            theA.push('present')
            // console.log( theS +' # ' + theG);
        } else {
            
            theA.push('absent')
        }
    }
    
    console.log(theS);
    console.log(theG);

    return theA
};

let theS = 'ABCDE'
let theG = 'MMAAM' // ['present', 'present', 'present', 'absent', 'absent']);
// validate(checkGuess('retro', 'treat'), ['present', 'present', 'present', 'absent', 'absent']);
// validate(checkGuess('other', 'retro'), ['present', 'present', 'present', 'absent', 'present']);
// validate(checkGuess('other', 'ogles'), ['correct', 'absent', 'absent', 'correct', 'absent']);
console.log( checkGuess(theS,theG) );

