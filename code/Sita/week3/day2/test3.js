var theA=99

function theFn1() {
    console.log( theA );
}

function theFn2() {
    console.log( theA=theA+1 );
    
}

theFn1()
theFn2()