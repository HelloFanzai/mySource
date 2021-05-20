// 问题：  https://stackoverflow.com/questions/55189569/minimum-number-of-digit-changes-to-get-two-arrays-to-have-the-same-value
let a = [1234, 4321]
let m = [2345, 3214]

function minimumMoves(a, m) {
    // Write your code here
    let numMoves = 0;
    let num1 = '' ;
    let num2 = '' ;
    let digit1 = '';
    let digit2= '';
    for (let i = 0; i < a.length; i++)
    {      
        num1 = a[i]; 
        num2 = m[i];      
        while (num1 != 0) {
          
            digit1 = num1 % 10; 
            digit2 = num2 % 10; 
            num1 = Math.trunc(num1 / 10); 
            num2 = Math.trunc(num2 / 10);
            numMoves = numMoves + Math.abs(digit1 - digit2);

        }
    }
    return numMoves;
}

console.log(minimumMoves(a, m));

console.log( ~~13.37 );