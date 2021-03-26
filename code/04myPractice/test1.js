nums=[2,3,2]
theOriArray=nums.concat() //[2,3,2]
noDouArray=[2,3]
for (const theX of noDouArray) {
    console.log( theX );
    theOriArray.indexOf(theX) != -1 ? theOriArray.splice(theOriArray.indexOf(theX), 1) : 1
}

console.log( `nums=${nums},ori=${theOriArray},noDo=${noDouArray}` );