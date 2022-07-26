let theSet = new Set()

theSet.add(1)
theSet.add('cc')

// console.log( theSet.values() );
// console.log( theSet.entries() );

let theObj={
  undefined:undefined
}

let theMap = new Map([[]])
theMap.set(undefined,undefined)

console.log( theObj,Object.keys(theObj) );
console.log( theMap,theMap.keys() );