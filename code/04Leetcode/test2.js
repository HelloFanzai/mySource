// let theArray = [1,2,2,3,3,3,4]
// let newA=[...new Set( theArray )]

// var removeDuplicates = function(nums) {
//     nums=[...new Set( nums )]

//     return nums
// };
// console.log( removeDuplicates( theArray ) );

function theName() {
    console.time('theTime')
    let theA = 1
    for (let i = 1; i < 1000; i++) {
        theA = theA/i
    }
    console.timeEnd('theTime')
    return theA
}

console.log( theName() );


