
function theFn(theI){
  let theResult = ''
  let lookUp = {
    M:1000,CM:300,D:500,CD:400,C:100,
    XC:90,L:50,XL:40,X:10,
    IX:9,V:5,IV:4,I:1
  }
  for( let i in lookUp ){
    while( theI >=lookUp[i]  ){
      theResult +=i
      theI -= lookUp[i]
    }
  }
  return theResult
}

let theInput = 11
console.log( theFn(theInput)  )
