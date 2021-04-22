// // Closure Example 1
// let a = 10;
// function outer() {
//     let b = 20;
//     function inner() {
//         console.log(a);
//         console.log(b);
//     }
//     inner();
// }
// outer(); // Output : 10 20

// // Closure Example 2
// var a = 10;
// function outer() {
//     var b = 20;
//     Var inner = function () {
//         console.log(a);
//         console.log(b);
//     }
//     return inner;
// }
// var innerFun = outer();
// innerFun();
// // Output : 10 20

// Closure Example 3
var a = 10;
function outer() {
    var b = 20;
    var inner = function () {
        console.log(a);
        console.log(b);
    }
    return inner;
}
function processEngine(fName) {
    fName();
}
var innerFun = outer();
processEngine(innerFun); // // Output : 10 20

// // Closure Example 4
// var a = 10;
// function outer() {
//     var b = 20;
//     var inner = function () {
//         console.log(a);
//         console.log(b);
//     }
//     return inner;
// }
// var innerFun1 = outer();
// innerFun1(); // Output : 11 21
// var innerFun2 = outer();
// innerFun2(); // Output : 12 21