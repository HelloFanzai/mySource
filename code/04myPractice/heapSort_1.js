
let input = [10,4,3,5,1,2]
// let input = [2,5,3,1,10,4]

function heapify( n, i ) {

    if (i >= n) {
        console.log( input );
        return input
    }

    let c1 = 2 * i + 1
    let c2 = 2 * i + 2
    let max = i

    if ( c1 < n && input[c1] > input[max] ) {
        max = c1
    }
    if ( c2 < n && input[c2] > input[max] ) {
        max = c2
    }
    if ( max !== i ) {
        console.log( input,`n = ${n}, i= ${i}, Max=${max}` );
        [ input[max], input[i] ] = [ input[i], input[max] ]
        heapify(  n , max )
    }

    console.log( input,`n = ${n}, i= ${i}` );
}

function biuldHeap(  ) {
    let last_node = input.length - 1
    let parent = Math.floor( (last_node - 1)/2 )
    console.log( parent, last_node );
    for (let i = parent; i >= 0; i--) {
        heapify( input.length, i )
        
    }
}

function heapSort() {
    biuldHeap()
    for (let i = input.length - 1; i >=0; i--) {
        [ input[i],input[0] ] = [ input[0], input[i] ]
        heapify( i,0 )
        
    }

}

heapSort()
// console.log( heapify( input.length, 0 ) );
console.log( input );

