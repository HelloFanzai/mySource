function theFn(p) {
    // return p.replaceAll('c','f123')  // replaceAll只能在HTML里运行
    return p.replace(/c/g, 'f')  //正则表达式
}
theA = 'abcbcbc'
console.log(theFn(theA));
// console.log( theA.replaceAll('f','c') );
