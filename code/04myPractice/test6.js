Promise.resolve(1)

.then( x => (x + 1) )

.then( x => { throw new Error('1'); })

.catch( err => { throw new Error('2'); } )

.then( x => (x + 1) )

.then( x => console.log(x))

.catch( console.error )