function theFn1() {
    console.log('theFn1 did');
}
theFn1()

function theFn2(a,b) {
    console.log(a,"+",b);
}
theFn2('wo','ca')

function theFn3() {
    // console.log(a[0]);
    console.log(arguments[1]);
    console.log(JSON.stringify(arguments));
}
theFn3('wo','ca')

function country() {
    // console.log(a[0]);
    console.log('USA');
    city()
}
function city() {
    // console.log(a[0]);
    console.log('New Jersey');
}
country()

function theAdd(a,b) {
    let c = a+b
    let d = new Date().toUTCString()
    console.log(d);
 
    let e ='abcdea'
    console.log(e.indexOf('a'));
    console.log(e.lastIndexOf('a'));
    console.log(d);
    // return c
}
console.log(theAdd(1,2)); //undefined



