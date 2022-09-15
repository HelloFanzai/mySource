`
We get lot of strings from our data stream, 
one of the problems we face is that sometimes the data strings stored are as rotations,
thus we try to identify whether the string is rotation of one of the pool of strings or not?

Example 1
POOL : [ECHO, FIRETV, AMAZON, LUNA, ALEXA, WEB, SERVICE, SERVICES, MINI]
Classifier: ZONAMA
O/P => True



Example 2
POOL : [ECHO, FIRETV, AMAZON, LUNA, ALEXA, WEB, SERVICE, SERVICES, MINI]
Classifier: HOCE
O/P => False
`

function isRotations( thePool,classifier ) {

    let theR = []
    for (let i = 0; i < thePool.length; i++) {
        if ( thePool[i].length !== classifier.length  ) {
            continue
        }else{
            
            let theTemp = classifier+''
            for (let i = 0; i < classifier.length; i++) {
                
                
                theTemp = theTemp.split('')
                theTemp.unshift( theTemp.pop() )
                theTemp = theTemp.join('')
                if (  theTemp === thePool[i] ) {
                    return "True " + thePool[i]
                }
                
                
            }
            // theR.push( thePool[i] ) 
        }
        
    }

    return "false " + classifier
    return thePool + classifier
}
let theA = ['ECHO', 'FIRETV', 'AMAZON', 'LUNA', 'ALEXA', 'WEB', 'SERVICE', 'SERVICES', 'MINI']
let theB = 'HOCE'
console.log( isRotations(theA,theB) );