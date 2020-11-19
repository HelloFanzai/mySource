var twoSum = function(numbers, target) {
    
    var i1 = Math.floor( Math.random() * numbers.length );
    var i2 = Math.floor( Math.random() * numbers.length );
    var result = result=numbers[i1] + numbers[i2]; 
    var resultTimes = 2;

    function sameRandom(fi1,fi2){
        fi1,fi2=-1;
        fi1 = Math.floor( Math.random() * numbers.length );
        fi2 = Math.floor( Math.random() * numbers.length );

        if (fi1!=fi2) {
            if (fi1 > fi2) {
                [fi1,fi2]=[fi2,fi1]
            }
            console.log('function=',[fi1,fi2]);
            
            return [fi1,fi2]
        } else {
            sameRandom(fi1,fi2)            
        } 
    }

    do {
        console.log('old i1=',i1,'i2=',i2);
        var newRandom=sameRandom(i1,i2);
        result=numbers[newRandom[0]] + numbers[newRandom[1]];
        
        console.log('new i1=',numbers[  +newRandom[0]],'i2=',numbers[ +newRandom[1]],'  ',newRandom,'rr=',result,'times=',resultTimes++);
                
    }
    while ( result != target )
    return newRandom;      


};

console.log(twoSum([0,0,5,10],0));