function theFN(T) {
    let N = T.length
    let res = 0
    
    for (let i = 0; i < N-1; i++) {
        let bad = {}
        let bad_count = 1
        if (T[i]!=i) {
            bad[T[i]]=1
        }

        for (let j = i+1; j < N; j++) {

            if (bad[j]) {
                bad_count -= bad[j]
            }

            if ( !((i<=T[j])&&(T[j]<=j)) ) {
                if (bad[T[j]]) {
                    bad[T[j]] += 1
                } else {
                    bad[T[j]] = 1
                }
                bad_count += 1
            }else if ( j==T[j] ) {
                bad_count += 1
            }
            if ( bad_count <= 1 ) {
                res += 1
            }
        }
    }
        
    return res+N

}

let T = [2,0,2,2,1,0] //#12
// T = [2,4,3,3,0,0] //#9
// T = [2,0,4,0,4] //#9
// T = [2,2,2] //#5
console.log( theFN(T) )