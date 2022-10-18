// type nameAPI = {
//     id: number,
//     name: string
//   }[];
  
//   type positionAPI = {
//     id: number,
//     position: string
//   }[];
  
//   const a: nameAPI = [
//     { id: 3, name: 'Matt' },
//     { id: 4, name: 'Greg' },
//     { id: 1, name: 'David' },
//     { id: 2, name: 'John' }
//   ]
  
//   const b: positionAPI = [
//     { id: 2, position: 'Leader' },
//     { id: 3, position: 'Captain' },
//     { id: 6, position: 'Rogue' },
//     { id: 4, position: 'VP' },
//     { id: 5, position: 'Pawn' }
//   ];
  
//   // Should out something like this
//   // [ { id: 1, name: 'David', position: null }, 
//   //   { id: 2, name: 'John', position: 'Leader' }, 
//   //   { id: 3, name: 'Matt', position: 'Captain' }, 
//   //   { id: 4, name: 'Greg', position: 'VP' }, 
//   //   { id: 5, position: 'Pawn', name: null } ]
//   //   { id: 6, position: 'Rogue', name: null } ]
  
  
//   // Combine Both APIs into a single API, replace outlier values with Null
//   // Create an appripriate output type
//   // Do not mutate original arrays
//   // Values are ensured (no duct taping)
//   // Code with What Comfortable with
//   // Test work often
  
//   function combineAPIs(apiA: nameAPI, apiB: positionAPI): any {
    
//     let mergedArr:any = []
//     let resuleArr:any = []
  
//     for (let i = 0; i < apiA.length; i++) {
//       let tempObj:any ={ id: 0, name: null }
//       tempObj.id = apiA[i].id
//       tempObj.name = apiA[i].name
//       mergedArr.push(tempObj)
//     }
//     for (let i = 0; i < apiB.length; i++) {
//       let tempObj:any ={ id: 0, position: null,}
//       tempObj.id = apiB[i].id
//       tempObj.position = apiB[i].position
//       mergedArr.push(tempObj)
//     }
  
//     // for (let i = 0; i < mergedArr.length; i++) {
      
//     //   let temp = mergedArr.filter((item: any)=>{
        
//     //     return item.id == mergedArr[i]?.id
//     //   })
  
//     //   if ( temp.length>1 ) {
//     //     let temp01 = Object.assign(temp[0],temp[1])
//     //     // console.log( temp01 )
//     //   }
  
      
      
//     // }
  
//     mergedArr = mergedArr.map( (el:any) => {
//       el = mergedArr.filter( (item:any)=>{
//         return el.id == item.id
//       } )
  
//       if ( el.length > 1 ) {
//         el = Object.assign(el[0],el[1])
//       }else{
//         el[0].name = el[0].name ? el[0].name : null
//         el[0].position = el[0].position ? el[0].position : null
//         el = el[0]
//       }
  
//       return el
//     });
  
//     mergedArr = mergedArr.filter( (item:any,index:any,array:any)=>{
//       return array.indexOf(item) === index
//     } )

//     mergedArr.sort( (a:any,b:any)=>a.id-b.id )
  
  
  
      
//     console.log( mergedArr );
//   }
  
//   console.log(combineAPIs(a, b));
  