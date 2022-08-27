// [10:30] <john> hello there!
// [10:30] <john> hello there!
// [10:30] <john> hello there!
// Wed 05/31 @ server01 <martha> hello!hello!



// [10:30] <john1> hello there1!
// [10:30] <john1> hello there2!
// [10:30] <john1> hello there3!

let theInput= [
    { name: "john1", message: "hello there11!"},
    { name: "john1", message: "hello there12!"},
    { name: "john2", message: "hello there21!"},
    { name: "john2", message: "hello there22!"},
    { name: "john2", message: "hello there23!"},
    { name: "john3", message: "hello there23! hello there23! hello there23! hello there23!"},
    { name: "john4", message: "hello there23! hello there23! hello there23!"},
    { name: "john5", message: "hellothere23!"},
    
  ]
  
  // PART 1
  
  function myFn(input){
  
    let theObj={} //hash map inJS Object
    
    for(let i=0;i<input.length;i++){  // if i =1 theInput[1]:{ name: "john1", message: "hello there12!"}
      
      if( theObj[input.name] ){ 
        //theObj[input.name]++
        theObj[input.name] += theObj[input.message].split(' ').length
        theObj[input.name] = theObj[input.name] + theObj[input.message].split(' ').length
        // theObj.john1    =     2              +       2      "hello there12!".split(' ')=> ['hello','there12!'].length   => 2                  
      }else{
        
        //theObj[john1] = 2
        theObj[input.name] = theObj[input.message].split(' ').length  // ['hello','there11!']
      }
      
    }
    return theObj  //  {  'john1': 4,'john2': 6, }
  
  }
  
  
  // PART 2
  
  function myFn(input, n){
  
    let theObj={}//hash map inJS Object
    let theArray = []
    
    for(let i=0;i<input.length;i++){  // if i =1 theInput[1]:{ name: "john1", message: "hello there12!"}
      
      if( theObj[input.name] ){ 
        //theObj[input.name]++
        theObj[input.name] += theObj[input.message].split(' ').length
        theObj[input.name] = theObj[input.name] + theObj[input.message].split(' ').length
        // theObj.john1    =     2              +       2      "hello there12!".split(' ')=> ['hello','there12!'].length   => 2                  
      }else{
        
        //theObj[john1] = 2
        theObj[input.name] = theObj[input.message].split(' ').length  // ['hello','there11!'      
      }
    }
      
    //  {  'john1': 4,'john2': 6, }
      for( let theI in theObj ){
        let temp = {}
        temp['name'] = theI
        temp['message'] = theObj[theI]
        theArray.push( temp )
      }
      //[  // save in theArray -- n = 2 
      //  {  name: "john1", message: 8 },
      //  {  name: 'john2', message: 6 },
      //  {  name: 'john3', message: 6 },
      //]
      
      theArray =  theArray.sort( (a,b)=> b.message - a.message )
      
      //for(let i=0;i<n;i++){
        //if( theArray[i].message == theArray[i+1].message ){
          //console.log( theArray[i] ) 
          //console.log( theArray[i+1] )
        //}
      //}
    
      let i = 0 
      while( i<=n || n< theArray.length ){
        if( theArray[i].message == theArray[i+1].message ){
          console.log( theArray[i] ) // {  name: "john2", message: 6 },
          //console.log( theArray[i+1] )
          i++
          n++
        }else{
          console.log( theArray[i] ) // {  name: "john2", message: 6 },
          i++
        }
        
      }
    
    
      
     
    return theObj  //  {  'john1': 4,'john2': 6, } myMxd123 Mxd@mima123
  
  }