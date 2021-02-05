// function myFN(theInput) {
//     return theInput
// }

// let theInput=[2,3,4,1,6,8]
// console.log( myFN(theInput) );
// What is equivalent of the following using React.creatElement? 
const element = ( <h1 className="greeting!"> Hello, world! </h1> );


const element1 = React.createElement( 
    'h1', 
    {className:"greeting!"},
     'Hello, world!' 
);

