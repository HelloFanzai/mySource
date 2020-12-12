let inp1=new Map( [['a1',[2,3,4,5]],['a2',3],['a3,4']] )

let theT= inp1.get('a1')
theT.push('haha')

inp1.set( 'a1',theT )

// theA.push(123)

console.log( inp1 );

