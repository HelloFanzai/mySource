function mypowerball() {
    
    let whileBall=[]
    let redBall=[]
    for (let i = 1; i <= 5; i++) {
        whileBall.push( Math.floor( Math.random()*70 ) )
    }
    redBall.push( Math.floor( Math.random()*27 ) )
    whileBall.sort( (a,b)=>a-b )
    // console.log('While Ball is ：',whileBall,'~ red Ball is ：',redBall);
    return [...whileBall,...redBall]
    // console.log();
}
// console.log(mypowerball());

let theA='4,33,43,53,65,21'
let myA1=mypowerball().join(',')+''
let myA2=mypowerball().join(',')+''
let myA3=mypowerball().join(',')+''
let myA4=mypowerball().join(',')+''
let myA5=mypowerball().join(',')+''
let theCount=0
while (1) {
    if (theCount%1000000==0) {
        // console.log(`Did ${theCount} times, myA1:[${myA1}], myA2:[${myA2}], \nmyA3:[${myA3}], myA4:[${myA4}], myA5:[${myA5}],\n`);
        console.log(`Did ${theCount} times`);

    }
    if ( myA1 == theA || myA2 == theA || myA3 == theA || myA4 == theA || myA5== theA ) {
        // console.log(`Did ${theCount} times, myA:${myA}`);
        console.log(`Did ${theCount} times, myA1:[${myA1}], myA2:[${myA2}], \nmyA3:[${myA3}], myA4:[${myA4}], myA5:[${myA5}],\n`);

        break
    }
    theCount++
    myA1=mypowerball().join(',')+''
    myA2=mypowerball().join(',')+''
    myA3=mypowerball().join(',')+''
    myA4=mypowerball().join(',')+''
    myA5=mypowerball().join(',')+''
}
// mypowerball()
// mypowerball()
// mypowerball()
// mypowerball()