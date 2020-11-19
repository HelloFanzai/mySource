var ch1='b'
var ch2;
function ahaha(ch1,ch2){
    switch (ch1) {
        case 'a':
            ch2='1'
            // console.log( 'casea = '+ch2 );
        case 'b':
            ch2='2222'
            break;
            //return 就是结束当前循环，并且返回一个命令     
        case 'c':
            ch2='3'
            break;
        default:
            ch2='4'
    }
    return ch2
    console.log('我会出来么？');
    
}
console.log( ahaha(ch1,ch2) );
