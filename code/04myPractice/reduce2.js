let theString='ABC'
let myAnser

myAnser=theString.split('') //[ 'A', 'B', 'C' ]
// myAnser=[1,2,3,4,5]
myAnser=myAnser.reduce((baba,son)=>{
    console.log( `baba=${baba} ~~ son=${son}` );
    if (baba.length==1) {
        baba=baba+baba
    }
    return baba= baba + son + son
})
console.log( myAnser  );

// 1r: A B C D  baba=A son = B   baba +/-/*// son
// 2r: ab C D   baba=AB son=C
// 3r: abc D   baba=ABC son=D
// 4r: abcd   baba=ABCD son=D
