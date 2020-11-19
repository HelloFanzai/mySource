var numbers = [1,2,3,4,5];

function myfn1(tt1,num){
        console.log(`tt1=${tt1},nm1=${num}, numbers=${numbers}`);
    return tt1 + num;
}
numbers.reduce(myfn1);
