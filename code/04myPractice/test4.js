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

let theKey = 'author'
console.log( theFN(posts,theKey) );