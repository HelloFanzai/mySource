let Minimum_deletions = function (S) {
    let allCount={}
    let myAnswer = 0; //计算减去的次数

    for (let i = 0; i < S.length; i++) {
        allCount[S[i]] ? allCount[S[i]]++ : allCount[S[i]] = 1
    } //统计每个字母出现的次数

    // let theMax = Math.max(...Object.values( allCount ));
    let theArray = [...Object.values( allCount )]//.sort((a, b) => a - b);
    //用出现的次数，把它转换成数组，然后保持每个元素是唯一，若不唯一则减1.计算减1的次数

    for (let i = theArray.length; i >0; i--) {
        theArray.sort((a, b) => a - b)

        // console.log( theArray[i] );
        if ( theArray[i]==0 ) {
            theArray.splice(i,1) //若减为零，踢出数组
            continue
        }
        if ( theArray[i]==theArray[i-1] ) {
            theArray[i-1]--
            myAnswer ++
            i++
        }
        console.log( theArray );
    }

    console.log( allCount );
    // delete allCount.e
    return myAnswer
}

theS='abbccddddffffggggzzzzzxxxxx'
console.log( Minimum_deletions(theS) );