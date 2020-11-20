function mypowerball() {
    
    let whileBall=[]
    let redBall=[]
    for (let i = 1; i <= 5; i++) {
        whileBall.push( Math.floor( Math.random()*70 ) )
    }
    redBall.push( Math.floor( Math.random()*27 ) )
    whileBall.sort( (a,b)=>a-b )
    console.log('While Ball is ：',whileBall);
    console.log('red Ball is ：',redBall);
}

mypowerball()