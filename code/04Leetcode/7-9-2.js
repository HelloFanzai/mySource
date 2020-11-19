stdin='1 2 3 4 5'
var lines = stdin.trim().split('\n')[0].split(' ');
let myAnswer=new Array();
for(var i=lines.length-1; i>=0; i=i-2) { 
    myAnswer.push(+lines[i])
}
console.log( myAnswer, myAnswer.length );


