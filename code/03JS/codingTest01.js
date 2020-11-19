var stdin = 'how are you, aoc';
var inputPart1 = stdin.split(', ')[0]; // how are you
var inputPart2 = stdin.split(', ')[1]; // abc
for (let i = 0; i < inputPart1.length; i++) {
    for (let j = 0; j < inputPart2.length; j++) {
        if ( inputPart2[j]=inputPart1[i] ) {
            inputPart1=inputPart1.replace( inputPart2[j],'' )
        }         
    }
}
console.log(inputPart1);

