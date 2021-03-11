let theA='abababa'
let theObj={ }
for (let i = 0; i < theA.length; i++) {
    if ( theObj.hasOwnProperty(theA[i]) ) {
        theObj[theA[i]]++
    }else{
        theObj[theA[i]]=1
    }
}
console.log( theObj );

let theObj2={}
theObj2.theP01 = 'hi'
console.log( theObj2.hasOwnProperty('theP01'), ' 👈theP01' );
console.log( theObj2.hasOwnProperty('theP02'), ' 👈theP02' );

let theObj3={
    'theName':'name1',
    'theId':'id1'
}
console.log( theObj3.theId );
