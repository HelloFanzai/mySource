function thefn() {
    var a = 1
    return function(){
        var b=2
        a++
        b++
        console.log(a,b);
    }
}

let test = thefn()
test()
test()
test()