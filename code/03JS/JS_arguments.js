function test(arg1, arg2) {

    let theA = arg1 + arg2

    console.log(theA, arguments, arguments[0], arguments[1], arguments[3]);
    return theA
}
test(1);
test(1, 2);
test(1, 2, 3);
test(1, 2, 3, 4);