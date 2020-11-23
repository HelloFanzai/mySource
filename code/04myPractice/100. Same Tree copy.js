// var isSameTree = function(p, q) {
//     if (p === q) return true;
//     if (p === null && q !== null) {
//         return false;
//     };
//     if (p !== null && q === null) {
//         return false;
//     };
//     if (p.val !== q.val) {
//         return false;
//     };
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };


var isSameTree = function(p, q) {
    if (p.length != q.length){
        return false
    }
    for (let i = 0; i < q.length; i++) {
        if (q[i] != p [i]) {
            return false
        }      
    }
    console.log( q[1] );
    return true
};

p=[1,2]
q=[1,null,2]
console.log( isSameTree(q,p) );
