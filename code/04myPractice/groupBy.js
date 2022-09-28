let posts = [
    {
      author: 'saransh',
      title: 'Learning context API and the useContext React hook',
    },
    {
      author: 'pranshu',
      title: 'Machine Learning Misconceptions That Software Developers Have',
    },
    {
      author: 'saransh',
      title: 'Understanding the useReducer hook in React',
    },
  ];

function theFN(theArr,theKey) {

    let theNewArr = theArr.concat()
    let theNew = {}

    for (let i = 0; i < theNewArr.length; i++) {
        if ( !theNew[ theNewArr[i][theKey] ] ) {
            theNew[ theNewArr[i][theKey] ] = []
        }
        theNew[ theNewArr[i][theKey] ].push(theNewArr[i])
    }
    // delete theNewArr[0].author
    // console.log( theNewArr  );
    return theNew
}


function groupBy2(theArr,theKey) {
  let myResult = theArr.reduce( (all,cureent)=>{
    if ( !all[ cureent[theKey] ] ) {
      all[ cureent[theKey] ] = []
    }
    all[ cureent[theKey] ].push( cureent )
    return all
  },{})
  return myResult
}


let theKey = 'author'
console.log( theFN(posts,theKey) );
console.log( groupBy2( posts ,theKey) );
// console.log( groupBy2(posts,theKey) );