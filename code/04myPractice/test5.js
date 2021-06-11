let theThis=[0, 2, 0, 0, 6, 0, 8, 11, 13, 22]
const theArr = theThis
.map(theM=>{return  ++theM})
.filter(theF=>{return theF>=5 })



theThis=theArr
console.log( theThis,theArr );
