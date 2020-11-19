var bar = 5;
function foo(bar) {
    if (bar >= 5) {
        bar = 'ZZZ'
    } else {
        let bar = 'qux'
    }
    console.log( bar );

}
foo(2)
foo(6)
console.log(bar);