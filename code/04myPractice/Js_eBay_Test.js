function name1(input1,input2) {
    if (input1!=input2.length) {
        return 'input1!=input2.length'
    }
    let myResult=0
    for (let i = 0; i < input1; i++) {
        let theL=input2[i].length-1
        if ( input2[i][0]=='.' && input2[i][theL]=='-' ) {
            let count1=0
            let count2=0
            for (let j = 0; j < input2[i].length; j++) {
                if (input2[i][j]=='.') {
                    // console.log( 'c1=',count1 );
                    count1++
                }
                if (input2[i][j]=='-') {
                    // console.log( 'c2=',count2 );
                    count2++
                }
            }
            if (count1==count2) {
                myResult++
            }
        }
    }
    return myResult
}
input1=3;
input2=['...---','..-','...---.-']
console.log( name1(input1,input2) );
//判断字符: 1，‘.’开头；2，‘-’结尾；3，‘.’和‘-’的数量一致
//返回正确的字符的数量