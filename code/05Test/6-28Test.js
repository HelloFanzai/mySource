var stdin = '1 2 4 5 6 9 10 15';
stdin=stdin.split(' ')
var myAnswerr = stdin.filter( (stdin)=> {
    return stdin % 2 == 0;
});
myAnswerr=myAnswerr.join(' ')
console.log(myAnswerr); 