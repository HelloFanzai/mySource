function myFn(N, M) {

    // let myAnswer = 0
    // let theX = 0
    // let theNext = 1;
    // while (theNext != 0) {
    //     theNext = (theX + M) % N;
    //     console.log('x=', theX, ' theNext=', theNext);
    //     theX = theNext;
    //     ++myAnswer;
    // }
    // return myAnswer

    let a =N, b =M;
    while ( b!=0 ) {
        let theTemp = b;
        b = a % b
        a = theTemp
    }
    return N / a

}

let myN = 10, myM = 4
console.log(myFn(myN, myM));